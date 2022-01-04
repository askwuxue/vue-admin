import { useStore } from '@/store'

// 获取权限
export const getPermissions = (pageName: string, handler: string) => {
  const store = useStore()
  const permissions = store.state.login.permissions
  return permissions.includes(`system:${pageName}:${handler}`)
}
