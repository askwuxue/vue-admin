<template>
  <div class="login-panel">
    <h1 class="login-title">后台管理系统</h1>
    <el-tabs type="border-card" v-model="currTab" tab-click="changeTab">
      <el-tab-pane name="accountPane">
        <template #label>
          <span>
            <el-icon class=""></el-icon>
            账号登录
          </span>
        </template>
        <!-- 账号密码登录组件 -->
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane label="Config" name="phonePane">
        <template #label>
          <span>
            <el-icon class=""></el-icon>
            手机号登录
          </span>
        </template>
        <!-- 手机号登录组件 -->
        <login-phone ref="phoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>
    <el-button
      type="primary"
      @click="submitForm('ruleForm')"
      class="login-button"
    >
      Submit
    </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue'
import LoginAccount from './Login-account.vue'
import LoginPhone from './Login-phone.vue'
import { ACCOUNTPANE, PHONEPANE } from '../config/common'

export default defineComponent({
  name: '',
  props: {},
  components: {
    LoginAccount,
    LoginPhone,
  },
  setup(props, ctx: SetupContext) {
    // login-account 组件ref
    const accountRef = ref<InstanceType<typeof LoginAccount>>()

    // login-phone 组件ref
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()

    // 当前选中的tab
    const currTab = ref(ACCOUNTPANE)

    // 登录
    const submitForm = () => {
      // account 登录
      if (currTab.value === ACCOUNTPANE) {
        accountRef.value?.loginAction()
      }

      // phone登录
      if (currTab.value === PHONEPANE) {
        console.log('PHONEPANE: ', PHONEPANE)
        phoneRef.value?.loginAction()
      }
    }

    return {
      currTab,
      accountRef,
      submitForm,
    }
  },
})
</script>

<style scoped lang="less">
.login-panel {
  width: 400px;
  height: 260px;
  margin: 210px auto;
  border: 1px solid #ccc;
}
// TODO 使用深入理解css的思想书写css，类名应该从普通到精确，不应该直接精确
.login-title {
  text-align: center;
}
.login-button {
  width: 100%;
}
</style>
