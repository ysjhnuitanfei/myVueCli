import fetch from '@/utils/fetch'

export default {
  list (params) {
    return fetch({
      url: 'http://dev.cyb.kuaiqiangche.cc/event/yzdg/car_list',
      method: 'get',
      params
    })
  },
  order (params) {
    return fetch({
      url: 'http://dev.cyb.kuaiqiangche.cc/event/yzdg/order',
      method: 'get',
      params
    })
  }
}
