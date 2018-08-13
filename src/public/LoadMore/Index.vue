<template>
  <div class="load-more clearfix" @scroll="scrollPage">
    <div class="load-content">
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
      loading: false // 是否正在加载中
    }
  },
  created () {
  },
  mounted () {
    // this.switchBottom()
    // this.bindSrcoll()
  },
  methods: {
    // 判断.load-more内容是否大于自身可视区域
    switchBottom () {
      this.$nextTick(() => {
        if (this.$el.scrollHeight > this.$el.clientHeight) {
          this.showState = true
        } else {
          // 如果页面不足一屏且且还有下一页数据，继续执行加载更多方法
          if (!this.finish) {
            // 加载状态显示
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
      var contentHeight = document.querySelector('.load-more').clientHeight
      var scrollEl = document.querySelector('.load-content')

      if (!scrollEl) {
        return
      }
      var bottom = scrollEl.getBoundingClientRect().bottom
      if (bottom - 200 < contentHeight && !this.loading && !this.finish) {
        this.loading = true
        setTimeout(() => {
          this.$emit('loadMore')
        }, 500)
      }
    }
    // bindSrcoll () {
    //   this.unScroll()
    //   document.querySelector('.load-more').addEventListener('scroll', this.scrollPage)
    // },
    // unScroll () {
    //   document.querySelector('.load-more').removeEventListener('scroll', this.scrollPage)
    // }
  },
  // 视图数据更新，重新调用
  updated () {
    this.switchBottom()
  },
  // 如果有用到keep-alive，组件激活时调用
  activated () {
    this.switchBottom()
  }
  // 页面销毁，移除滚动监听
  // beforeDestroy () {
  //   this.unScroll()
  // }
}
</script>
<style lang="less" scoped>
.load-more {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  .load-content {
    width: 100%;
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
