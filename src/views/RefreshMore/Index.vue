<template>
  <Refresh ref="PullRefresh" @pullRefresh="pullRefresh" :isSuccess="isSuccess">
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
  </Refresh>
</template>
<script>
import Utils from '@/utils'
import API from '@/api'

import Refresh from '@/public/PullRefresh/Index.vue'
import LoadMore from '@/public/LoadMore/Index.vue'
export default {
  name: '',
  components: {
    Refresh,
    LoadMore
  },
  data () {
    return {
      hot: [],
      list: [],
      pageIndex: 0,
      isSuccess: false
    }
  },
  methods: {
    // 下拉刷新
    async pullRefresh () {
      this.pageIndex = 0
      // 如果配合下拉刷新组件一起使用，下拉刷新时如果finish为加载完毕状态需将状态finish关闭
      if (this.$refs.LoadMore.finish) {
        this.$refs.LoadMore.finish = false
      }
      await this.getList()
      // 如果刷新成功
      this.$refs.PullRefresh.finishLoad()
    },
    // 加载更多
    onScrollBottom () {
      this.getList()
    },
    async getList () {
      this.pageIndex++
      var result = await API.home.list({
        loading: false, // 请求接口中是否开启loading
        acceptError: true, // 是否允许自行处理错误信息
        pageIndex: this.pageIndex
      })
      if (this.pageIndex === 1) {
        this.hot = []
      }

      if (result.code === 0) {
        // 如果刷新成功
        this.isSuccess = true
        this.hot = this.hot.concat(result.data.hot)
        this.list = this.list.concat(result.data.list)

        // 实际开发中替换为是否还有下一页字段，如果没有下一页，将不再执行加载方法
        if (!result.message === 'ok') {
          this.$refs.LoadMore.finish = true
        }
      } else {
        // 如果刷新失败
        this.isSuccess = false
        Utils.toast('系统错误')
      }
      // 模拟加载完成，实际开发删除该代码
      if (this.pageIndex >= 3) {
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
    // this.getList()
  }
}
</script>
<style lang="less" scoped>
div {
  text-align: center;
}
.card-item {
  overflow: hidden;
}
</style>
