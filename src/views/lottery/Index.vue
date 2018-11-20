<template>
  <div class='page'>
    <div class="item">
      <div class="list" v-for="i in 8" :key="i">
        <div class="info" :class="[lightIndex==i?'high-light':'']"></div>
      </div>
      <div class="lottery-btn" @click="goLottery">点击</div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {
  },
  data () {
    return {
      lightIndex: 0, // 高亮位置
      speed: 60, // 初始速度
      timer: null,
      lotteryId: 2, // 模拟奖品ID为2
      giftIndex: -1, // 最后中奖的结果
      left: -1,
      runing: false // 是否正在抽奖中
    }
  },
  mounted () {
  },
  methods: {
    goLottery () {
      if (this.runing) return
      this.runing = true
      this.runLottery()
      // 模拟1秒延迟从接口拿到奖品ID
      setTimeout(() => {
        this.giftIndex = this.lotteryId
      }, 1000)
    },
    // 抽奖主要逻辑
    runLottery () {
      // 如果奖励拿到
      if (this.giftIndex != -1) {
        // 且旋转未结束
        if (this.left == -1) {
          // 旋转圈数至少保证2圈
          this.left = this.giftIndex - this.lightIndex + 16
        } else if (this.left == 1) {
          // 旋转结束，重制一切数据
          this.reset()
          setTimeout(() => {
            // 展示抽奖结果
            alert('恭喜你抽中' + this.lotteryId)
            this.runing = false
          }, 300)
          return
        }
        // 当奖励拿到后圈数值递减
        this.left--
        // 速度递增
        this.speed += 20
      }
      this.lightIndex++
      if (this.lightIndex > 8) {
        this.lightIndex = 1
      }
      this.timer = setTimeout(this.runLottery, this.speed)
    },
    // 重置所有数据
    reset () {
      // 重置数据后高亮位置停留在对应奖品ID位置
      this.lightIndex = this.giftIndex
      this.giftIndex = -1
      this.speed = 60
      this.left = -1
      clearTimeout(this.timer)
    }
  }
}
</script>
<style lang="less">
.item {
  position: relative;
  margin: 100px auto;
  width: 900px;
  height: 900px;
  .lottery-btn {
    position: absolute;
    left: 325px;
    top: 325px;
    width: 250px;
    height: 250px;
    background: #f00;
  }
  .list {
    position: absolute;
    padding: 10px;
    width: 300px;
    height: 300px;
    box-sizing: border-box;
    .info {
      width: 100%;
      height: 100%;
      background: #00a7f2;
      &.high-light {
        background: #f00;
      }
    }
    &:nth-child(1) {
      left: 0;
      top: 0;
    }
    &:nth-child(2) {
      left: 300px;
      top: 0;
    }
    &:nth-child(3) {
      left: 600px;
      top: 0;
    }
    &:nth-child(4) {
      left: 600px;
      top: 300px;
    }
    &:nth-child(5) {
      left: 600px;
      top: 600px;
    }
    &:nth-child(6) {
      left: 300px;
      top: 600px;
    }
    &:nth-child(7) {
      left: 0;
      top: 600px;
    }
    &:nth-child(8) {
      left: 0;
      top: 300px;
    }
  }
}
</style>
