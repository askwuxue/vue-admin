<template>
  <div class="table">
    <!-- TODO 样式重新调整 -->
    <!-- table 展示的header -->
    <div class="header">
      <slot name="header">
        <div class="class">{{ title }}</div>
        <div class="handler">
          <!-- slot 不能嵌套，在父组件中使用的时候，直接使用slot 的name名 -->
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="tableData"
      border
      @selection-change="handleSelectionChange"
    >
      <!-- 是否展示数据可选择框 -->
      <el-table-column v-if="showSelect" type="selection"></el-table-column>
      <!-- 是否展示索引 -->
      <el-table-column
        v-if="showIndex"
        type="index"
        label="索引"
        width="100"
        align="center"
      ></el-table-column>
      <template v-for="item of propsData" :key="item.prop">
        <el-table-column v-bind="item" align="center">
          <!-- 默认插槽 -->
          <template #default="scope">
            <!-- 动态插槽，如果没有使用propName进行动态插槽渲染，则渲染默认插槽 -->
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <!-- table 展示的footer -->
    <div class="footer">
      <slot name="footer">
        <!-- 分页 -->
        <el-pagination
          v-model:currentPage="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        ></el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from 'vue'
export default defineComponent({
  name: '',
  // table 配置以及数据
  props: {
    title: {
      type: String,
    },
    propsData: {
      required: true,
      type: Array,
    },
    // 是否展示索引
    showIndex: {
      type: Boolean,
      default: false,
    },
    // 是否展示选择checkbox
    showSelect: {
      type: Boolean,
      default: false,
    },
    tableData: {
      required: true,
      type: Array,
    },
  },
  components: {},
  emits: ['handleSelectionChange'],
  setup(props, { emit }) {
    const handleSelectionChange = (value: any) => {
      emit('handleSelectionChange', value)
      // console.log('value: ', value)
    }

    return {
      handleSelectionChange,
    }
  },
})
</script>

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
}
</style>
