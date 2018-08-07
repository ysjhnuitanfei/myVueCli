<template>
  <div class="page">
    <div @click="demo">toast</div>
    <div @click="tips">tips</div>
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
      Utils.toast('aaa', 2000)
    },
    tips () {
      Utils.tips('tips提示框', 10000)
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
