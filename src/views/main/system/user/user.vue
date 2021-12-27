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
    ></page-content>
  </div>
</template>

<script lang="ts">
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { searchFormConfig } from '@/views/main/system/user/config/search.config'
import { pageContentConfig } from '@/views/main/system/user/config/content.config'
import { defineComponent } from 'vue'
import { usePageSearch } from '@/hooks/use-page-search'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
  },
  setup() {
    const { pageContentRef, handleResetClick, handleSearchClick } =
      usePageSearch()
    return {
      pageContentRef,
      handleResetClick,
      handleSearchClick,
      searchFormConfig,
      pageContentConfig,
    }
  },
})
</script>

<style scoped></style>
