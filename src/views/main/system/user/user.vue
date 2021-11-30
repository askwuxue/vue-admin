<template>
  <div class="user">
    <wx-form v-bind="searchFormConfig"></wx-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WxForm from '@/base-ui/form'
// 导入表单配置项
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    WxForm,
  },
  setup() {
    return {
      searchFormConfig,
    }
  },
})
</script>

<style scoped></style>
