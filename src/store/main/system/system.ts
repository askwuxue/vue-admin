import { Module } from 'vuex'
import { ISystemState } from './types'
import { IRootState } from '../../types'
import { getList } from '@/service/main/system/system'
import { capitalize } from '@/utils/tool'

const pageNameUrlMap = new Map([
  ['user', '/users/list'],
  ['role', '/role/list'],
])

const system: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userListCount: 0,
      roleList: [],
      roleListCount: 0,
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
    // 更新用户列表
    updateRoleList(state, roleList) {
      state.roleList = roleList
    },
    // 更新用户列表总条数
    updateRoleListCount(state, roleListCount) {
      state.roleListCount = roleListCount
    },
  },
  // TODO getter无法取得数据，异步方法吗？
  getters: {
    getPageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
  },
  actions: {
    // 获取list
    async getPageListAction({ commit }, { pageName, queryInfo }) {
      // 根据pageName动态的获取请求地址
      const url = pageNameUrlMap.get(pageName)
      // 发起请求的完整参数
      const info = {
        url,
        queryInfo,
      }
      const response = await getList(info)
      const { list, totalCount } = response.data
      // pageName 首字母大写
      const capitalizePageName = capitalize(pageName)
      commit(`update${capitalizePageName}List`, list)
      commit(`update${capitalizePageName}ListCount`, totalCount)
    },
  },
}

export default system
