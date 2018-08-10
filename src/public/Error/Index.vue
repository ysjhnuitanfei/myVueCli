<template>
  <div class="error" v-if="error.show">
    <img class="error-img" src="~assets/error/page-error.jpg">
    <div class="error-msg">{{error.msg}}</div>
    <div class="btn" @click="reload">重试</div>
    <div class="btn" @click="goBack">上一页</div>
    <div class="btn" @click="goIndex">返回首页</div>
  </div>
</template>
<script>
export default {
  name: '',
  props: ['error'],
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    reload () {
      window.location.reload()
    },
    goBack () {
      window.history.length > 1 ? this.$router.back() : this.$router.push('/')
    },
    goIndex () {
      this.$router.push('/')
    }
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 1000;
  .error-img {
    width: 368px;
    height: 384px;
  }
  .error-msg {
    margin-top: 0.25rem;
    font-size: 0.39rem;
    color: #999999;
    text-align: center;
  }
  .btn {
    margin-top: 20px;
    padding: 10px;
    width: 300px;
    text-align: center;
    color: #fff;
    font-size: 50px;
    background: #00a7f2;
  }
}
</style>
