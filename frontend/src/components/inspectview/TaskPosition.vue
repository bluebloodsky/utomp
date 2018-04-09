<template>
  <section>
    <header>
      <div>
        <span>任务总数：<strong>10</strong></span>
        <span>执行中：<strong>0</strong></span>
        <span>已执行：<strong>0</strong></span>
      </div>
      <div>
        <input>
        <button>高级筛选</button>
      </div>
    </header>
    <section>
      <!--       <table>
        <thead>
          <tr>
            <th>任务计划</th>
            <th>位置</th>
            <th>巡检方式</th>
            <th>频次</th>
            <th>执行班组/人</th>
            <th>上报异常</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 10">
            <td><span>管廊雨污舱氧气传感器巡检</span></td>
            <td></td>
            <td>人工步行</td>
            <td>日检</td>
            <td>/</td>
            <td>0</td>
          </tr>
        </tbody>
      </table> -->
      <ul>
        <li>任务计划</li>
        <li>位置</li>
        <li>巡检方式</li>
        <li>频次</li>
        <li>执行班组/人</li>
        <li>上报异常</li>
      </ul>
      <ul v-for="i in 10">
        <li>管廊雨污舱氧气传感器巡检</li>
        <li></li>
        <li>人工步行</li>
        <li>日检</li>
        <li>/</li>
        <li>0</li>
      </ul>
    </section>
  </section>
</template>
<script>
export default {

}

</script>
<style scoped>
header {
  height: 40px;
  font-size: 14px;
}

header span {
  margin-right: 30px;
  color: #353A4D;
}

header strong {
  color: #869AA5;
}

section>section {
  position: absolute;
  top: 40px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: auto;
}


/*table {
  border: none;
  width: 100%;
  border-collapse: collapse;
}

thead tr {
  height: 45px;
  color: #4D5265;
  background-color: #C9D1DE;
}

tbody tr {
  height: 45px;
  background-color: #DADBDF;
  color: #A4A5AA;
  text-align: center;
}

tbody tr:hover {
  background-color: #D3D1C4;
  cursor: pointer;
}*/

ul {
  height: 45px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 10px 10px 10px;
  background-color: #DADBDF;
  color: #707070;
}

ul:not(:first-child):hover {
  background-color: #D3D1C4;
  cursor: pointer;
}

ul:first-child {
  color: #4D5265;
  background-color: #CACAD4;
  margin: 0 0 20px 0;
}

ul li {
  width: 10%;
}

ul li:first-child {
  width: 30%;
  padding: 5px 10px;
}

ul:not(:first-child) li:first-child {
  background-color: #9DA4B4;
  color: #E5E9F4;
}
</style>
