import { PageContent } from '@/components/page-content'
import { ref } from 'vue'

export const usePageSearch = () => {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
    console.log('pageContentRef.value: ', pageContentRef.value)
  }
  return { handleResetClick }
}
