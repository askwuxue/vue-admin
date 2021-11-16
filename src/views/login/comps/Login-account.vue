<template>
  <div class="login-account">
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="account"
      :rules="rules"
      ref="formRef"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input v-model="account.pass"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus/lib/components'
import { defineComponent, reactive, ref, SetupContext } from 'vue'
import { rules } from '../config/login-account'
export default defineComponent({
  name: '',
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const account = reactive({
      name: '',
      pass: '',
    })
    const labelPosition = 'left'
    const formRef = ref<InstanceType<typeof ElForm>>()
    // 提交验证
    const loginAction = () => {
      formRef.value?.validate((valid) => {
        console.log('valid: ', valid)
        console.log('account 登录验证')
      })
    }
    return {
      account,
      labelPosition,
      rules,
      formRef,
      loginAction,
    }
  },
})
</script>

<style scoped lang="less">
// .password {
//   margin-top: 20px;
// }
</style>
