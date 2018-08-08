<template>
  <div class="page clearfix">
    <router-link class="a-link" :to="{path: '/vux'}">Vux</router-link>
    <router-link class="a-link" :to="{path: '/request'}">接口测试</router-link>
  </div>
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
