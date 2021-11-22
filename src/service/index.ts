import { BASE_URL } from './request/config'
import Request from './request/request'
import store from '@/store'
import { ILoginState } from '../store/login/types'
// 创建axios封装后的实例，并传入基本参数
const request = new Request({
  baseURL: BASE_URL,
  timeout: 2000,
  interceptors: {
    requestInterceptor(config) {
      const token = store.getters['login/getToken']
      if (token) {
        // TODO 安装最新的axios版本会导致泛型不匹配出错
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch(err) {
      console.log('requestInterceptorCatch: ', err)
      return err
    },
    responseInterceptor(data) {
      return data
    },
    responseInterceptorCatch(err) {
      console.log('responseInterceptorCatch: ', err)
      return err
    },
  },
})
export default request
