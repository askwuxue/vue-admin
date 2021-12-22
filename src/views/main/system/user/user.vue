<template>
  <div class="user">
    <!-- 搜索栏 -->
    <page-search></page-search>
    <!-- 数据展示区 -->
    <page-content :config="pageContentConfig" pageName="user"></page-content>
  </div>
</template>

<script lang="ts">
import { PageSearch } from '@/components/page-search'
import { PageContent } from '@/components/page-content'
import { pageContentConfig } from '@/views/main/system/user/config/content.config'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
  },
  setup() {
    // const handleSelectionChange = (value: any) => {
    //   console.log('value: ', value)
    // }

    return {
      // handleSelectionChange,
      pageContentConfig,
    }
  },
})
</script>

<style scoped></style>
