<template>
  <div class="spinners" v-if="isLoading">
    <div class="preloader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  props: ['isLoading'],
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
.spinners {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.95);
  transform: translate(-50%, -50%);
  z-index: 9999;
  .preloader {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150px;
    height: 150px;
    margin: -75px 0 0 -75px;
    animation: preloader 5s infinite linear;
    span {
      width: 70px;
      height: 70px;
      position: absolute;
      background: red;
      display: block;
      animation: preloader_span 1s infinite linear;
      &:nth-child(1) {
        background: #2ecc71;
      }
      &:nth-child(2) {
        left: 80px;
        background: #9b59b6;
        animation-delay: -0.2s;
      }
      &:nth-child(3) {
        top: 80px;
        background: #3498db;
      }
      &:nth-child(4) {
        top: 80px;
        left: 80px;
        background: #f1c40f;
        animation-delay: -0.6s;
      }
    }
  }
}

@keyframes preloader {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes preloader_span {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
