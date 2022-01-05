import { createStore, useStore as vuexUseStore, Store } from 'vuex'
import { IRootState, IStoreType } from './types'
import login from './login/login'
import system from './main/system/system'
import { getList } from '@/service/main/system/system'

const store = createStore<IRootState>({
  state() {
    return {
      name: '',
      age: 0,
      entireDepartment: [],
      entireRole: [],
    }
  },
  mutations: {
    // 所有部门
    updateEntireDepartment(state, departmentList) {
      state.entireDepartment = departmentList
    },
    // 所有角色
    updateEntireRole(state, roleList) {
      state.entireRole = roleList
    },
  },
  actions: {
    // 获取所有部门
    async getDepartmentAction({ commit }) {
      const departmentRes = await getList({
        url: '/department/list',
        queryInfo: { size: 1000, offset: 0 },
      })
      const { list: departmentList } = departmentRes.data
      commit('updateEntireDepartment', departmentList)
    },

    // 获取所有的角色
    async getRoleAction({ commit }) {
      const roleRes = await getList({
        url: '/role/list',
        queryInfo: { size: 1000, offset: 0 },
      })
      const { list: roleList } = roleRes.data
      commit('updateEntireRole', roleList)
    },
  },
  modules: {
    login,
    system,
  },
})

// 设置store的数据，从localStorage中取值
export const setupStore = () => {
  store.dispatch('login/solveState')
  store.dispatch('getDepartmentAction')
  store.dispatch('getRoleAction')
}

// 导出useStore函数，对vuex的useStore进行封装
export const useStore = (): Store<IStoreType> => {
  return vuexUseStore()
}

export default store
