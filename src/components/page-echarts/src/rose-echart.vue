<template>
  <div class="rose-echart">
    <base-echarts :options="options"></base-echarts>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import BaseEcharts from '@/base-ui/base-Echarts'
import { IDataType } from '../type'

const props = defineProps<{
  roseData: IDataType[]
}>()

const options = computed(() => {
  return {
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    series: [
      {
        name: '类别数据',
        type: 'pie',
        radius: [10, 80],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8,
        },
        data: props.roseData,
      },
    ],
  }
})
</script>

<style scoped></style>
