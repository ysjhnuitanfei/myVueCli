<template>
  <div class="header-view" v-show="showHeader">
    <div class="back" @click="goBack" v-show="preBtn">
      <svg t="1533263250578" class="icon" style="width:.64rem; height:.64rem" viewBox="0 0 1024 1024">
        <path d="M339.194 511.989L758.842 92.363c13.636-13.636 13.636-35.727 0-49.363-13.637-13.637-35.728-13.637-49.364 0L265.16 487.318c-13.637 13.637-13.637 35.727 0 49.363L709.456 981c13.658 13.637 35.749 13.637 49.386 0 13.636-13.637 13.636-35.727 0-49.363L339.194 511.989z" p-id="1047" fill="#666666"></path>
      </svg>
    </div>
    <div class="header-title" v-show="title">{{title}}</div>
    <div class="header-menu" @click="showMenu" v-show="menu">
      <svg t="1533217449082" class="icon" style="width:.64rem; height:.64rem" viewBox="0 0 1024 1024">
        <path d="M128 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#666666" p-id="1470"></path>
        <path d="M896 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#666666" p-id="1471"></path>
        <path d="M512 512m-160 0a160 160 0 1 0 320 0 160 160 0 1 0-320 0Z" fill="#666666" p-id="1472"></path>
      </svg>
    </div>
    <div class="menu-list" v-show="menuDom">
      <div v-show="goIndex">首页</div>
      <div v-show="refesh">刷新</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'headerView',
  props: ['showHeader', 'title', 'preBtn', 'menu', 'goIndex', 'refesh'],
  components: {
  },
  data () {
    return {
      menuDom: false
    }
  },
  methods: {
    goBack () {
      this.$router.back(-1)
    },
    showMenu () {
      this.menuDom = !this.menuDom
    }
  },
  mounted () {
    console.log(this.$store.state.headerView.isLogin)
  }
}
</script>
<style lang="less" scoped>
.header-view {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 144px;
  box-shadow: 0 1px 1px #999;
  background: #fff;
  z-index: 9999;
  .back,
  .header-menu {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    width: 144px;
    height: 144px;
  }
  .back {
    left: 0;
  }
  .header-menu {
    right: 0;
  }
  .header-title {
    flex: 1;
    color: #666;
    text-align: center;
    font-size: 52px;
    font-weight: bold;
  }

  .menu-list {
    position: fixed;
    top: 124px;
    right: 10px;
    width: 200px;
    padding: 20px 0;
    box-shadow: 0 1px 5px #ccc;
    background: #fff;
    div {
      line-height: 80px;
      color: #333;
      text-align: center;
    }
  }
}
</style>
