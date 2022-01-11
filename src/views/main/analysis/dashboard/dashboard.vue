<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <wx-card title="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount" />
        </wx-card>
      </el-col>
      <el-col :span="10">
        <wx-card title="不同城市商品销量">
          <map-echart :mapData="addressGoodsSale" />
        </wx-card>
      </el-col>
      <el-col :span="7">
        <wx-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount" />
        </wx-card>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <wx-card title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale" />
        </wx-card>
      </el-col>
      <el-col :span="12">
        <wx-card title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsFavor" />
        </wx-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import WxCard from '@/base-ui/card'
import { useStore } from '@/store'
import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
  MapEchart,
} from '@/components/page-echarts'

export default defineComponent({
  name: 'dashboard',
  components: {
    WxCard,
    PieEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
    MapEchart,
  },
  setup() {
    const store = useStore()
    store.dispatch('dashboard/getDashboardDataAction')
    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item) => ({
        name: item.name,
        value: item.goodsCount,
      }))
    })

    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor
      for (const item of categoryGoodsFavor) {
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      }
      return { xLabels, values }
    })

    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsSale = store.state.dashboard.categoryGoodsSale
      for (const item of categoryGoodsSale) {
        xLabels.push(item.name)
        values.push(item.goodsCount ?? 1)
      }
      return {
        xLabels,
        values,
      }
    })

    const addressGoodsSale = computed(() => {
      return store.state.dashboard.addressGoodsSale.map((item: any) => {
        return { name: item.address, value: item.count }
      })
    })

    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale,
    }
  },
})
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
