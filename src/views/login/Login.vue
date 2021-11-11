<template>
  <div class="login">
    <login-panel />
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from 'vue'
import LoginPanel from './comps/Login-panel.vue'
export default defineComponent({
  name: '',
  props: {},
  components: {
    LoginPanel,
  },
  setup(props, ctx: SetupContext) {
    return {}
  },
})
</script>

<style scoped lang="less"></style>
