<template>
  <div class="page">
    <div>别名路径图片测试</div>
    <img style="margin:auto;display:block" src="~assets/images/logo.png">
    <div class="box" @click="demo">toast提示框</div>
    <div class="box" @click="tips">测试当前登录态</div>
  </div>
</template>
<script>
import Utils from '@/utils'
export default {
  name: '',
  components: {
  },
  data () {
    return {
      value: false
    }
  },
  methods: {
    demo () {
      Utils.toast('toast提示框')
    },
    tips () {
      Utils.toast(String(this.$store.state.headerView.isLogin))
    }
  },
  async mounted () {
  }
}
</script>
<style lang="less" scoped>
.page div {
  text-align: center;
  margin-top: 20px;
}
.box {
  width: 400px;
  height: 80px;
  background: #00a7f2;
  margin: auto;
  font-size: 50px;
}
</style>
