import type { AxiosRequestConfig, AxiosResponse } from 'axios'
// 自定义拦截器hooks 函数类型
export interface requestInterceptors {
  requestInterceptor?: (config: RequestConfig) => RequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (data: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

// 自定义axios config类型
export interface RequestConfig extends AxiosRequestConfig {
  // 默认的config.headers 不支持Authorization, 所以进行类型自定义
  headers?: any
  interceptors?: requestInterceptors
  showLoading?: boolean
}
