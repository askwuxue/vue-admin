<template>
  <div class="bar-echart">
    <base-echarts :options="options"></base-echarts>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue'
import * as echarts from 'echarts'
import BaseEcharts from '@/base-ui/base-Echarts'

const props = withDefaults(
  defineProps<{
    title?: string
    xLabels: string[]
    values: any[]
  }>(),
  {
    title: '',
  },
)

const options = computed(() => {
  return {
    xAxis: {
      data: props.xLabels,
      axisLabel: {
        inside: true,
        color: '#fff',
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      z: 10,
    },
    yAxis: {
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: '#999',
      },
    },
    dataZoom: [
      {
        type: 'inside',
      },
    ],
    series: [
      {
        type: 'bar',
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' },
          ]),
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' },
            ]),
          },
        },
        data: props.values,
      },
    ],
  }
})
</script>

<style scoped></style>
