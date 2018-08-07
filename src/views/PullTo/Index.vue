<template>
  <div class="page">
    <div class="wrapper">
      <ul class="content">
        <li v-for="(item, index) in 30" :key="index">...</li>
      </ul>
      <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: '',
  components: {
    BScroll
  },
  data () {
    return {
    }
  },
  methods: {
    demo () {
    }
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
</style>
