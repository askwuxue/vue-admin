<template>
  <wx-form v-bind="config" v-model="searchData">
    <!-- header slot -->
    <template #header>
      <h2>Header</h2>
    </template>
    <!-- footer slot -->
    <template #footer>
      <el-button type="primary" @click="handleResetClick">
        <el-icon class="el-icon--left"><refresh-right /></el-icon>
        重置
      </el-button>
      <el-button type="success" @click="handleSearchClick">
        <el-icon class="el-icon--left"><Search /></el-icon>
        搜索
      </el-button>
    </template>
  </wx-form>
</template>

<script lang="ts">
import WxForm from '@/base-ui/form'

import { defineComponent, reactive, ref } from 'vue'
export default defineComponent({
  name: '',
  props: {
    config: {
      required: true,
      type: Object,
    },
  },
  emits: ['resetBtnClick'],
  components: {
    WxForm,
  },
  setup(props, { emit }) {
    // TODO 这种方式对应了父组件的computed属性进行数据双向绑定的方式
    //#region
    // let searchData: any = reactive({
    //   username: '',
    //   password: '',
    //   hobbies: '',
    //   datepicker: '',
    // })
    //#endregion

    // TODO ESLint规则：不允许破坏传递给setup的道具
    const formItem = props.config.formItems ?? []
    const originFormData: any = {}
    // 根据field动态的生成searchForm 数据
    for (const item of formItem) {
      originFormData[item.filed] = ''
    }
    // 响应式对象
    let searchData = ref(originFormData)

    // 重置
    const handleResetClick = () => {
      // TODO 方式一： 通过重写响应式对象属性值
      //#region

      // for (const key of Object.keys(originFormData)) {
      //   searchData.value[key] = originFormData[key]
      // }
      //#endregion
      // TODO 方式二：通过自定义v-model更新更新
      searchData.value = originFormData
      // 发送给父组件，父组件监听并进行后续操作
      console.log('reset')
      emit('resetBtnClick')
    }
    // 搜索
    const handleSearchClick = () => {
      console.log('search')
    }
    return {
      // searchFormConfig,
      searchData,
      handleResetClick,
      handleSearchClick,
    }
  },
})
</script>

<style scoped lang="less"></style>
