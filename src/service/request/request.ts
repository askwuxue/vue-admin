import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

// 自定义拦截器hooks 函数类型
interface requestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (data: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

// 自定义axios config类型
interface RequestConfig extends AxiosRequestConfig {
  interceptors?: requestInterceptors
}

// 对axios进行二次封装
export default class Request {
  instance: AxiosInstance
  // 拦截器
  interceptors?: requestInterceptors
  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    // 请求拦截器自定义
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch,
    )
    // 响应拦截器自定义
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch,
    )
  }
  request(config: RequestConfig): Promise<AxiosResponse<any, any>> {
    return this.instance.request(config)
  }
}
