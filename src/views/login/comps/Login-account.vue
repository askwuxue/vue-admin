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
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
    <el-checkbox v-model="isKeepPassword" label="记住密码"></el-checkbox>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus/lib/components'
import { defineComponent, reactive, ref, SetupContext } from 'vue'
import { rules } from '../config/login-account'
import localCache from '@/utils/cache'
import store from '@/store'

export default defineComponent({
  name: '',
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const account = reactive({
      name: localCache.getCache('name') ? localCache.getCache('name') : '',
      password: localCache.getCache('password')
        ? localCache.getCache('password')
        : '',
    })
    const labelPosition = 'left'
    // 是否记住密码
    const isKeepPassword = ref(false)
    const formRef = ref<InstanceType<typeof ElForm>>()
    // 提交验证
    const loginAction = () => {
      // 输入验证
      formRef.value?.validate((valid) => {
        if (valid) {
          // 1. 记住密码逻辑
          if (isKeepPassword.value) {
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }

          // 2. 开始登录验证
          store.dispatch('loginModule/accountLoginAction', account)
        }
      })
    }
    return {
      account,
      labelPosition,
      isKeepPassword,
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
