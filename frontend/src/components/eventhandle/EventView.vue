<template>
  <section>
    <section class="box top-box">
      <ul>
        <li>今日告警 <span>10</span></li>
        <li>已处置 <span>2</span></li>
        <li>已恢复 <span>0</span></li>
      </ul>
      <div ref="handleRate"></div>
    </section>
    <section ref="typeTrend" class="box middle-box">
    </section>
    <section ref="typeRate" class="box bottom-box">
    </section>
  </section>
</template>
<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      handle_chart: null,
      trend_chart: null,
      rate_chart: null
    }
  },
  mounted() {
    this.handle_chart = echarts.init(this.$refs['handleRate'])
    this.trend_chart = echarts.init(this.$refs['typeTrend'])
    this.rate_chart = echarts.init(this.$refs['typeRate'])
    this.setHandleOption()
    this.setTrendOption()
    this.setRateOption()
    window.addEventListener("resize", () => {
      this.handle_chart.resize()
    })
  },
  methods: {
    setHandleOption() {
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: "{d}%"
        },
        series: [{
          type: 'pie',
          radius: ['60%', '80%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: true,
              position: 'center',
            }
          },
          labelLine: {
            normal: {
              show: true
            }
          },
          data: [
            { value: 20, name: '20%\n处置率', itemStyle: { color: '#90DFE4' } },
            { value: 80, itemStyle: { color: '#ccc' } }
          ]
        }]
      }

      this.handle_chart.setOption(option)
    },
    setTrendOption() {
      let option = {
        title: {
          text: '告警类型趋势',
          textStyle: {
            color: '#fff'
          },
        },
        tooltip: {
          trigger: 'axis',

        },
        legend: {
          orient: 'vertical',
          x: 'right',
          textStyle: {
            color: '#fff'
          },
          data: ['人员闯入', '氧气浓度过低', '天然气泄漏']
        },
        grid: {
          left: '3%',
          right: '4%',
          top: '25%',
          bottom: '3%',
          containLabel: true,

        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            color: '#fff'
          },
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          },
          data: ['4-11', '4-12', '4-13', '4-14', '4-15', '4-16', '4-17']
        },
        yAxis: {
          axisLabel: {
            color: '#fff'
          },
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          },
          type: 'value'
        },
        series: [{
            name: '人员闯入',
            type: 'line',
            stack: '总量',
            data: [0, 0, 0, 1, 0, 0, 0]
          },
          {
            name: '氧气浓度过低',
            type: 'line',
            stack: '总量',
            data: [0, 0, 0, 0, 0, 0, 1]
          },
          {
            name: '天然气泄漏',
            type: 'line',
            stack: '总量',
            data: [0, 1, 0, 1, 0, 0, 1]
          }
        ]
      }
      this.trend_chart.setOption(option)
    },
    setRateOption() {
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: "{d}%"
        },
        legend: {
          orient: 'vertical',
          x: 'right',
          textStyle: {
            color: '#fff'
          },
          data: ['人员闯入', '氧气浓度过低', '天然气泄漏']
        },
        series: [{
          type: 'pie',
          radius: ['60%', '80%'],
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
            { value: 2, name: '人员闯入' },
            { value: 3, name: '氧气浓度过低' },
            { value: 1, name: '天然气泄漏' }
          ]
        }]
      }
      this.rate_chart.setOption(option)
    }
  }

}

</script>
<style scoped>
.top-box {
  width: 100%;
  height: 20%;
}

.top-box>ul,
.top-box>div {
  width: 50%;
  height: 100%;
  float: left;
}

.top-box>ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.top-box li {
  font-size: 16px;
}

.top-box li span {
  display: inline-block;
  margin-left: 18px;
  font-size: 30px;
  color: #90DFE4;
}

.middle-box {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  width: 100%;
  height: 50%;
}

.bottom-box {
  width: 100%;
  height: 30%;
}

</style>
