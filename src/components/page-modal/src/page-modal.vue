<template>
  <!-- 模态框 -->
  <div class="page-modal">
    <el-dialog
      v-model="centerDialogVisible"
      title="新建用户"
      width="30%"
      center
      destroy-on-close
    >
      <wx-form v-bind="config" v-model="formData"></wx-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ref, defineComponent, watch } from 'vue'
import WxForm from '@/base-ui/form'

export default defineComponent({
  components: {
    WxForm,
  },
  props: {
    config: {
      required: true,
      type: Object,
    },
    defaultModalData: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const centerDialogVisible = ref(false)
    // 默认传递给wx-form的数据
    const formData = ref({})

    // 监听传递给modal的数据，发生变化，数据同步到wx-form
    watch(
      () => props.defaultModalData,
      (newValue) => {
        for (const item of props.config.formItems) {
          formData.value[`${item.filed}`] = newValue[`${item.filed}`]
        }
      },
    )

    return {
      centerDialogVisible,
      formData,
    }
  },
})
</script>

<style lang="scss" scoped></style>
