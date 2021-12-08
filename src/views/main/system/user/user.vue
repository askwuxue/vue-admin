<template>
  <div class="user">
    <!-- 搜索栏 -->
    <page-search></page-search>
    <!-- 数据展示栏 -->
    <wx-table :tableData="userList" :propsData="propsData">
      <!-- 动态插槽的渲染,指定对应的propName -->
      <template #status="scope">
        <el-button>{{ scope.row.enable ? '启用' : '关闭' }}</el-button>
      </template>
    </wx-table>
  </div>
</template>

<script lang="ts">
import { PageSearch } from '@/components/page-search'
import { WxTable } from '@/base-ui/table'
import { computed, defineComponent } from 'vue'
// 自定义的useStore
import { useStore } from '@/store'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    WxTable,
  },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      url: '/users/list',
      queryInfo: {
        offset: 0,
        size: 100,
      },
    })
    const userList = computed(() => store.state.system.userList)
    // const userList: any[] = []
    console.log('userList: ', userList)
    const userListCount = store.state.system.userListCount
    console.log('userListCount: ', userListCount)

    const propsData = [
      { prop: 'name', label: '用户名', minWidth: 100, slotName: 'name' },
      {
        prop: 'realname',
        label: '真实姓名',
        minWidth: 100,
        slotName: 'realname',
      },
      {
        prop: 'cellphone',
        label: '手机号码',
        minWidth: 100,
        slotName: 'cellphone',
      },
      { prop: 'enable', label: '状态', minWidth: 100, slotName: 'status' },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: 100,
        slotName: 'createAt',
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: 100,
        slotName: 'updateAt',
      },
    ]

    return {
      userList,
      userListCount,
      propsData,
    }
  },
})
</script>

<style scoped></style>
