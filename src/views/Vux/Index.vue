<template>
  <div class="page">
    <div @click="demo">toast提示框</div>
    <div @click="tips">网页弹框测试</div>
  </div>
</template>
<script>
import Utils from '@/utils'
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
  mounted () {
  }
}
</script>
<style lang="less" scoped>
.page div {
  text-align: center;
  margin-top: 20px;
}
</style>
