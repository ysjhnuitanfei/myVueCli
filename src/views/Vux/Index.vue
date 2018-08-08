<template>
  <div class="page">
    <div @click="demo">toast提示框</div>
    <div @click="tips">网页弹框测试</div>
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
      value: false
    }
  },
  methods: {
    demo () {
      Utils.toast('toast提示框')
    },
    tips () {
      Utils.tips('网页弹框测试')
    }
  },
  async mounted () {
    // API.gift.getInfo({ id, acceptError: true }).then(response => {
    //     var result = response.data
    //     if (result.retcode !== 0) {
    //       Utils.toast('查询礼包信息出错')
    //       return
    //     }
    //     this.data = result.data.benefit
    //     this.login = result.data.login
    //     this.data.description = this.data.description.replace(/\n/g, '<br>')
    //     this.showDialog = true
    //     this.showIndex = index
    //   })
    var result = await API.home.list({
    })
    console.log(result)
  }
}
</script>
<style lang="less" scoped>
.page div {
  text-align: center;
  margin-top: 20px;
}
</style>
