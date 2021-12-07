import { createStore, useStore as vuexUseStore, Store } from 'vuex'
import { IRootState, IStoreType } from './types'
import login from './login/login'
import system from './main/system/system'

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
    login,
    system,
  },
})

// 设置store的数据，从localStorage中取值
export const setupStore = () => {
  store.dispatch('login/solveState')
}

// 导出useStore函数，对vuex的useStore进行封装
export const useStore = (): Store<IStoreType> => {
  return vuexUseStore()
}

export default store
