import request from '../index'
import { LoginAPI, IAccount } from './type'

export const accountLoginRequest = (account: IAccount) => {
  const { name, password } = account
  return request.post({
    url: LoginAPI.accountLogin,
    data: {
      name,
      password,
    },
  })
}
