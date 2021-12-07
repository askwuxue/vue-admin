// 登录方式枚举
export enum LoginAPI {
  accountLogin = '/login',
  getUserInfo = '/users/',
  getRoleMenu = '/role/',
}

// User API 枚举
export enum UserAPI {}

// account类型
export interface IAccount {
  name: string
  password: string
}

// login返回data类型
export interface ILoginResult {
  id: number
  name: string
  token: string
}
