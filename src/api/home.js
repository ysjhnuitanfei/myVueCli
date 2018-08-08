import fetch from '@/utils/fetch'

export default {
  list (params) {
    return fetch({
      url: '/mvc/module/moduleList',
      method: 'get',
      params
    })
  }
}
