import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type callBackFn = () => void

export function usePageModal(
  createCallback?: callBackFn,
  editCallback?: callBackFn,
) {
  // 默认传递给模态框的数据
  const defaultModalData = ref({})

  const pageModalRef = ref<InstanceType<typeof PageModal>>()

  // 新建用户
  const handleCreateData = () => {
    // 新建用户默认传递数据为空
    defaultModalData.value = {}
    pageModalRef.value.centerDialogVisible = true
    // 接受到的页面传递的回调函数
    createCallback && createCallback()
  }

  // 编辑用户
  const handleEditData = (item: any) => {
    pageModalRef.value.centerDialogVisible = true
    defaultModalData.value = { ...item }
    editCallback && editCallback()
  }

  return [defaultModalData, pageModalRef, handleCreateData, handleEditData]
}
