import { Module } from 'vuex'
import { IRootState } from '../types'
import { ILoginState } from './types'

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
    accountLoginAction(context, payload) {
      console.log('payload: ', payload)
      console.log('执行accountLoginAction')
    },
    phoneLoginAction(context, payload) {
      console.log('payload: ', payload)
      console.log('phoneLoginAction')
    },
  },
}

export default loginModule
