<template>
  <LoadMore ref="LoadMore" @loadMore="onScrollBottom">
    <div style="padding:20px;background:#00a7f2">热门推荐</div>
    <div class="card-item" v-for="(list, index) in hot" :key="index">
      <img :src="list.h5_thumb">
      <div class="mess">
        <div class="title" v-if="list.brand">{{list.brand}}</div>
        <div class="monry">{{list.title}}</div>
        <div class="monry">指导价：{{list.fee}}</div>
        <div class="monry">首付：{{list.down_pay}}</div>
        <div class="monry">佣金：{{list.month_pay}}</div>
      </div>
    </div>
  </LoadMore>
</template>
<script>
import Utils from '@/utils'
import API from '@/api'

import LoadMore from '@/public/LoadMore/Index.vue'
export default {
  name: '',
  components: {
    LoadMore
  },
  data () {
    return {
      hot: [],
      list: [],
      pageIndex: 0
    }
  },
  methods: {
    onScrollBottom () {
      this.getList()
    },
    async getList () {
      this.pageIndex++
      var result = await API.home.list({
        loading: false, // 请求接口中是否开启loading
        acceptError: true // 是否允许自行处理错误信息
      })

      if (result.code === 0) {
        this.hot = this.hot.concat(result.data.hot)
        this.list = this.list.concat(result.data.list)

        // 实际开发中替换为是否还有下一页字段，如果没有下一页，将不再执行加载方法
        if (!result.message === 'ok') {
          this.$refs.LoadMore.finish = true
        }
        // 第一次数据渲染完毕，如果内容没有达到满屏且还有下一页，继续执行加载方法
        // if (this.pageIndex === 1 && result.message === 'ok') {
        //   this.$refs.LoadMore.fullPage = true
        // }
      } else {
        Utils.toast('系统错误')
      }
      // 模拟加载完成，实际开发删除该代码
      if (this.pageIndex >= 5) {
        this.$refs.LoadMore.finish = true
        return
      }
      // 必须，如果当前组件存在，改变组件内loading状态
      if (this.$refs.LoadMore) {
        this.$refs.LoadMore.loading = false
      }
    }
  },
  mounted () {
    this.getList()
  }
}
</script>
<style lang="less" scoped>
div {
  text-align: center;
}
.card-item {
  height: 200px;
  overflow: hidden;
}
</style>
