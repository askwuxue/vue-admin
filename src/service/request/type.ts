import type { AxiosRequestConfig, AxiosResponse } from 'axios'
// 自定义拦截器hooks 函数类型
export interface requestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (data: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

// 自定义axios config类型
export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: requestInterceptors
  showLoading?: boolean
}
