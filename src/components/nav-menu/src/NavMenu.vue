<template>
  <div class="nav-menu">
    <div class="logo">
      <!-- 在引号中使用@ 标识符，前面加~ -->
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span class="title">Vue3+TS</span>
    </div>
    <!-- default-active="2" -->
    <el-menu class="el-menu-vertical" :collapse="isCollapse">
      <!-- 循环菜单列表 -->
      <template v-for="items of roleMenu" :key="items.id">
        <!-- 一级菜单 -->
        <template v-if="items.type === 1">
          <el-sub-menu :index="items.id + ''">
            <template #title>
              <el-icon><location /></el-icon>
              <span>{{ items.name }}</span>
            </template>
            <!-- 二级菜单 -->
            <template v-for="subItem of items.children" :key="subItem.id">
              <el-menu-item
                :index="subItem.id + ''"
                @click="handleMenuItem(subItem)"
              >
                <i v-if="subItem.icon" :class="subItem.icon"></i>
                <span>{{ subItem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext, computed } from 'vue'
import { useStore } from '@/store/index'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'nav-menu',
  props: {
    isCollapse: {
      type: Boolean,
      require: true,
    },
  },
  components: {},
  setup(props, ctx: SetupContext) {
    const store = useStore()
    const router = useRouter()
    const roleMenu = computed(() => store.state.login.roleMenuInfo)
    // 从subMenu中取得menu的url，根据url，动态的添加path，进行路由跳转
    const handleMenuItem = (item: any) => {
      // TODO 刷新之后页面丢失
      router.push({
        // 路径不存在时，跳转到404
        path: item.url ?? '/not-found',
      })
    }

    return {
      roleMenu,
      handleMenuItem,
    }
  },
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;
  color: #fff;
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
