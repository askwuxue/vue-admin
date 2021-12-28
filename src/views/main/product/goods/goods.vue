<template>
  <div class="goods">
    <page-content :config="pageContentConfig" pageName="goods"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import { pageContentConfig } from '@/views/main/product/goods/config/content.config'

export default defineComponent({
  name: 'goods',
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
