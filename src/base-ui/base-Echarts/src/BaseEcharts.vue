<template>
  <div class="base-echarts">
    <div ref="echartsDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { EChartsOption } from 'echarts'
import { defineProps, withDefaults, ref, onMounted, watchEffect } from 'vue'
// import options1 from '../data/options1.json'
import useEcharts from '../hooks/use-echarts'

// TODO方便使用ts
const props = withDefaults(
  defineProps<{
    options: EChartsOption
    width?: string
    height?: string
  }>(),
  { width: '100%', height: '300px' },
)

// TODO ref的使用
const echartsDivRef = ref<HTMLElement>()

// TODO ref在挂载结束之前不存在
onMounted(() => {
  const { setOptions } = useEcharts(echartsDivRef.value!)
  // 绘制图表
  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>

<style lang="scss" scoped></style>
