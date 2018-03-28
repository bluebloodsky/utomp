<template>
  <div class="desktop">
    <div class="left-part">
      <section class="box">
        <header>GIS全览</header>
      </section>
      <section class="box">
        <header>3D漫游展示</header>
        <ThreeWander></ThreeWander>
      </section>
      <section class="box">
        <header>管廊平面展示</header>
      </section>
      <section class="box">
        <header>入廊管线</header>
      </section>
    </div>
    <div class="right-part">
      <section class="box">
        <header>基本信息</header>
        <section>
          <div class="baseInfo">
            <ul v-for="(baseInfo,n) in baseInfos" :style="{ left : n * 33 + '%'}">
              <li>
                {{baseInfo.name_cn}}
              </li>
              <li>（{{baseInfo.manager}}）</li>
              <li>总长 <span><strong>{{baseInfo.tot_len}}</strong>km</span></li>
              <li>已运行 <span><strong>{{baseInfo.used_day}}</strong>天</span></li>
            </ul>
          </div>
          <nav>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </nav>
        </section>
      </section>
      <section class="box">
        <header>告警事件统计</header>
      </section>
      <section class="box">
        <header>设备故障统计</header>
      </section>
    </div>
  </div>
</template>
<script>
import { BASE_INFOS } from '@/json/desktop'
import ThreeWander from '../components/ThreeWander'
export default {
  components: { ThreeWander },
  data() {
    return {
      baseInfos: []
    }
  },
  created() {
    this.baseInfos = BASE_INFOS
  }
}

</script>
<style scoped>
.desktop {
  position: absolute;
  top: 80px;
  left: 5px;
  right: 5px;
  bottom: 5px;
}

.left-part {
  float: left;
  width: 70%;
  height: 100%;
}

.right-part {
  float: left;
  width: 30%;
  height: 100%;
}

.box {
  border: 1px solid #666;
  font-size: 16px;
  background-color: #311B28;
  margin-bottom: 5px;
  margin-right: 5px;
  float: left;
}

.left-part .box:nth-child(1),
.left-part .box:nth-child(2) {
  width: calc(50% - 5px);
  height: calc(60% - 5px);
  overflow: hidden;
}

.left-part .box:nth-child(3),
.left-part .box:nth-child(4) {
  width: calc(50% - 5px);
  height: calc(40% - 5px);
  overflow: hidden;
}

.right-part .box {
  width: 100%;
}

.right-part .box:nth-child(1) {
  height: calc(30% - 5px);
}

.right-part .box:nth-child(2) {
  height: calc(40% - 5px);
}

.right-part .box:nth-child(3) {
  height: calc(30% - 5px);
}

.baseInfo {
  position: relative;
  height: 80%;
  overflow: hidden;
}

.baseInfo ul {
  position: absolute;
  top: 0;
  bottom: 0;
}

.baseInfo li {
  display: block;
  padding: 5px;
  font-size: 14px;
  color: #77747D;
}

.baseInfo li:first-child {
  color: #fff;
}

.baseInfo span {
  color: #90DFE4;
}

.baseInfo strong {
  font-size: 18px;
}

nav ul {}

</style>
