<template>
  <div class="user">
    <wx-form v-bind="searchFormConfig" v-model="searchData"></wx-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import WxForm from '@/base-ui/form'
// 导入表单配置项
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    WxForm,
  },
  setup() {
    const searchData = reactive({
      name: '',
      password: '',
      hobbies: '',
      datepicker: '',
    })
    return {
      searchFormConfig,
      searchData,
    }
  },
})
</script>

<style scoped></style>
