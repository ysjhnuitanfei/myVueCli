<template>
  <div class="page">
    <div style="padding:20px;background:#00a7f2">热门推荐</div>
    <div class="card-item" v-for="(item, index) in hot" :key="index">
      <img :src="item.h5_thumb">
      <div class="mess">
        <div class="title">{{item.brand}}</div>
        <div class="monry">{{item.title}}</div>
        <div class="monry">指导价：{{item.fee}}</div>
        <div class="monry">首付：{{item.down_pay}}</div>
        <div class="monry">佣金：{{item.month_pay}}</div>
      </div>
    </div>
    <div style="padding:20px;background:#00a7f2">车型列表</div>
    <div class="card-item" v-for="(list, index) in list" :key="index">
      <img :src="list.h5_thumb">
      <div class="mess">
        <div class="title">{{list.brand}}</div>
        <div class="monry">{{list.title}}</div>
        <div class="monry">指导价：{{list.fee}}</div>
        <div class="monry">首付：{{list.down_pay}}</div>
        <div class="monry">佣金：{{list.month_pay}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import Utils from '@/utils'
import API from '@/api'
export default {
  name: '',
  components: {
  },
  data () {
    return {
      hot: null,
      list: null
    }
  },
  methods: {
    async getList () {
      var result = await API.home.list({
      })
      if (result.code === 0) {
        this.hot = result.data.hot
        this.list = result.data.list
      } else {
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
.page div {
  text-align: center;
  margin-top: 20px;
}
</style>
