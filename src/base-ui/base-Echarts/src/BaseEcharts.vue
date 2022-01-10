<template>
  <div class="base-echarts">
    <div ref="echartsDivRef" :style="{ width: '400px', height: '300px' }"></div>
  </div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts'
import { defineProps, withDefaults, ref, onMounted } from 'vue'

const props = withDefaults(
  defineProps<{
    options: ''
  }>(),
  {},
)

// TODO ref的使用
const echartsDivRef = ref<HTMLElement>()

onMounted(() => {
  var myChart = echarts.init(echartsDivRef.value!)
  // 绘制图表
  myChart.setOption({
    title: {
      text: 'ECharts 入门示例',
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  })
})
</script>

<style lang="scss" scoped></style>
