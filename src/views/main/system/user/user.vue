<template>
  <div class="user">
    <!-- 搜索栏 -->
    <page-search></page-search>
    <!-- 数据展示栏 -->
    <wx-table
      :tableData="userList"
      :propsData="propsData"
      :showIndex="showIndex"
      :showSelect="showSelect"
      :title="title"
      @handleSelectionChange="handleSelectionChange"
    >
      <!-- header slot 渲染table的头部 -->
      <template #headerHandler>
        <el-button>创建用户</el-button>
      </template>
      <!-- 动态插槽的渲染,指定对应的propName -->
      <template #status="scope">
        <!-- TODO 根据当前的状态设置不同的button样式 -->
        <el-button type="primary" size="small" plain>
          {{ scope.row.enable ? '启用' : '关闭' }}
        </el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filter.formatUTCDate(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filter.formatUTCDate(scope.row.createAt) }}</span>
      </template>

      <!-- footer slot 渲染table的底部 -->
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

    const showIndex = true
    const showSelect = true
    const title = '用户列表'
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

    const handleSelectionChange = (value: any) => {
      console.log('user....')
      console.log('value: ', value)
    }

    return {
      userList,
      userListCount,
      propsData,
      title,
      showIndex,
      showSelect,
      handleSelectionChange,
    }
  },
})
</script>

<style scoped></style>
