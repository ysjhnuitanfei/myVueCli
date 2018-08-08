<template>
  <div class="page">
      <div v-for="(item, index) in list" :key="index">
        <div>ID: {{item.moduleId}}</div>
        <div>{{item.name}}</div>
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
      list: null,
      pageIndex: 0
    }
  },
  methods: {
    async getList () {
      this.pageIndex++
      var result = await API.home.list({
        type: 2,
        pageIndex: this.pageIndex,
        pageSize: 20
      })
      if (this.pageIndex === 1) {
        this.list = []
      }
      if (result.code === 0) {
        this.list = this.list.concat(result.data.modules)
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
