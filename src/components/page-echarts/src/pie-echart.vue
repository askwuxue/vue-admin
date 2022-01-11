<template>
  <div>
    <base-echarts :options="options"></base-echarts>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineExpose, computed } from 'vue'
import { IDataType } from '../type'
import BaseEcharts from '@/base-ui/base-Echarts'

defineExpose(BaseEcharts)
const props = defineProps<{ pieData: IDataType[] }>()

// 响应式数据
const options = computed(() => {
  return {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  }
})
</script>

<style lang="scss" scoped></style>
