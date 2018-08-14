<template>
  <div class='headerInfo'>
    <div class="header-white flex flex-center">demo合集</div>
    <div class="header">
      头部一些信息
    </div>
  </div>
</template>
<script>
export default {
  name: 'headerinfo',
  components: {},
  data () {
    return {
    }
  },
  created () {
    this.$nextTick(() => {
      document.querySelector('.page').addEventListener('scroll', this.scrollPage)
    })
  },
  methods: {
    scrollPage () {
      var distanceSroll = 500
      var domScrollTop = document.querySelector('.page').scrollTop
      if (domScrollTop > distanceSroll) {
        document.querySelector('.header-white').style.opacity = 1
      } else {
        document.querySelector('.header-white').style.opacity = (domScrollTop - 10) / (distanceSroll - 10)
      }
    }
  },
  mounted () {

  }
}
</script>
<style lang="less">
.headerInfo {
  position: relative;
  height: 700px;
  background: #00a7f2;
  .header-white {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 144px;
    background: #fff;
    box-shadow: 0 1px 5px #ccc;
    opacity: 0;
    z-index: 9999;
  }
  .header {
    position: absolute;
    height: 100%;
    width: 100%;
  }
}
</style>
