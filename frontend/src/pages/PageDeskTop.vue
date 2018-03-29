<template>
  <div class="desktop">
    <div class="left-part">
      <section class="box">
        <header>GIS全览</header>
        <Gis></Gis>
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
        <TunnelWire :baseInfos="baseInfos"></TunnelWire>
      </section>
    </div>
    <div class="right-part">
      <section class="box">
        <header>基本信息</header>
        <BaseInfo :baseInfos="baseInfos"></BaseInfo>
      </section>
      <section class="box">
        <header>告警事件统计</header>
      </section>
      <section class="box">
        <header>设备故障统计</header>
        <DeviceFault></DeviceFault>
      </section>
    </div>
  </div>
</template>
<script>
import { BASE_INFOS } from '@/json/desktop'
import ThreeWander from '../components/desktop/ThreeWander'
import BaseInfo from '../components/desktop/BaseInfo'
import Gis from '../components/desktop/Gis'
import DeviceFault from '../components/desktop/DeviceFault'
import TunnelWire from '../components/desktop/TunnelWire'
export default {
  components: { ThreeWander, BaseInfo, Gis, DeviceFault ,TunnelWire },
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

</style>
