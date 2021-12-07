import { Module } from 'vuex'
import { ISystemState } from './types'
import { IRootState } from '../../types'
import { getUserList } from '@/service/main/system/system'

const system: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userListCount: 0,
    }
  },
  mutations: {
    // 更新用户列表
    updateUserList(state, userList) {
      state.userList = userList
    },
    // 更新用户列表总条数
    updateUserListCount(state, userListCount) {
      state.userListCount = userListCount
    },
  },
  actions: {
    // 获取list
    async getPageListAction({ commit }, payload) {
      const response = await getUserList(payload)
      const { list: userList, totalCount: userListCount } = response.data
      // 更新用户列表
      commit('updateUserList', userList)
      // 更新用户列表总条数
      commit('updateUserListCount', userListCount)
      // console.log('payload: ', payload)
    },
  },
}

export default system
