<template>
  <div class="page clearfix">
    <headerNav></headerNav>
    <div class="demo-item flex flex-justify-wrap">
      <router-link class="a-link flex flex-center" :to="{path: '/vux'}">全局提示框</router-link>
      <router-link class="a-link flex flex-center" :to="{path: '/refresh'}">下拉刷新</router-link>
      <router-link class="a-link flex flex-center" :to="{path: '/refreshMore'}">刷新&&加载更多</router-link>
      <router-link class="a-link flex flex-center" :to="{path: '/request'}">加载更多1</router-link>
      <router-link class="a-link flex flex-center" :to="{path: '/scroll'}">加载更多2</router-link>
      <router-link class="a-link flex flex-center" :to="{path: '/backState'}">backState</router-link>
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
  .demo-item {
    margin-top: -20px;
  }
  .a-link {
    margin-top: 20px;
    padding: 10px;
    width: 300px;
    height: 200px;
    text-align: center;
    font-size: 50px;
    background: #ccc;
  }
}
</style> 
