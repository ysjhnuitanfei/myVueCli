<template>
  <div class="pull-down-content"></div>
</template>
<script>
export default {
  name: '',
  components: {
  },
  data () {
    return {
      dragThreshold: 0.5,
      moveCount: 300,
      // state: {},
      // 0:未开始加载， 1:开始加载， 2:加载成功， 3:加载失败
      state: 0,
      container: null,
      dragStart: 0
    }
  },
  mounted () {
    var touchDom = document.querySelector('.pull-down-content')
    this.container = touchDom
    this.bindEvent(touchDom)
  },
  methods: {
    touchStart (event) {
      var self = this
      // 当前的event对象 = event中的touches[0]对象
      event = event.touches[0]
      // 初始位置的Y坐标等于点击位置位于窗口的垂直坐标
      self.dragStart = event.clientY
      // 清除容器的动画
      self.container.style.webkitTransition = 'none'
    },
    touchMove (event) {
      var self = this
      // 如果没有获取到初始坐标
      if (self.dragStart === null) {
        return
      }
      // 当前的target对象 = event中的touches[0]对象
      var target = event.touches[0]
      // 滑动的百分比值
      self.percentage = (self.dragStart - target.clientY) / window.screen.height

      // 当容器scrolltop是0且往下滚动时才触发
      if (this.container.scrollTop == 0) {
        if (self.percentage < 0) {
          event.preventDefault()
          // translateY位移比例
          var translateY = -self.percentage * self.moveCount
          // 创建刷新标识
          self.joinRefreshFlag = true
          // 当下拉距离大于阈值时触发
          if (Math.abs(self.percentage) > self.dragThreshold) {
            this.state = 1
          } else {
            this.state = 0
          }
          // 下拉容器translateY位移
          self.container.style.webkitTransform = 'translate3d(0,' + translateY + 'px,0)'
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
      // 如果没有下拉动作
      if (self.percentage === 0) {
        return
      }
      // 如果下拉距离大于阈值时 且 刷新标识为true触发
      if (Math.abs(self.percentage) > self.dragThreshold && self.joinRefreshFlag) {
        // emit父元素方法
        this.$emit('pullRefresh')
        setTimeout(() => {
          this.finishLoad()
        }, 2000)
        // 当前刷新状态
        this.state = 1
        // 容器当前样式：330毫秒位移至1.5rem位置处
        self.container.style.webkitTransition = '330ms'
        self.container.style.webkitTransform = 'translate3d(0,1.5rem,0)'
      } else {
        // 如果下拉距离小等于阈值 且 刷新标识为true触发
        if (self.joinRefreshFlag) {
          // 容器当前样式：330毫秒返回原位
          self.container.style.webkitTransition = '330ms'
          self.container.style.webkitTransform = 'translate3d(0,0,0)'
        }
      }

      // 重置joinRefreshFlag
      self.joinRefreshFlag = null

      // 重置percentage
      self.dragStart = null

      // 重置percentage
      self.percentage = 0
    },
    // 刷新成功
    finishLoad () {
      this.state = 2
      this.container.style.webkitTransition = '330ms'
      this.container.style.webkitTransform = 'translate3d(0,1rem,0)'
      // 2秒收执行自身，返回容器初始位置
      setTimeout(function () {
        this.container.style.webkitTransform = 'translate3d(0,0,0)'
        this.state = 0
      }.bind(this), 2000)
    },

    bindEvent (touchDom) {
      touchDom.addEventListener('touchstart', this.touchStart)
      touchDom.addEventListener('touchmove', this.touchMove)
      touchDom.addEventListener('touchend', this.touchEnd)
    }
  }
}
</script>
<style lang="less" scoped>
.pull-down-content {
  height: 1500px;
  background: #00a7f2;
  margin: 100px;
}
</style>
