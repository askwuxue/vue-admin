<template>
  <div class="page-content">
    <wx-table
      v-bind="config"
      :tableData="listData"
      :tableDataCount="listCount"
      v-model:page="paginationData"
    >
      <!-- header slot 渲染table的头部 -->
      <template #headerHandler v-if="isCreate">
        <el-button>创建用户</el-button>
      </template>
      <!-- 动态插槽的渲染,指定对应的propName -->
      <template #status="scope">
        <el-button type="primary" size="small" plain>
          {{ scope.row.status ? '启用' : '关闭' }}
        </el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filter.formatUTCDate(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filter.formatUTCDate(scope.row.createAt) }}</span>
      </template>
      <template #handler="scope">
        <el-button type="primary" size="mini">编辑</el-button>
        <el-button
          type="danger"
          size="mini"
          @click="handleClickDelete(scope.row)"
        >
          删除
        </el-button>
      </template>

      <!-- 其他插槽 -->
      <template
        v-for="item in otherSlots"
        :key="item.slotName"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
      <!-- TODO footer slot 渲染table的底部 -->
    </wx-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext, computed, ref, watch } from 'vue'
import { useStore } from '@/store'
import { WxTable } from '@/base-ui/table'
import { getPermissions } from '@/hooks/use-permission'

export default defineComponent({
  name: '',
  props: {
    config: {
      type: Object,
      required: true,
    },
    pageName: {
      type: String,
      required: true,
    },
  },
  components: {
    WxTable,
  },
  setup(props, ctx: SetupContext) {
    // 获取操作权限
    const isCreate = getPermissions(props.pageName, 'create')
    const isDelete = getPermissions(props.pageName, 'delete')

    // 其他配置slot
    const otherSlots = props.config?.propsData.filter((item: any) => {
      if (
        item.slotName === 'name' ||
        item.slotName === 'status' ||
        item.slotName === 'createAt' ||
        item.slotName === 'updateAt' ||
        item.slotName === 'handler'
      ) {
        return false
      }
      return true
    })

    // 绑定删除
    const handleClickDelete = (item: any) => {
      console.log('item: ', item)
      store.dispatch('system/deleteDataAction', {
        pageName: props.pageName,
        id: item.id,
      })
    }
    const paginationData = ref({ currentPage: 1, pageSize: 10 })
    watch(paginationData, () => getPageData())

    const store = useStore()
    // 发送请求获取页面数据
    const getPageData = (queryInfo: any = {}) => {
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset:
            (paginationData.value.currentPage - 1) *
            paginationData.value.pageSize,
          size: paginationData.value.pageSize,
          ...queryInfo,
        },
      })
    }
    getPageData()

    // TODO getters为什么无法同步取得
    // 已解决：computed 会调用两次，第一次调用时，不会取得数据

    const listData = computed(() =>
      store.getters[`system/getPageListData`](props.pageName),
    )

    const listCount = computed(() =>
      store.getters[`system/getPageListCount`](props.pageName),
    )

    return {
      isCreate,
      isDelete,
      otherSlots,
      paginationData,
      listData,
      listCount,
      getPageData,
      handleClickDelete,
    }
  },
})
</script>

<style scoped lang="less"></style>
