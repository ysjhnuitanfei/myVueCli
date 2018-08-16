<template>
  <Refresh ref="PullRefresh" @pullRefresh="pullRefresh" :isSuccess="isSuccess">
    <div style="padding:100px; background:#ccc">tips:可将网络速度设置为慢速，查看刷新中状态</div>
    <div style="padding:20px;background:#00a7f2">热门推荐</div>
    <div class="card-item" v-for="(list, index) in list" :key="index">
      <img :src="list.h5_thumb">
      <div class="mess">
        <div class="title" v-if="list.brand">{{list.brand}}</div>
        <div class="monry">{{list.title}}</div>
        <div class="monry">指导价：{{list.fee}}</div>
        <div class="monry">首付：{{list.down_pay}}</div>
        <div class="monry">佣金：{{list.month_pay}}</div>
      </div>
    </div>
  </Refresh>
</template>
<script>
import Utils from '@/utils'
import API from '@/api'

import Refresh from '@/public/PullRefresh/Index.vue'
export default {
  name: '',
  components: {
    Refresh
  },
  data () {
    return {
      list: [],
      isSuccess: false // 下拉刷新是否成功
    }
  },
  methods: {
    // 下拉刷新
    async pullRefresh () {
      await this.getList()
      // 如果刷新成功
      this.$refs.PullRefresh.finishLoad()
    },
    // 接口数据
    async getList () {
      var result = await API.home.list({
        loading: false, // 请求接口中是否开启loading
        acceptError: true // 是否允许自行处理错误信息
      })
      if (result.code === 0) {
        // 如果刷新成功
        this.isSuccess = true
        this.list = this.list.concat(result.data.list)
      } else {
        // 如果刷新失败
        this.isSuccess = false
        Utils.toast('系统错误')
      }
    }
  },
  mounted () {
    this.getList()
  }
}
</script>
<style lang="less" scoped>
</style>
