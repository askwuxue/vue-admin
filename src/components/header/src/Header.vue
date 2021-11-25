<template>
  <div class="nav-header">
    <i class="fold-menu" @click="handleFoldClick">
      <el-icon v-if="isFold"><expand /></el-icon>
      <el-icon v-else><fold /></el-icon>
    </i>
    <!-- 面包屑和用户信息 -->
    <div class="header-info">
      <span class="header-crumbs">面包屑</span>
      <span class="header-userInfo">
        <nav-icons></nav-icons>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue'
import navIcons from './nav-icons.vue'
export default defineComponent({
  name: '',
  props: {},
  components: {
    navIcons,
  },
  emits: ['foldchange'],
  setup(props, ctx: SetupContext) {
    // 默认折叠
    const isFold = ref(false)
    const handleFoldClick = () => {
      // console.log('click')
      isFold.value = !isFold.value
      ctx.emit('foldchange', isFold.value)
    }
    return {
      isFold,
      handleFoldClick,
    }
  },
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .header-info {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
