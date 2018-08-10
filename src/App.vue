<template>
  <div id="app" class="content">
    <headerview :showHeader="showHeader" :title="title" :preBtn="preBtn" :menu="menu" :goIndex="goIndex" :refesh="refesh"></headerview>
    <div class="page-content">
      <Loading :isLoading="isLoading"></Loading>
      <Error :error="error"></Error>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Headerview from '@/public/HeaderView/Index.vue'
import Loading from '@/public/Loading/Index.vue'
import Error from '@/public/Error/Index.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    Headerview,
    Loading,
    Error
  },
  computed: {
    ...mapState({
      isLoading: state => state.loading.isLoading,
      showHeader: state => state.headerView.showHeader,
      title: state => state.headerView.title,
      preBtn: state => state.headerView.preBtn,
      menu: state => state.headerView.menu,
      goIndex: state => state.headerView.goIndex,
      refesh: state => state.headerView.refesh,
      error: state => state.error
    })
  },
  mounted () {
    console.log(this.error)
  }
}
</script>

<style lang="less">
// 引入全局css
@import "./app.less";
</style>
