import { BASE_URL } from './request/config'
import Request from './request/request'
// 创建axios封装后的实例，并传入基本参数
const request = new Request({
  baseURL: BASE_URL,
  timeout: 2000,
  interceptors: {
    requestInterceptor(config) {
      console.log('config: ', '请求拦截成功')
      return config
    },
    requestInterceptorCatch(err) {
      console.log('err: ', err)
      console.log('请求拦截失败')
    },
    responseInterceptor(data) {
      console.log('data: ', data)
      console.log('响应拦截成功')
      return data
    },
    responseInterceptorCatch(err) {
      console.log('err: ', err)
      console.log('err: ', '响应拦截失败')
    },
  },
})

export async function a(): Promise<any> {
  return request.request({
    url: '/home/multidata',
    method: 'GET',
  })
}

// res.then((data) => {
//   console.log(data)
// })
