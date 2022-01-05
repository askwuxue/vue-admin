<template>
  <div class="user">
    <!-- 搜索栏 -->
    <page-search
      :config="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @searchBtnClick="handleSearchClick"
    ></page-search>

    <!-- 数据展示区 -->
    <page-content
      :config="pageContentConfig"
      ref="pageContentRef"
      pageName="user"
      @createDataFn="handleCreateUser"
      @editDataFn="handleEditUser"
    ></page-content>

    <!-- 模态框 -->
    <page-modal
      :config="modalConfig"
      ref="pageModalRef"
      :defaultModalData="defaultModalData"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
import { searchFormConfig } from '@/views/main/system/user/config/search.config'
import { pageContentConfig } from '@/views/main/system/user/config/content.config'
import { modalConfig } from '@/views/main/system/user/config/modal.config'
import { defineComponent } from 'vue'
import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  name: 'user',
  components: {
    PageModal,
    PageSearch,
    PageContent,
  },
  setup() {
    const [pageContentRef, handleResetClick, handleSearchClick] =
      usePageSearch()
    const [defaultModalData, pageModalRef, handleCreateUser, handleEditUser] =
      usePageModal()

    return {
      pageContentRef,
      handleResetClick,
      handleSearchClick,
      searchFormConfig,
      pageContentConfig,
      modalConfig,
      pageModalRef,
      defaultModalData,
      handleCreateUser,
      handleEditUser,
    }
  },
})
</script>

<style scoped></style>
