<template>
  <div class="desktop">
    <div class="left-part">
      <section class="box">
        <header>GIS全览</header>
        <Gis :baseInfos="baseInfos" :moveFlg="moveFlg" @locate-change = "onLocatechange"></Gis>
      </section>
      <section class="box">
        <header>3D漫游展示</header>
        <ThreeWander :locatePercent="locatePercent" @move-flg-change="onMoveFlgChange"></ThreeWander>
      </section>
      <section class="box">
        <header>视频监控</header>
        <SurVideo :imgSrcs="imgSrcs"></SurVideo>
      </section>
      <section class="box">
        <header>事件统计</header>
        <EventLog :baseInfos="baseInfos"></EventLog>
      </section>
    </div>
    <div class="right-part">
      <section class="box">
        <header>基本信息</header>
        <BaseInfo :baseInfos="baseInfos"></BaseInfo>
      </section>
      <section class="box">
        <header>入廊管线</header>
        <TunnelWire :baseInfos="baseInfos"></TunnelWire>
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
import MapLine from '../components/desktop/MapLine'
import SurVideo from '../components/desktop/SurVideo'
import DeviceFault from '../components/desktop/DeviceFault'
import TunnelWire from '../components/desktop/TunnelWire'
import EventLog from '../components/desktop/EventLog'
export default {
  components: { ThreeWander, BaseInfo, Gis, DeviceFault, TunnelWire, EventLog, MapLine, SurVideo },
  data() {
    return {
      baseInfos: [],
      imgSrcs: [],
      moveFlg: false,
      locatePercent : 0,
    }
  },
  created() {
    this.baseInfos = BASE_INFOS
    for (let i = 1; i < 5; i++) {
      this.imgSrcs.push('http://61.83.161.2:10000/mjpeg.cgi?channel=' + i + '&user=guest&password=guest&time=1524039431169'
       )
    }
  },
  methods:{
    onLocatechange(val){
      this.locatePercent = val
    },
    onMoveFlgChange(val){
      this.moveFlg = val
    }
  }
}

</script>
<style scoped>
.desktop {
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.left-part {
  float: left;
  width: 100%;
  height: 100%;
}

.right-part {
  position: absolute;
  left: calc(100% - 1px);

  right: -30%;
  height: 100%;
  transition: all 0.6s ease 0s;
  z-index: 99;
}

.right-part:hover {
  left: 70%;
  right: 0;
}

.box {
  border: 1px solid #3864A3;
  border-radius: 5px;
  font-size: 16px;
  background-color: #0A2C4F;
  margin-bottom: 5px;
  margin-right: 5px;
  float: left;
}

.left-part .box:nth-child(1),
.left-part .box:nth-child(2) {
  width: calc(50% - 5px);
  height: calc(60% - 5px);
}

.left-part .box:nth-child(3),
.left-part .box:nth-child(4) {
  width: calc(50% - 5px);
  height: calc(40% - 5px);
}

.right-part .box {
  width: 100%;
}

.right-part .box:nth-child(1) {
  height: 230px;
}

.right-part .box:nth-child(2) {
  height: calc(50% - 100px);
}

.right-part .box:nth-child(3) {
  height: calc(50% - 150px);
}

.box>header {
  position: relative;
  text-align: left;
  height: 30px;
  line-height: 30px;
  padding-left: 5px;
}

.box>section {
  position: absolute;
  top: 32px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}

</style>
