<template>
  <div class="page">
    <div class="go-index flex flex-center" @click="goIndex">{{count}}</div>
    <video id="video" ref="video" height="100%" loop autoplay muted>
      <source src="~assets/video/welcomepage.mp4" type="video/mp4">
    </video>
  </div>
</template>
<script>
export default {
  name: '',
  components: {
  },
  data () {
    return {
      count: null
    }
  },
  methods: {
    goIndex () {
      this.count = -1
      this.$router.push('/index')
    },
    countFun () {
      this.count = 5

      var timer = setInterval(() => {
        this.count--
        if (this.count < 0) {
          clearInterval(timer)
          this.$router.push('/index')
        }
      }, 1000)
    }
  },
  mounted () {
    document.getElementById('video').play()
    this.count = 0
    this.countFun()
  }
}
</script>
<style lang="less" scoped>
.go-index {
  position: fixed;
  right: 50px;
  top: 50px;
  width: 80px;
  height: 80px;
  color: #fff;
  font-size: 50px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  z-index: 111;
}
video {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
