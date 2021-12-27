import PageContent from '@/components/page-content'
import { ref } from 'vue'

export const usePageSearch = () => {
  // TODO ts中使用ref的方法, 将该Ref返回，作为ref注册的值
  const pageContentRef = ref<InstanceType<typeof PageContent>>()

  // reset
  const handleResetClick = () => {
    // 重置页面后重新请求页面数据
    pageContentRef.value?.getPageData()
  }

  // search
  const handleSearchClick = (queryInfo: any) => {
    // 请求页面数据
    pageContentRef.value?.getPageData(queryInfo)
  }

  return { pageContentRef, handleResetClick, handleSearchClick }
}
