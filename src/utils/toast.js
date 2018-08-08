import Vue from 'vue'

function toast (content, time) {
  Vue.$vux.toast.show({
    type: 'text',
    text: content,
    position: 'bottom',
    time: 2000
  })
}
export default toast
