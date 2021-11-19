// 登录方式枚举
export enum LoginAPI {
  accountLogin = '/login',
}

// account类型
export interface IAccount {
  name: string
  password: string
}
