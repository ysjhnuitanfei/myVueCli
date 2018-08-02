<template>
  <div id="app">
    <headerview></headerview>
    <router-view></router-view>
  </div>
</template>

<script>
import Headerview from '@/public/HeaderView/Index.vue'
export default {
  name: 'App',
  components: {
    Headerview
  }
}
</script>

<style lang="less">
@import "./app.less";
</style>
