<template>
  <div class="page clearfix">
    <router-link class="a-link" :to="{path: '/vux'}">Vux</router-link>
    <router-link class="a-link" :to="{path: '/request'}">接口测试</router-link>
    <router-link class="a-link" :to="{path: '/scroll'}">scroll</router-link>
    <router-link class="a-link" :to="{path: '/error'}">地址错误404页面</router-link>
  </div>
</template>
<script>
export default {
  name: '',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    // 设置当前登录态
    setLogin () {
      this.$store.commit('login')
    }
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
.page {
  .a-link {
    display: block;
    margin: 20px auto;
    text-align: center;
  }
  .setLogin {
    width: 420px;
    height: 100px;
    background: #f00;
    margin: auto;
  }
}
</style>
