<template>
  <section ref="wrapper"></section>
</template>
<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      chart: null,
    }
  },
  mounted() {
    let option = {
      tooltip: {
        trigger: 'item',
        formatter: "{d}%"
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        textStyle: {
          color: '#fff'
        },
        data: ['O2探测器', 'CH4探测器', 'C2S探测器', '投入式液位仪', '可燃气体探测器']
      },
      series: [{
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: false,
            textStyle: {
              fontSize: '30',
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          { value: 335, name: 'O2探测器' },
          { value: 310, name: 'CH4探测器' },
          { value: 234, name: 'C2S探测器' },
          { value: 135, name: '投入式液位仪' },
          { value: 1548, name: '可燃气体探测器' }
        ]
      }]
    }
    this.chart = echarts.init(this.$refs['wrapper'])   
    window.addEventListener("resize", () => {
      this.chart.resize()
    })
    this.chart.setOption(option)
  }
}

</script>
<style scoped>


</style>
