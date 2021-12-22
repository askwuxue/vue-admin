<template>
  <div class="page-content">
    <wx-table v-bind="config" :tableData="listData">
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
import { defineComponent, SetupContext, computed } from 'vue'
import { useStore } from '@/store'
import { WxTable } from '@/base-ui/table'
import { pageContentConfig } from '@/views/main/system/user/config/content.config'

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
    // console.log('props: ', props)
    const store = useStore()
    store.dispatch('system/getPageListAction', props.pageName)

    const listName = `${props.pageName}List`
    const listCountName = `${props.pageName}ListCount`
    // TODO 为什么需要转成any
    // TODO getters为什么无法同步取得
    // const listData = computed(() =>
    //   store.getters[`system/getPageListData`](props.pageName),
    // )
    const listData = computed(() => (store as any).state.system[listName])
    const listCount = (store as any).state.system[listCountName]
    return {
      listData,
      listCount,
      pageContentConfig,
    }
  },
})
</script>

<style scoped lang="less"></style>
