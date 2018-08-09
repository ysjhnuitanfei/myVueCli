<template>
  <div class="page">
    <div class="scroll-dom" id="scrollDom"></div>
  </div>
</template>
<style lang="less">
.scroll-dom {
  height: 4000px;
  background: #f00;
  margin: 200px;
}
</style>
<script>
export default {
  components: {
  },
  data () {
    return {

    }
  },
  mounted () {
    document.getElementById('scrollDom').addEventListener('scroll', this.myFunction)
  },
  methods: {
    myFunction () {
      console.log('111')
    }
  }
}
</script>
