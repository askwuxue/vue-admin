<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <wx-card title="分类商品数量(饼图)">
          <base-echarts></base-echarts>
        </wx-card>
      </el-col>
      <el-col :span="10">
        <wx-card title="不同城市商品销量"></wx-card>
      </el-col>
      <el-col :span="7">
        <wx-card title="分类商品数量(玫瑰图)"></wx-card>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <wx-card title="分类商品的销量"></wx-card>
      </el-col>
      <el-col :span="12">
        <wx-card title="分类商品的收藏"></wx-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WxCard from '@/base-ui/card'
import BaseEcharts from '@/base-ui/base-Echarts'
import { useStore } from '@/store'

export default defineComponent({
  name: 'dashboard',
  components: {
    WxCard,
    BaseEcharts,
  },
  setup() {
    const store = useStore()
    const getData = () => {
      store.dispatch('dashboard/getDashboardDataAction')
    }
    getData()
    return {}
  },
})
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
