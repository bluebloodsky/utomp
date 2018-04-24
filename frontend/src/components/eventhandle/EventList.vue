<template>
  <section>
    <header>
      <div>
        <span>管廊 </span>
        <select>
          <option>光谷一路</option>
          <option>光谷二路</option>
          <option>光谷三路</option>
        </select>
      </div>
      <div>
        <span>告警时间 </span>
        <ZlDatePicker></ZlDatePicker>～
        <ZlDatePicker></ZlDatePicker>
      </div>
      <div>
        <button><i class="iconfont icon-search"></i> </button>
      </div>
    </header>
    <section>
      <ul>
        <li>告警编号</li>
        <li>告警位置</li>
        <li>告警内容</li>
        <li>告警时间</li>
        <li>告警状态</li>
        <li>快速处理</li>
      </ul>
      <ul v-for="i in 10">
        <li>60010</li>
        <li>光谷1路雨污舱0号分区</li>
        <li>人员闯入</li>
        <li>2018-04-18 11:27:37</li>
        <li>告警中</li>
        <li>
          <button type="text">
            立即派单
          </button>
          <button type="text">
            事后处理
          </button>
          <button type="text">
            忽略告警
          </button>
        </li>
      </ul>
    </section>
  </section>
</template>
<script>
import ZlDatePicker from '../ZlDatePicker'
export default {
  components: { ZlDatePicker },
}

</script>
<style scoped>
header{
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;
}
ul {
  height: 45px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 10px 10px 10px;
  background-color: #EAF1F7;
  color: #707070;
}

ul:not(:first-child):hover {
  background-color: #D0DEE9;
  /*cursor: pointer;*/
}

ul li {
  width: 10%;
}
ul li:last-child {
  width: 200px;
}

</style>
