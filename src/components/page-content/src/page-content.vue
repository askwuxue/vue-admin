<template>
  <div class="page-content">
    <wx-table
      v-bind="config"
      :tableData="listData"
      :tableDataCount="listCount"
      v-model:page="paginationData"
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
      <template #handler>
        <el-button type="primary" size="mini">编辑</el-button>
        <el-button type="danger" size="mini">删除</el-button>
      </template>
      <!-- TODO footer slot 渲染table的底部 -->
    </wx-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext, computed, ref, watch } from 'vue'
import { useStore } from '@/store'
import { WxTable } from '@/base-ui/table'

export default defineComponent({
  name: '',
  props: {
    config: {
      required: true,
      type: Object,
    },
    pageName: {
      type: String,
    },
  },
  components: {
    WxTable,
  },
  setup(props, ctx: SetupContext) {
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
      paginationData,
      listData,
      listCount,
      getPageData,
    }
  },
})
</script>

<style scoped lang="less"></style>
