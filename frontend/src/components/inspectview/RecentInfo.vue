<template>
  <section>
    <header> 最近更新时间: {{dt}}</header>
    <section>
      <ul>
        <li>时间</li>
        <li>执行人员</li>
        <li>位置</li>
        <li>巡检结果</li>
      </ul>
      <ul v-for="i in 5">
        <li>2018-04-09</li>
        <li>王耀明</li>
        <li></li>
        <li>无异常</li>
      </ul>
    </section>
  </section>
</template>
<script>
export default {
  data() {
    return {
      dt: (new Date).format("yyyy/MM/dd , hh:mm"),
    }
  }
}

</script>
<style scoped>
header {
  height: 40px;
  font-size: 16px;
  background-color: #10406A;
  display: flex;
  justify-content: flex-start;
  padding-left: 15px;
}

section>section {
  position: absolute;
  top: 40px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: auto;
}

ul {
  height: 45px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 10px 10px 10px;
  background-color: #204E99;
}

ul:first-child {
  background-color: #BDBDC9;
  color: #4D5265;
  margin: 0  0 20px 0;
}


ul li {
  width: 15%;
}

ul li:last-child {
  width: 40%;
}

</style>
