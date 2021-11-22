// 导入login的模块的type
import { ILoginState } from './login/types'
export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  login: ILoginState
}

// 导出交叉类型，及Store中所有模块以及Root的使用类型
export type IStoreType = IRootState & IRootWithModule
