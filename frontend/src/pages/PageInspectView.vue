<template>
  <div class="inpect-view">
    <section class="box main-box">
      <nav>
        <ul>
          <li v-for="(page,index) in pages"><a @click="currentPage=index" :class="{select:currentPage==index}">{{page}}</a></li>
        </ul>
      </nav>
      <TaskPosition v-if="currentPage==0"></TaskPosition>
      <TaskDevice v-else-if="currentPage==1"></TaskDevice>
    </section>
    <RecentInfo class="box right-box">
    </RecentInfo>
  </div>
</template>
<script>
import TaskPosition from '../components/inspectview/TaskPosition'
import RecentInfo from '../components/inspectview/RecentInfo'
import TaskDevice from '../components/inspectview/TaskDevice'
export default {
  components: { TaskPosition ,TaskDevice,RecentInfo },
  data() {
    return {
      pages: ['任务位置', '任务设备', '人员班组'],
      currentPage: 0
    }
  }
}

</script>
<style scoped>
.inpect-view {
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.main-box {
  position: absolute;
  left: 0;
  top: 0;
  right: 40%;
  bottom: 0;
  float: left;
  background-color: #C5C5CF;
}


.main-box>nav {
  width: 32px;
  background-color: #311B28;
  height: 100%;
}

.main-box nav a {
  display: inline-block;
  padding: 10px 8px;
  margin: 1px;
  font-size: 14px;
}

.main-box nav a:hover {
  background-color: #5F1003;
}

.main-box nav a.select {
  background-color: #5B1000;
}

.main-box>section {
  position: absolute;
  left: 32px;
  right: 0;
  top: 0;
  bottom: 0;
}


.right-box {
  position: absolute;
  left: 60%;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #BABAC6;
}
</style>
