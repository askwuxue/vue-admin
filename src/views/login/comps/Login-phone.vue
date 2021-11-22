<template>
  <div class="login-phone">
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="info"
      :rules="rules"
      ref="formRef"
    >
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="info.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input v-model="info.pass"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import store from '@/store'
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref, SetupContext } from 'vue'
import { rules } from '../config/login-phone'
export default defineComponent({
  name: '',
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const labelPosition = 'left'
    const info = reactive({
      phone: '',
      pass: '',
    })
    // 表单ref
    const formRef = ref<InstanceType<typeof ElForm>>()
    // 表单验证
    const loginAction = () => {
      console.log('loginAction: ')
      formRef.value?.validate((valid) => {
        console.log('valid: ', valid)
        if (valid) {
          // 登录
          store.dispatch('login/phoneLoginAction', info)
        }
        // console.log('valid: ', valid)
        // console.log('真正的执行逻辑')
      })
    }

    return {
      labelPosition,
      info,
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
