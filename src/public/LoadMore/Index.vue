<template>
  <div class="load-more clearfix">
    <slot></slot>
    <div class="load-state" v-if="showState">
      <div class="finish" v-if="finish">
        <span>加载完成</span>
      </div>
      <div class="more" v-else>
        <div class="loading-animation">
          <div class="loading-outter"></div>
          <div class="loading-inner"></div>
        </div>
        <span>加载中</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {
  },
  data () {
    return {
      showState: true, // 是否显示底部加载更多内容
      finish: false, // 是否加载完成
      loading: false, // 是否正在加载中
      domClientHeight: 0
    }
  },
  created () {
  },
  mounted () {
    // 获取组件内容可视区域的高
    if (this.$el) {
      this.domClientHeight = window.innerHeight - this.$el.getBoundingClientRect().top
    } else {
      this.domClientHeight = window.innerHeight
    }
    this.switchBottom()
    this.bindSrcoll()
  },
  methods: {
    switchBottom () {
      this.$nextTick(() => {
        // 判断容器内容是否 大于 （网页可视区域-自身距离顶部距离）
        if (this.$el.scrollHeight > this.domClientHeight) {
          this.showState = true
        } else {
          // 如果页面不足一屏且还有下一页数据，继续执行加载更多方法
          if (!this.finish) {
            this.showState = true
            setTimeout(() => {
              this.$emit('loadMore')
            }, 1000)
          } else {
            // 否则不显示底部加载状态
            this.showState = false
          }
        }
      })
    },
    async scrollPage () {
      if (!this.$el) {
        return
      }
      var bottom = this.$el.getBoundingClientRect().bottom
      // 当内容滚动到距离底部<100时
      if (bottom - 100 < window.innerHeight && !this.loading && !this.finish) {
        this.loading = true
        setTimeout(() => {
          this.$emit('loadMore')
        }, 500)
      }
    },
    bindSrcoll () {
      this.unScroll()
      document.querySelector('.page').addEventListener('scroll', this.scrollPage)
    },
    unScroll () {
      document.querySelector('.page').removeEventListener('scroll', this.scrollPage)
    }
  },
  // 视图数据更新，重新调用
  updated () {
    this.switchBottom()
  },
  // 如果有用到keep-alive，组件激活时调用
  activated () {
    this.switchBottom()
  },
  // 页面销毁，移除滚动监听
  beforeDestroy () {
    this.unScroll()
  }
}
</script>
<style lang="less" scoped>
.load-more {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  -webkit-overflow-scrolling: touch;
  .load-state {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100px;
    background: #f5f5f5;
    font-size: 42px;
    color: #f50057;
    .finish {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .more {
      display: flex;
      justify-content: center;
      align-items: center;
      .loading-animation {
        position: relative;
        margin-right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        .loading-outter {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 4px solid #f50057;
          border-left-color: transparent;
          border-bottom: 0;
          border-radius: 50%;
          animation: loader-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41)
            infinite;
        }
        .loading-inner {
          position: absolute;
          left: calc(50% - 15px);
          top: calc(50% - 15px);
          width: 30px;
          height: 30px;
          border: 4px solid #f50057;
          border-right: 0;
          border-top-color: transparent;
          border-radius: 50%;
          animation: loader-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41)
            infinite;
        }
      }
    }
  }
}
@keyframes loader-outter {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes loader-inner {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
</style>
