<template>
  <div class="role">
    <!-- 数据展示区 -->
    <page-content :config="pageContentConfig" pageName="role"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import { pageContentConfig } from '@/views/main/system/role/config/content.config'

export default defineComponent({
  name: 'role',
  components: {
    PageContent,
  },
  setup() {
    return {
      pageContentConfig,
    }
  },
})
</script>

<style scoped></style>
