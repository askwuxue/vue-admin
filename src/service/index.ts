import { BASE_URL } from './request/config'
import Request from './request/request'
// 创建axios封装后的实例，并传入基本参数
const request = new Request({
  baseURL: BASE_URL,
  timeout: 2000,
  interceptors: {
    requestInterceptor(config) {
      return config
    },
    requestInterceptorCatch(err) {
      return err
    },
    responseInterceptor(data) {
      return data
    },
    responseInterceptorCatch(err) {
      return err
    },
  },
})

// export async function a(): Promise<any> {
//   return request.get({
//     url: '/home/multidata',
//     method: 'GET',
//     showLoading: true,
//   })
// }
