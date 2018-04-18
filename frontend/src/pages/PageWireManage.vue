<template>
  <div class="wire-manage">
    <section class="box left-box">
      <header>导航</header>
      <ZlTree :data="nav" @nodeclick="nodeClick"></ZlTree>
    </section>
    <section class="box main-box">
      <header>管线类别</header>
      <Tunnel></Tunnel>
    </section>
    <section class="box right-box">
      <header>管线类别</header>
      <Wire></Wire>
    </section>
  </div>
</template>
<script>
import ZlTree from '../components/ZlTree'
import Tunnel from '../components/wiremanage/Tunnel'
import Wire from '../components/wiremanage/Wire'
export default {
  components: { ZlTree, Tunnel, Wire },
  data() {
    return {
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
  methods: {
    nodeClick(data) {
      console.log(data)
    }
  }
}

</script>
<style scoped>
.wire-manage {
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
}

.box {
  height: 100%;
  background-color: #0B3567;
  float: left;
  border: 1px solid #3F6AA1;
  border-radius: 5px
}

.left-box {
  width: 15%;
  margin-right: 2px;
}

.main-box {
  width: 60%;
  margin-right: 2px;
}

.right-box {
  width: calc(25% - 6px);
}

.box>header {
  height: 36px;
  font-size: 16px;
  /*color: #64D0F4;*/
}

.box>section {
  position: absolute;
  top: 36px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}

</style>
