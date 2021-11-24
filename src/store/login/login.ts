import { Module } from 'vuex'
import { IRootState } from '../types'
import { ILoginState } from './types'
import { mapMenusToRoutes } from '@/utils/mapMenus'
import router from '@/router'
import {
  accountLoginRequest,
  getUserInfo,
  getUserRoleMenus,
} from '@/service/login/login'
import cache from '@/utils/cache'

const login: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      roleMenuInfo: {},
    }
  },
  getters: {
    getToken(state) {
      return state.token
    },
  },
  mutations: {
    // 更新token
    updateToken(state, token) {
      state.token = token
    },

    // 更新userInfo
    updateUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },

    // 更新用户角色菜单
    updateRoleMenuInfo(state, roleMenuInfo) {
      state.roleMenuInfo = roleMenuInfo
      mapMenusToRoutes(roleMenuInfo)
    },
  },
  actions: {
    // 1. 账号密码登录
    async accountLoginAction({ commit }, payload) {
      const loginRes = await accountLoginRequest(payload)
      console.log('loginRes: ', loginRes)
      const {
        data: { id, token },
      } = loginRes
      console.log('loginRes: ', loginRes)

      // token更新
      commit('updateToken', token)

      // token 缓存
      cache.setCache('token', token)

      // 2. 获取用户信息
      const userRes = await getUserInfo(id)
      const { data: userInfo } = userRes

      // 更新用户信息
      commit('updateUserInfo', userInfo)

      // 缓存用户信息
      cache.setCache('userInfo', userInfo)
      console.log('userRes: ', userRes)

      // 3. 获取用户角色菜单信息
      const roleMenuRes = await getUserRoleMenus(id)
      const { data: roleMenuInfo } = roleMenuRes

      // 更新用户角色菜单信息
      commit('updateRoleMenuInfo', roleMenuInfo)

      // 缓存用户角色菜单信息
      cache.setCache('roleMenuInfo', roleMenuInfo)

      console.log('roleMenuInfo: ', roleMenuRes)

      // 4. 登录成功跳转到首页
      router.push({
        path: '/',
      })
    },

    // 手机号登录
    phoneLoginAction(context, payload) {
      console.log('payload: ', payload)
      console.log('phoneLoginAction')
    },

    // 保存localStorage内容到vuex中，vuex刷新数据state丢失
    solveState({ commit }) {
      // 从localStorage数据保存到vuex
      const token = cache.getCache('token')
      if (token) {
        commit('updateToken', token)
      }
      const userInfo = cache.getCache('userInfo')
      if (userInfo) {
        commit('updateUserInfo', userInfo)
      }
      const roleMenuInfo = cache.getCache('roleMenuInfo')
      if (roleMenuInfo) {
        commit('updateRoleMenuInfo', roleMenuInfo)
      }
    },
  },
}

export default login
