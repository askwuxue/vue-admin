<template>
  <div class="user">
    <!-- 搜索栏 -->
    <page-search></page-search>
    <!-- 数据展示区 -->
    <page-content pageName="role"></page-content>
  </div>
</template>

<script lang="ts">
import { PageSearch } from '@/components/page-search'
import { PageContent } from '@/components/page-content'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
  },
  setup() {
    // const handleSelectionChange = (value: any) => {
    //   console.log('user....')
    //   console.log('value: ', value)
    // }

    return {
      // handleSelectionChange,
    }
  },
})
</script>

<style scoped></style>
