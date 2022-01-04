<template>
  <div class="menu">
    <page-content :config="pageContentConfig" pageName="menu"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import { pageContentConfig } from './config/content.config'

export default defineComponent({
  name: 'menu',
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
