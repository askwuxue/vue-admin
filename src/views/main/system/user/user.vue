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
      @createDataFn="handleCreateData"
      @editDataFn="handleEditData"
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

    // 创建用户，不隐藏密码框
    const createCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.filed === 'password',
      )
      passwordItem!.isHidden = false
    }

    // 编辑用户，隐藏密码框
    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.filed === 'password',
      )
      passwordItem!.isHidden = true
    }

    // page-modal hooks逻辑
    const [defaultModalData, pageModalRef, handleCreateData, handleEditData] =
      usePageModal(createCallback, editCallback)

    return {
      pageContentRef,
      handleResetClick,
      handleSearchClick,
      searchFormConfig,
      pageContentConfig,
      modalConfig,
      pageModalRef,
      defaultModalData,
      handleCreateData,
      handleEditData,
    }
  },
})
</script>

<style scoped></style>
