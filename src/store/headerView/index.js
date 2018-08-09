const headerview = {
  state: {
    isLogin: false,
    // 全局头部配置
    showHeader: true,
    title: '',
    preBtn: false,
    menu: false,
    goIndex: false,
    refesh: false
  },
  actions: {

  },
  mutations: {
    // 头部状态方法&状态设置
    setHeader (state, headerinfo) {
      if (headerinfo && headerinfo.showHeader) {
        state.showHeader = true
      } else {
        state.showHeader = false
      }
      if (headerinfo && headerinfo.title) {
        state.title = headerinfo.title
      }
      if (headerinfo && headerinfo.preBtn) {
        state.preBtn = headerinfo.preBtn
      } else {
        state.preBtn = false
      }
      if (headerinfo && headerinfo.menu) {
        state.menu = headerinfo.menu
      } else {
        state.menu = false
      }
      if (headerinfo && headerinfo.goIndex) {
        state.goIndex = headerinfo.goIndex
      } else {
        state.goIndex = false
      }
      if (headerinfo && headerinfo.refesh) {
        state.refesh = headerinfo.refesh
      } else {
        state.refesh = false
      }
    },
    clear (state) {
      state.title = ''
    },
    login (state) {
      state.isLogin = true
    }
  }
}
export default headerview
