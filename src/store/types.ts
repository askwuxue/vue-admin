// 导入login的模块的type
import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'
export interface IRootState {
  name: string
  age: number
  entireDepartment: any[]
  entireRole: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

// 导出交叉类型，及Store中所有模块以及Root的使用类型
export type IStoreType = IRootState & IRootWithModule
