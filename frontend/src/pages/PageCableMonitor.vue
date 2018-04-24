<template>
  <div class="cable-monitor">
    <section class="box left-box">
      <header>导航</header>
      <ZlTree :data="nav" @node-click="onNodeClick"></ZlTree>
    </section>
    <section class="box tab-box">
      <header>
        <ul>
          <li v-for="(item,index) in cableData">
            <a :class="{selected : index == currentPage}" @click="currentPage=index"><span>{{item.label}}</span></a>
          </li>
        </ul>
      </header>
      <section ref="wrapper" :style="{'padding-left': padding_left + 'px'}">
        <template v-if="cableData && cableData.length > 0">
          <section class="content-box" v-for="item in cableData[currentPage].items">
            <header>
              {{item.label}}
            </header>
            <section>
              <ul>
                <li v-for="data in item.data">
                  <span>{{data.label}}：</span>
                  <span><strong>{{data.val}}</strong>{{data.unit}}</span>
                </li>
              </ul>
            </section>
          </section>
        </template>
      </section>
    </section>
  </div>
</template>
<script>
import ZlTree from '../components/ZlTree'
import {cableData} from '../json/cable'
export default {
  components: { ZlTree },
  data() {
    return {
      padding_left: 0,
      currentPage: 0,
      nav: [{
        label: '东湖高新区',
        children: [{
          label: '光谷一路',
          children: [{
            label: '1#廊段'
          }, {
            label: '2#廊段'
          }]
        }, {
          label: '光谷二路',
          children: [{
            label: '1#廊段'
          }, {
            label: '2#廊段'
          }]
        }]
      }],
      cableData: []
    }
  },
  mounted() {
    this.cableData = cableData
    this.padding_left = ((this.$refs["wrapper"].clientWidth + 5) % 235) / 2
    window.addEventListener('resize', () => {
      this.padding_left = ((this.$refs["wrapper"].clientWidth + 5) % 235) / 2
    })
  },
  computed: {

  },
  methods: {
    onNodeClick(item) {
      this.cableData = require('../json/cable').cableData
      this.currentPage = 0
    }
  }
}

</script>
<style scoped>
.cable-monitor {
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
}

.box {
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






/*.tab-box>header a {
  height: 100%;
  display: inline-block;
  padding: 0 20px;
  background-color: #75A7C4;
  border-radius: 5px 5px 0 0;
}

.tab-box>header a:hover,
.tab-box>header a.selected {
  background-color: #CFDEE9;
  color:#3C3C3C;
}
*/

.tab-box>header li {
  float: left;
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

.content-box {
  position: relative;
  font-size: 16px;
  background-color: #38648D;
  margin-bottom: 5px;
  margin-right: 5px;
  width: 230px;
  padding-bottom: 10px;
  border-radius: 5px;
}


.content-box>header {
  position: relative;
  text-align: center;
  height: 30px;
  line-height: 30px;
}

.content-box li {
  display: block;
  padding: 5px;
  font-size: 14px;
}

.content-box li span:first-child {
  color: #ccc;
  display: inline-block;
  width: 60%;
  text-align: right;
}

.content-box li span:last-child {
  color: #90DFE4;
}

.content-box li strong {
  font-size: 18px;
}

</style>
