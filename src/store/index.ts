import { createStore } from 'vuex'
import { IRootState } from './types'
import loginModule from './login/login'

export default createStore<IRootState>({
  state() {
    return {
      name: '',
      age: 0,
    }
  },
  mutations: {},
  actions: {},
  modules: {
    loginModule,
  },
})
