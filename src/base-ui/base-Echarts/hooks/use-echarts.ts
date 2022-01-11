import * as echarts from 'echarts'
import { EChartsOption } from 'echarts'
import chinaMapData from '../data/china.json'

echarts.registerMap('china', chinaMapData)

export default function (el: HTMLElement) {
  const myChart = echarts.init(el)

  // 设置echarts的数据
  const setOptions = (options: EChartsOption) => {
    myChart.setOption(options)
  }

  // 响应式调整大小
  const updateSize = () => {
    myChart.resize()
  }

  // 窗口resize,echarts响应式
  window.addEventListener('resize', updateSize)

  return {
    setOptions,
  }
}
