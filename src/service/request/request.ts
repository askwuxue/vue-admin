import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { requestInterceptors, RequestConfig } from './type'
import { ElLoading } from 'element-plus'
import { ILoadingInstance } from 'element-plus/es/components/loading/index'

// loading状态,用于还原实例中loading的默认值
const DEFAULT_LOADING = false

// 对axios进行二次封装
export default class Request {
  instance: AxiosInstance
  // 拦截器
  interceptors?: requestInterceptors
  // loading 组件实例
  loadingInstance?: ILoadingInstance
  // loading状态
  showLoading?: boolean

  constructor(config: RequestConfig) {
    // axios实例
    this.instance = axios.create(config)
    // 自定义组件实例的拦截器
    this.interceptors = config.interceptors
    // 默认不显示。如果显示loading效果，需要通过自定义属性配置
    this.showLoading = config.showLoading ?? DEFAULT_LOADING

    // 自定义请求拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch,
    )

    // 自定义响应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch,
    )

    // 定义所有实例都需要用到的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('所有实例使用的拦截器，请求成功')
        if (this.showLoading) {
          this.loadingInstance = ElLoading.service({
            lock: false,
            background: 'rgba(0, 0, 0, 0.5)',
          })
        }
        return config
      },
      (err) => {
        console.log('所有实例使用的拦截器，请求失败')
        this.loadingInstance?.close()
        return err
      },
    )

    // 定义所有实例都需要用到的拦截器
    this.instance.interceptors.response.use(
      (res) => {
        const { data, status, statusText } = res
        // console.log('所有实例使用的拦截器，响应成功')
        this.loadingInstance?.close()
        // 对响应数据进行响应拦截处理
        if (status === 200 && statusText === 'OK') {
          return data
        }
        // return res
      },
      (err) => {
        console.log('所有实例使用的拦截器，响应失败')
        this.loadingInstance?.close()
        return err
      },
    )
  }

  request<T>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 针对每一个请求方法可以设置单独的拦截器
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      // 自定义loading加载状态
      this.showLoading = config?.showLoading

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // 加载结束，需要将showLoading状态还原,否则会影响到其他请求
          config.showLoading = DEFAULT_LOADING
          resolve(res)
        })
        .catch((err) => {
          // 加载结束，需要将showLoading状态还原,否则会影响到其他请求
          config.showLoading = DEFAULT_LOADING
          reject(err)
        })
    })
  }

  get<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: RequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }

  delete<T>(config: RequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }

  patch<T>(config: RequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }
}
