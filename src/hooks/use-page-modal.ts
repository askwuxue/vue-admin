import { ref } from 'vue'
import PageModal from '@/components/page-modal'

export function usePageModal() {
  // 默认传递给模态框的数据
  let defaultModalData = ref({})

  const pageModalRef = ref<InstanceType<typeof PageModal>>()

  // 新建用户
  const handleCreateData = () => {
    // 新建用户默认传递数据为空
    defaultModalData = ref({})
    pageModalRef.value.centerDialogVisible = true
  }

  // 编辑用户
  const handleEditData = (item: any) => {
    pageModalRef.value.centerDialogVisible = true
    defaultModalData.value = { ...item }
  }

  return [defaultModalData, pageModalRef, handleCreateData, handleEditData]
}
