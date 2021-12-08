<template>
  <div class="table">
    <el-table :data="tableData" border>
      <template v-for="item of propsData" :key="item.prop">
        <el-table-column v-bind="item">
          <!-- 默认插槽 -->
          <template #default="scope">
            <!-- 动态插槽，如果没有使用propName进行动态插槽渲染，则渲染默认插槽 -->
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
      <!-- <el-table-column prop="name" label="Name" width="180" /> -->
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from 'vue'
export default defineComponent({
  name: '',
  // table 配置以及数据
  props: {
    propsData: {
      required: true,
      type: Array,
    },
    tableData: {
      required: true,
      type: Array,
    },
  },
  components: {},
  setup(props, ctx: SetupContext) {
    return {}
  },
})
</script>

<style scoped lang="less"></style>
