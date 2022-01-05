import { ref } from 'vue'
import PageModal from '@/components/page-modal'

export function usePageModal() {
  // 默认传递给模态框的数据
  const defaultModalData = ref({})

  const pageModalRef = ref<InstanceType<typeof PageModal>>()

  // 新建用户
  const handleCreateUser = () => {
    pageModalRef.value.centerDialogVisible = true
  }

  // 编辑用户
  const handleEditUser = (item: any) => {
    pageModalRef.value.centerDialogVisible = true
    defaultModalData.value = { ...item }
  }

  return [defaultModalData, pageModalRef, handleCreateUser, handleEditUser]
}
