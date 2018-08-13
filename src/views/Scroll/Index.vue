<template>
  <LoadMore ref="LoadMore" @loadMore="onScrollBottom">
    <div class="scroll-dom" id="scrollDom">111</div>
    <div style="height:5px;background:#00a7f2"></div>
  </LoadMore>
</template>

<script>
import LoadMore from '@/public/LoadMore/Index.vue'

export default {
  components: {
    LoadMore
  },
  data () {
    return {

    }
  },
  mounted () {
  },
  methods: {
    onScrollBottom () {
      console.log('111')
    }
  }
}
</script>
<style lang="less">
.scroll-dom {
  width: 100%;
  height: 3500px;
  background: #f00;
}
</style>
