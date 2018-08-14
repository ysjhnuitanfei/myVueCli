<template>
  <div id="vux_view_box_body">
    <div ref="pullText" class="pullDesc" :class="{'plate-re':plateRefresh}" id="pullText">
      <!-- {{state.stateText}} -->
      <div class="loading-content" v-show="state==1">
        <img src="~assets/images/upLoading.png" alt="">
        <div class="load-desc">下拉刷新</div>
      </div>
      <div class="finish-desc" v-show="state==2">
        <div class="text">刷新成功</div>
      </div>
      <div class="finish-desc" v-show="state==3">
        <div class="text">刷新失败，请重试</div>
      </div>
    </div>
    <div class="pull-down-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Refresh',
  props: ['domContainer', 'plateRefresh'],
  components: {},
  data () {
    return {
      dragThreshold: 0.3,
      moveCount: 200,
      // state: {},
      // 0:未开始加载， 1:开始加载， 2:加载成功
      state: 0,
      container: null
    }
  },
  mounted () {
    this.container = document.querySelector('.pull-down-content')
    this.bindEvent()
  },
  methods: {
    touchStart: function (event) {
      var self = this
      if (self.refreshFlag) {
        return
      }

      event = event.touches[0]
      self.dragStart = event.clientY

      self.container.style.webkitTransition = 'none'
    },
    touchMove: function (event) {
      var self = this
      if (self.dragStart === null) {
        return
      }

      if (self.refreshFlag) {
        // event.preventDefault()
        return
      }

      var target = event.touches[0]

      self.percentage = (self.dragStart - target.clientY) / window.screen.height

      // 当且紧当scrolltop是0且往下滚动时才触发
      if (window.scrollY == 0) {
        if (self.percentage < 0) {
          event.preventDefault()
          if (!self.changeOneTimeFlag) {
            // self.props.beforePull()
            self.changeOneTimeFlag = 1
          }

          var translateX = -self.percentage * self.moveCount

          self.joinRefreshFlag = true

          if (Math.abs(self.percentage) > self.dragThreshold) {
            // self.setState({
            //   stateText: '释放刷新'
            // })
            this.state = 1
          } else {
            // self.setState({
            //   stateText: ''
            // })
            console.log('下拉状态中')
            this.state = 0
          }

          if (self.percentage > 0) {
            self.container.style.webkitTransform =
              'translate3d(0,' + translateX + 'px,0)'
          } else {
            self.container.style.webkitTransform =
              'translate3d(0,' + translateX + 'px,0)'
          }
        } else {
          if (self.joinRefreshFlag == null) {
            self.joinRefreshFlag = false
          }
        }
      } else {
        if (self.joinRefreshFlag == null) {
          self.joinRefreshFlag = false
        }
      }
    },
    touchEnd: function (event) {
      var self = this
      if (self.percentage === 0) {
        return
      }

      if (self.refreshFlag) {
        // console.log('object')
        // event.preventDefault()
        return
      }

      if (
        Math.abs(self.percentage) > self.dragThreshold &&
        self.joinRefreshFlag
      ) {
        // self.props.onRefresh()

        // self.setState({
        //   stateText: '正在刷新..'
        // })
        this.$emit('pullRefresh')
        this.state = 1
        self.container.style.webkitTransition = '330ms'
        self.container.style.webkitTransform = 'translate3d(0,1.5rem,0)'

        // 进入下拉刷新状态
        self.refreshFlag = 1
      } else {
        if (self.joinRefreshFlag) {
          self.refreshFlag = 1
          self.container.style.webkitTransition = '330ms'
          self.container.style.webkitTransform = 'translate3d(0,0,0)'

          setTimeout(function () {
            // self.props.afterPull()
            // 重置标志位
            self.refreshFlag = 0
          }, 300)
        }
      }

      // 重置changeOneTimeFlag
      self.changeOneTimeFlag = 0

      // 重置joinRefreshFlag
      self.joinRefreshFlag = null

      // 重置percentage
      self.dragStart = null

      // 重置percentage
      self.percentage = 0
    },

    finishLoad () {
    // self.setState({
      //   stateText: '刷新成功'
      // })
      this.state = 2
      this.container.style.webkitTransition = '330ms'
      this.container.style.webkitTransform = 'translate3d(0,0.99rem,0)'

      setTimeout(function () {
        // 重置标志位
        // this.state = 0
        this.refreshFlag = 0
        this.container.style.webkitTransform = 'translate3d(0,0,0)'
        // self.container.style.webkitTransform = 'unset'
        this.state = 0
      }.bind(this), 2000)
    },
    defeatedLoad () {
    // self.setState({
      //   stateText: '刷新成功'
      // })
      this.state = 3
      this.container.style.webkitTransition = '330ms'
      this.container.style.webkitTransform = 'translate3d(0,0.99rem,0)'

      setTimeout(function () {
        // 重置标志位
        // this.state = 0
        this.refreshFlag = 0
        this.container.style.webkitTransform = 'translate3d(0,0,0)'
        // self.container.style.webkitTransform = 'unset'
        this.state = 0
      }.bind(this), 2000)
    },
    setState (state) {
      this.state = state
    },
    bindEvent: function () {
      var dom = this.container // 监听touch事件的元素dom

      dom.addEventListener('touchstart', this.touchStart)
      dom.addEventListener('touchmove', this.touchMove)
      dom.addEventListener('touchend', this.touchEnd)
    }
  }
}
</script>
<style lang="less">
.pull-down-content {
  // position: relative;
  // margin-top: -50px;
  // height: 50px;
  // text-align: center;
  // line-height: 50px;
  // font-size: 14px;
  // background-color: #f8f8f8;
}
.pullDesc {
  .loading-content {
    position: fixed;
    top: 38px;
    left: 50%;
    transform: translateX(-50%);
    > img {
      width: 72px;
      height: 72px;
      margin-left: 25px;
      animation: rotate 1s ease-out infinite;
    }
    .load-desc {
      font-size: 33px;
      color: #ff8a00;
    }
  }
  .finish-desc {
    display: block;
    height: 99px;
    width: 100%;
    position: absolute;
    background-color: #fff1e2;
    font-size: 39px;
    line-height: 99px;
    color: #ff8a00;
    text-align: center;
    transition: 2s ease-out;
    z-index: 1;
  }
  &.plate-re {
    position: relative;
    .loading-content {
      position: absolute;
      top: 38px;
      left: 50%;
      transform: translateX(-50%);
      > img {
        margin-top: 10px;
        width: 72px;
        height: 72px;
        margin-left: 25px;
        animation: rotate 1s ease-out infinite;
      }
      .load-desc {
        display: none;
        font-size: 33px;
        color: #ff8a00;
      }
    }
  }
}
</style>
