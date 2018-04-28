<template>
  <section class="body-monitor">
    <section class="box left-box">
      <header>导航</header>
      <ZlTree :data="nav" @node-click="onNodeClick"></ZlTree>
    </section>
    <section class="box main-box">
      <img src="../assets/body.png" width="100%" height="100%">
    </section>
  </section>
</template>
<script>
import ZlTree from '../components/ZlTree'
export default {
  components: { ZlTree },
  data() {
    return {
      nav: [{
        label: '东湖高新区',
        children: [{
          label: '光谷一路',
          children: [{
            label: '1#廊段',
            defaultSelected: true
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
      }]
    }
  },
  methods: {
    onNodeClick(node) {

    }
  }
}

</script>
<style scoped>
.body-monitor {
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
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
  width: calc(85% - 4px);
}

.box>header {
  height: 36px;
  font-size: 16px;
  padding-left: 5px;
  line-height: 36px;
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
