<template>
  <!-- 模态框 -->
  <div class="page-modal">
    <el-dialog
      v-model="centerDialogVisible"
      title="新建用户"
      width="30%"
      center
    >
      <wx-form v-bind="config" v-model="modalValue"></wx-form>
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
import { ref, defineComponent } from 'vue'
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
  },
  setup() {
    const centerDialogVisible = ref(true)
    const modalValue = {}
    return {
      centerDialogVisible,
      modalValue,
    }
  },
})
</script>

<style lang="scss" scoped></style>
