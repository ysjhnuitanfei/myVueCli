<template>
  <div id="app" class="content">
    <headerview :showHeader="showHeader" :title="title" :preBtn="preBtn" :menu="menu" :goIndex="goIndex" :refesh="refesh"></headerview>
    <router-view></router-view>
  </div>
</template>

<script>
import Headerview from '@/public/HeaderView/Index.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    Headerview
  },
  computed: {
    ...mapState({
      showHeader: state => state.headerView.showHeader,
      title: state => state.headerView.title,
      preBtn: state => state.headerView.preBtn,
      menu: state => state.headerView.menu,
      goIndex: state => state.headerView.goIndex,
      refesh: state => state.headerView.refesh
    })
  },
  mounted () {
  }
}
</script>

<style lang="less">
// 引入全局css
@import "./app.less";
</style>
