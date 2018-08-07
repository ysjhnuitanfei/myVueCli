<template>
  <div class="page">
    <scroller :on-refresh="refresh" :on-infinite="infinite">
      <div class="aaa" v-for="(item, index) in items" :key="index">
        {{ item }}
      </div>
    </scroller>
  </div>
</template>
<script>
export default {
  name: '',
  components: {
  },
  data () {
    return {
      items: []
    }
  },
  methods: {
    // 下拉刷新
    refresh (done) {
      setTimeout(() => {
        this.items = []
        this.loadData()
        done()
      }, 1500)
    },
    infinite (done) {
      if (this.bottom > 40) {
        done(true)
        return
      }
      setTimeout(() => {
        var start = this.bottom + 1
        for (var i = start; i < start + 20; i++) {
          this.items.push(i + ' - keep walking, be 2 with you.')
        }
        this.bottom = this.bottom + 20
        done()
      }, 1500)
    },
    loadData () {
      for (var i = 1; i <= 30; i++) {
        this.items.push(i + ' - keep walking, be 2 with you.')
      }
      this.top = 1
      this.bottom = 20
    }
  },
  mounted () {
    this.loadData()
  }
}
</script>
<style lang="less" scoped>
.shua {
  position: relative;
}
.aaa {
  line-height: 80px;
  text-align: center;
}
</style>
