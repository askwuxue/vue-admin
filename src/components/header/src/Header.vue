<template>
  <div class="nav-header">
    <i class="fold-menu" @click="handleFoldClick">
      <el-icon v-if="isFold"><expand /></el-icon>
      <el-icon v-else><fold /></el-icon>
    </i>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue'
export default defineComponent({
  name: '',
  props: {},
  components: {},
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
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
