import type { AxiosRequestConfig, AxiosResponse } from 'axios'
// 自定义拦截器hooks 函数类型
export interface requestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (data: T) => T
  responseInterceptorCatch?: (error: any) => any
}

// 自定义axios config类型
export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  // 默认的config.headers 不支持Authorization, 所以进行类型自定义
  interceptors?: requestInterceptors<T>
  showLoading?: boolean
}
