<template>
  <div class="main">
    <el-container class="main-content">
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '50px' : '200px'">
        <!-- 侧边菜单栏  -->
        <nav-menu :isCollapse="isCollapse"></nav-menu>
      </el-aside>
      <!-- 页面主体 -->
      <el-container class="page">
        <!-- 页面头部 -->
        <el-header>
          <page-header @foldchange="foldChange"></page-header>
        </el-header>
        <el-main class="page-content">
          <!-- <div class="page-info"> -->
          <router-view></router-view>
          <!-- </div> -->
        </el-main>
        <!-- <el-footer>Footer</el-footer> -->
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue'
import { NavMenu } from '@/components/nav-menu'
import { Header as PageHeader } from '@/components/header'
export default defineComponent({
  name: 'home',
  props: {},
  components: {
    NavMenu,
    PageHeader,
  },
  setup(props, ctx: SetupContext) {
    // 是否侧边栏折叠
    const isCollapse = ref(false)
    const foldChange = (value: boolean) => {
      isCollapse.value = value
      // console.log('value: ', value)
    }
    return {
      foldChange,
      isCollapse,
    }
  },
})
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100% - 48px);
}

.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-header {
  height: 48px !important;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
