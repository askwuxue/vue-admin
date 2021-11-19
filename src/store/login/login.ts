import { Module } from 'vuex'
import { IRootState } from '../types'
import { ILoginState } from './types'
import { accountLoginRequest } from '../../service/login/login'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
    }
  },
  getters: {},
  mutations: {},
  actions: {
    // 账号密码登录
    async accountLoginAction(context, payload) {
      // console.log('payload: ', payload)
      const res = await accountLoginRequest(payload)
      console.log('res: ', res)
    },
    phoneLoginAction(context, payload) {
      console.log('payload: ', payload)
      console.log('phoneLoginAction')
    },
  },
}

export default loginModule
