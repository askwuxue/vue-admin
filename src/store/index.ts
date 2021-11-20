import { createStore } from 'vuex'
import { IRootState } from './types'
import loginModule from './login/login'

const store = createStore<IRootState>({
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

// 设置store的数据，从localStorage中取值
export const setupStore = () => {
  store.dispatch('loginModule/solveState')
}

export default store
