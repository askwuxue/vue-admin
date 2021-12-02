<template>
  <div class="nav-header">
    <i class="fold-menu" @click="handleFoldClick">
      <el-icon v-if="isFold"><expand /></el-icon>
      <el-icon v-else><fold /></el-icon>
    </i>
    <div class="header-info">
      <!-- 面包屑 -->
      <span class="header-crumbs">
        <wx-breadcrumb :breadcrumb="breadcrumb" />
      </span>
      <!--用户信息 -->
      <span class="header-userInfo">
        <nav-icons></nav-icons>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext, computed } from 'vue'
import navIcons from './nav-icons.vue'
import { WxBreadcrumb } from '@/base-ui/breadcrumb'
import { mapPathToBreadcrumb } from '@/utils/mapMenus'
import { useRoute } from 'vue-router'
import { useStore } from '@/store/index'

export default defineComponent({
  name: '',
  props: {},
  components: {
    navIcons,
    WxBreadcrumb,
  },
  emits: ['foldchange'],
  setup(props, ctx: SetupContext) {
    // 默认折叠
    const isFold = ref(false)

    // 获取面包屑名称数组
    const store = useStore()
    // TODO setup中的函数只会执行一次，但是对于计算属性等需要缓存的内容会正常缓存
    const breadcrumb = computed(() => {
      const route = useRoute()
      const roleMenu = store.state.login.roleMenuInfo
      const currentPath = route.path
      return mapPathToBreadcrumb(roleMenu, currentPath, [])
    })

    const handleFoldClick = () => {
      // console.log('click')
      isFold.value = !isFold.value
      ctx.emit('foldchange', isFold.value)
    }
    return {
      isFold,
      breadcrumb,
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
