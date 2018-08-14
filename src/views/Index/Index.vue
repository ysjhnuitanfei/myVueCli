<template>
  <div class="page clearfix">
    <headerNav></headerNav>
    <div class="flex flex-center">
      <router-link class="a-link flex flex-center" :to="{path: '/vux'}">toast</router-link>
      <router-link class="a-link flex flex-center" :to="{path: '/touch'}">touch</router-link>
      <router-link class="a-link flex flex-center" :to="{path: '/request'}">接口1</router-link>
      <router-link class="a-link flex flex-center" :to="{path: '/scroll'}">接口2</router-link>
      <router-link class="a-link flex flex-center" :to="{path: '/error'}">404页面</router-link>
    </div>
    <div style="height:2000px;"></div>
  </div>
</template>
<script>
import headerNav from './components/headerNav'

export default {
  name: '',
  components: {
    headerNav
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
    width: 50%;
    margin: 50px auto;
  }
}
</style>
