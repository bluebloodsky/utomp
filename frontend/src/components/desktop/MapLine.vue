<template>
  <section ref="wrapper"></section>
</template>
<script>
import echarts from 'echarts'
import wuhan from '@/shared/wuhan'
export default {
  data() {
    return {
      chart: null,
    }
  },
  mounted() {
    echarts.registerMap('wuhan', wuhan);
    this.chart = echarts.init(this.$refs['wrapper'])
    window.addEventListener("resize", () => {
      this.chart.resize()
    })
    this.chart.setOption({
      geo: {
        map: 'wuhan',
        label: {
          normal: {
            show: true,
            textStyle: {
              color: 'black'
            }
          }
        },
        roam: true
      }
    })
  }
}

</script>
<style scoped>


</style>
