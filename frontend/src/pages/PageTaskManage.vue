<template>
  <div class="task-manage">
    <section class="box left-box">
      <header>
        <input>
        <button>高级筛选</button>
        <button>新建任务</button>
      </header>
      <section>
        <ul>
          <li>任务计划</li>
          <li>频次</li>
          <li>状态</li>
        </ul>
        <ul v-for="i in 10">
          <li>光谷一路电力舱巡检</li>
          <li>日检</li>
          <li>已分配</li>
        </ul>
      </section>
    </section>
    <section class="box right-box">
      <header>
        <h2>建设大道电力舱巡检</h2>
        <div>
          <span>任务参考用时 <strong>4h</strong></span>
          <span>巡检方式 <strong>人工步行</strong></span>
          <span>频次 <strong>日检</strong></span>
        </div>
        <div>
          <button>任务分配</button>
          <button>编辑任务</button>
          <button>删除任务</button>
        </div>
      </header>
      <section>
        项目清单
      </section>
    </section>
  </div>
</template>
<script>
export default {

}

</script>
<style scoped>
.task-manage {
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  color: #606374;
}

.left-box {
  position: absolute;
  left: 0;
  top: 0;
  right: 70%;
  bottom: 0;
  float: left;
  background-color: #C6CFD8;
}

.left-box header {
  height: 60px;
  background-color: #C1C9D6;
}

.left-box header input {
  width: 60%;
  height: 22px;
  background-color: #f0f0f0;
  border: 2px solid #B8C2CC;
  padding-left: 5px;
}

.left-box ul {
  height: 45px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  color: #707070;
}

.left-box ul:first-child {
  color: #4D5265;
  background-color: #C2CAD5;
  pointer-events: none;
}

.left-box ul:nth-child(even) {
  background-color: #CFD8DF
}

.left-box ul:not(:first-child):hover {
  cursor: pointer;
  background-color: #D3D1C4;
}

.right-box {
  position: absolute;
  left: 30%;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #BABDCC;
}

.right-box>header {
  height: 60px;
  background-color: #B6B9C8;
}

.right-box>header span {
  margin-right: 20px;
}

.right-box>header strong {
  color: #8C6A60;
}
.right-box>section{
	margin:15px 10px;
	background-color: #C7CBD4;
	padding: 15px;
	font-size: 18px;
}
</style>
