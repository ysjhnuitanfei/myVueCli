<template>
  <scroller>
    <div class="page clearfix">
      <router-link class="a-link" :to="{path: '/pullrefresh'}">下拉刷新</router-link>
      <router-link class="a-link" :to="{path: '/pullrefresh'}">加载更多</router-link>
    </div>
  </scroller>
</template>
<script>
export default {
  name: '',
  components: {
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
.page {
  .a-link {
    display: block;
    margin: 20px auto;
    text-align: center;
  }
}
</style>
