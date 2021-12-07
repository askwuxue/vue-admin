<template>
  <wx-form v-bind="searchFormConfig" v-model="searchData">
    <!-- header slot -->
    <template #header>
      <h2>Header</h2>
    </template>
    <!-- footer slot -->
    <template #footer>
      <el-button type="primary">
        <el-icon class="el-icon--left"><refresh-right /></el-icon>
        Refresh
      </el-button>
      <el-button type="success">
        <el-icon class="el-icon--left"><Search /></el-icon>
        Search
      </el-button>
    </template>
  </wx-form>
</template>

<script lang="ts">
import WxForm from '@/base-ui/form'
// 导入表单配置项
import { searchFormConfig } from '@/views/main/system/user/config/search.config'

import { defineComponent, reactive } from 'vue'
export default defineComponent({
  name: '',
  props: {},
  components: {
    WxForm,
  },
  setup() {
    // 查询条件
    // TODO 这种方式对应了父组件的computed属性进行数据双向绑定的方式
    const searchData = reactive({
      username: '',
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

<style scoped lang="less"></style>
