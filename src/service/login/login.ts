import request from '../index'
import { LoginAPI, IAccount } from './type'
import { ILoginResult } from './type'
import { IDataType } from '../types'

// 账号密码请求
export const accountLoginRequest = (account: IAccount) => {
  const { name, password } = account
  return request.post<IDataType<ILoginResult>>({
    url: LoginAPI.accountLogin,
    data: {
      name,
      password,
    },
  })
}

// 用户信息请求
export const getUserInfo = (id: number) => {
  return request.get<IDataType>({
    url: LoginAPI.getUserInfo + id,
  })
}

// 获取用户角色菜单信息
export const getUserRoleMenus = (id: number) => {
  return request.get<IDataType>({
    url: `${LoginAPI.getRoleMenu}${id}/menu`,
  })
}
