<template>
  <div class="gil-monitor">
    <section class="box left-box">
      <header>导航</header>
      <ZlTree :data="nav" @node-click="onNodeClick"></ZlTree>
    </section>
    <section class="box tab-box">
      <header>
        <a class="selected"><span>GIL状态示意图</span></a>
      </header>
      <section ref="wrapper" :style="{'padding-left': padding_left + 'px'}">
        <div v-for="i in 3" class="state-box">
          <ul>
            <li v-for="i in 6">
              <span>{{i}}号分区</span>
              <i class="iconfont icon-circle good" v-for="i in 4"></i>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </div>
</template>
<script>
import ZlTree from '../components/ZlTree'
export default {
  components: { ZlTree },
  data() {
    return {
      padding_left: 0,
      nav: [{
        label: '东湖高新区',
        children: [{
          label: '光谷一路'
        }, {
          label: '光谷二路'
        }]
      }]
    }
  },
  mounted() {
    this.padding_left = ((this.$refs["wrapper"].clientWidth + 5) % 235) / 2
    window.addEventListener('resize', () => {
      this.padding_left = ((this.$refs["wrapper"].clientWidth + 5) % 235) / 2
    })
  },
  methods: {
    onNodeClick(item) {

    }
  }
}

</script>
<style scoped>
.gil-monitor {
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
}

.left-box,
.tab-box {
  height: 100%;
  background-color: #0B3567;
  border: 1px solid #3F6AA1;
  border-radius: 5px;
}

.box>header {
  height: 36px;
  font-size: 16px;
  margin-left: 5px;
  line-height: 36px;
  overflow: hidden;
  position: relative;
}

.left-box {
  position: absolute;
  left: 0;
  width: 15%;
  margin-right: 2px;
}

.tab-box {
  position: absolute;
  left: auto;
  right: 2px;
  width: calc(85% - 4px);
}

.tab-box>header a {
  position: relative;
  height: 0;
  display: inline-block;
  padding: 0 30px;
  border-bottom: 36px solid #75A7C4;
  border-left: 18px solid transparent;
  border-right: 18px solid transparent;
  margin-left: -18px;
}

.tab-box>header a:hover,
.tab-box>header a.selected {
  border-bottom: 36px solid #CFDEE9;
  color: #3C3C3C;
  z-index: 999;
}

.tab-box>section {
  position: absolute;
  top: 36px;
  bottom: 0;
  left: 5px;
  right: 0;
  background-color: #CEDDE8;
  padding-top: 20px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
}

.top-box,
.bottom-box {
  width: 100%;
  border-top: 1px solid #C0C0C0;
  border-left: 1px solid #C0C0C0;
  border-right: 1px solid #C0C0C0;
  color: #3C3C3C;
}

.top-box {
  height: 100%;
}

.state-box {
  width: 100%;
  height: 30px;
  margin: 150px 5px 0 5px;
  position: relative;
}

.state-box ul {
  width: calc(100% -70px);
  background-color: #DAEAF7;
  height: 3px;
  margin-left: 70px;
  border-radius: 3px;
  /*border: 1px solid #CED4DF;*/
  display: flex;
  justify-content: space-around;
}

.state-box:before {
  position: absolute;
  top: -50%;
  transform: translateY(50%);
  left: 30px;
  color: #3C3C3C;
}
.state-box:nth-child(3n + 1):before {
  content: 'A相';
}

.state-box:nth-child(3n + 2):before {
  content: 'B相';
}

.state-box:nth-child(3n):before {
  content: 'C相';
}

.state-box:nth-child(3n) {
  margin-bottom: 100px;
}

.state-box:nth-child(3n) ul {
  background-color: #C55C60;
}


.state-box:nth-child(3n + 1) ul {
  background-color: #FEE179;
}

.state-box:nth-child(3n +2) ul {
  background-color: #4C9F95;
}


.state-box li {
  float: left;
  position: relative;
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.state-box li:after {
  content: '';
  background-color: #999;
  height: 100px;
  width: 3px;
  position: absolute;
  right: 0;
  bottom: -8px;
  left: auto;
  top: auto;
}

.state-box li span{
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  color: #3C3C3C;
}
.good {
  color: #28A646;
  font-size: 14px;
}

.bad {
  color: #C55C60;
  font-size: 14px;
}

.warn {
  color: #FEE179;
  font-size: 14px;
}

</style>
