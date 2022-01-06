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
          <el-button @click="handleClickCancel">取消</el-button>
          <el-button type="primary" @click="handleClickConfirm">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ref, defineComponent, watch } from 'vue'
import WxForm from '@/base-ui/form'
import store from '@/store'

export default defineComponent({
  components: {
    WxForm,
  },
  props: {
    config: {
      type: Object,
      required: true,
    },
    defaultModalData: {
      type: Object,
      default: () => ({}),
    },
    pageName: {
      type: String,
      required: true,
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

    // 确认提交
    const handleClickConfirm = () => {
      centerDialogVisible.value = true
      const keys = Object.keys(props.defaultModalData)
      // 编辑
      if (keys.length) {
        store.dispatch('system/editDataAction', {
          pageName: props.pageName,
          editInfo: { ...formData.value },
          id: props.defaultModalData.id,
        })
      } else {
        store.dispatch('system/createDataAction', {
          pageName: props.pageName,
          dataInfo: formData.value,
        })
      }
    }

    // 取消提交
    const handleClickCancel = () => {
      centerDialogVisible.value = false
    }

    return {
      centerDialogVisible,
      formData,
      handleClickConfirm,
      handleClickCancel,
    }
  },
})
</script>

<style lang="scss" scoped></style>
