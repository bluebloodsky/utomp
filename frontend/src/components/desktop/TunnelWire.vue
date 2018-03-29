<!--入廊管线-->
<template>
  <section>
    <div ref="wrapper" style="height:90%"></div>
    <nav>
      <ul>
        <li v-for="i in pageCount">
          <a @click="cur_page = i">{{i}}</a>
        </li>
      </ul>
    </nav>
  </section>
</template>
<script>
import echarts from 'echarts'
export default {
  props: ['baseInfos'],
  data() {
    return {
      chart: null,
      cur_page: 0,
      info_count: 4,
      option: {},
    }
  },
  computed: {
    pageCount() {
      return this.baseInfos && this.baseInfos.length ? Math.ceil(this.baseInfos.length / this.info_count) : 0
    },
    showInfos() {
      return this.baseInfos && this.baseInfos.length ? this.baseInfos.slice((this.cur_page - 1) * this.info_count, Math.min(this.cur_page * this.info_count), this.baseInfos.length) : []
    }
  },
  watch: {
    showInfos: function(newVal, oldVal) {
      let legendData = []
      let seriesData = []
      newVal.map(item => {
        legendData.push(item.name_cn)
        seriesData.push({
          type: 'bar',
          name: item.name_cn,
          data: item.tunnel_wire
        })
      })
      this.option.legend = {
        textStyle: {
          color: '#fff'
        },
        data: legendData
      }
      this.option.series = seriesData
      this.chart.setOption(this.option, true)
    }
  },
  mounted() {
    this.chart = echarts.init(this.$refs['wrapper'])
    this.option = {
      textStyle: {
        color: '#fff',
      },
      xAxis: {
        type: 'category',
        data: ['电力', '综合', '雨污', '天然气']
      },
      yAxis: {
        type: 'value',
        name: '条',
        nameLocation: 'end'
      }
    }
    this.cur_page = 1
    window.addEventListener("resize", () => {
      this.chart.resize()
    })
  }
}

</script>
<style scoped>
nav {
  text-align: center;
}

</style>
