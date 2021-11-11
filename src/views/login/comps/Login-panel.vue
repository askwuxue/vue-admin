<template>
  <div class="login-panel">
    <!-- <h2 class="login-title">后台管理系统</h2> -->
    <el-tabs type="border-card">
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon class=""></el-icon>
            Route
          </span>
        </template>
        Route
      </el-tab-pane>
      <el-tab-pane label="Config">
        <template #label>
          <span>
            <el-icon class=""></el-icon>
            Route
          </span>
        </template>
        Route
        <el-icon><aim /></el-icon>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from 'vue'
export default defineComponent({
  name: '',
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    return {}
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
.login-title {
  // margin: 0 auto;
  text-align: center;
}
</style>
