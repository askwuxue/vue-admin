<template>
  <div class="nav-icons">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar shape="circle" :size="size" :src="circleUrl"></el-avatar>
        <span>用户信息</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登录</el-dropdown-item>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item>还没有</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext, ref } from 'vue'
export default defineComponent({
  name: 'nav-icons',
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    // const state = reactive({
    //   circleUrl:
    //     'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    //   sizeList: ['large', 'medium', 'small'],
    // })
    const circleUrl = ref(
      'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    )
    const size = ref('small')
    return { circleUrl, size }
  },
})
</script>

<style scoped lang="less">
.el-dropdown-link {
  display: flex;
  align-items: center;
}
.el-avatar {
  margin-right: 5px;
}
</style>
