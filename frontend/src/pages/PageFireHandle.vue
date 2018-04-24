<template>
  <div class="fire-handle">
    <div class="box left-box">
      <section>
        <header>应急专家</header>
        <section>
          <ul v-for="i in 3">
            <li>王路</li>
            <li>13571151622</li>
          </ul>
        </section>
      </section>
      <section>
        <header>应急预案</header>
        <section>
          <ul v-for="i in 5">
            <li>{{i}}.确定火灾位置</li>
            <li>
              <input type="checkbox">
            </li>
          </ul>
        </section>
      </section>
      <section>
        <header>事件分析报告</header>
        <section>
          <ul>
            <li>时间</li>
            <li></li>
          </ul>
          <ul v-for="i in 2">
            <li>2018-04-17 14:59:23</li>
            <li>管廊A101段发生火灾</li>
          </ul>
        </section>
      </section>
    </div>
    <div class="box main-box">
      <section>
        <header>
          <a>
            <i class="iconfont icon-circle bad"></i>
            <span>火灾</span>
          </a>
          <a>
            <i class="iconfont icon-circle good"></i>
            <span>人员入侵</span>
          </a>
          <a>
            <i class="iconfont icon-circle good"></i>
            <span>浸水</span>
          </a>
        </header>
        <FireGis>
        </FireGis>
      </section>
      <section>
      </section>
      <section>
      </section>
    </div>
    <div class="box bottom-box">
      <section>
        <header>110报警中心</header>
        <section>
          <p>
            通话状态：等待接通
          </p>
          <p>
            信息报告：当前无信息动态
          </p>
        </section>
      </section>
      <section>
        <header>119报警中心</header>
        <section>
          <p>
            通话状态：等待接通
          </p>
          <p>
            信息报告：当前无信息动态
          </p>
        </section>
      </section>
      <section>
        <header>120报警中心</header>
        <section>
          <p>
            通话状态：等待接通
          </p>
          <p>
            信息报告：当前无信息动态
          </p>
        </section>
      </section>
      <section>
        <header>管廊单位</header>
        <section>
          <p>
            通话状态：等待接通
          </p>
          <p>
            信息报告：当前无信息动态
          </p>
        </section>
      </section>
    </div>
  </div>
</template>
<script>
import FireGis from '../components/firehandle/FireGis'

export default {
  components: { FireGis },

}

</script>
<style scoped>
.fire-handle {
  position: absolute;
  top: 80px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  background-color: #5987A9;
  padding: ;
  border-radius: 10px;
}

section {
  position: relative;
  background-color: #10406A;
}

section>header {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  text-align: center;
}

section>section {
  background-color: #38648D;
  position: absolute;
  top: 40px;
  left: 0;
  bottom: 0;
  right: 0;
}

section>ul {
  width: 100%;
  height: 32px;
  line-height: 32px;
}

section ul:nth-child(even) {
  background-color: #306C95;
}

li {
  float: left;
  width: 50%;
  text-align: center;
}

.left-box {
  position: absolute;
  top: 20px;
  bottom: 20px;
  left: 20px;
  width: 25%;
  right: auto;
}

.main-box {
  position: absolute;
  top: 20px;
  bottom: 40%;
  left: calc(25% + 25px);
  right: 20px;
}

.bottom-box {
  position: absolute;
  top: calc(60% + 5px);
  bottom: 20px;
  left: calc(25% + 25px);
  right: 20px;
  display: flex;
  justify-content: space-between;
}

.left-box>section:nth-child(1) {
  height: 20%;
}

.left-box>section:nth-child(2),
.left-box>section:nth-child(3) {
  height: calc(40% - 5px);
  margin-top: 5px;
}

.main-box>section {
  float: left;
  height: 50%;
  width: calc(40% - 10px);
}

.main-box>section::first-child>header {
  display: flex;
  justify-content: space-around;
}

.main-box>section:first-child {
  height: 100%;
  width: 60%;
  margin-right: 5px;
}



.bottom-box>section {
  width: calc(25% - 5px);
  height: 100%;
}

.bottom-box>section>section {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}

.bottom-box p {
  margin-bottom: 20px;
  font-size: 14px;
}

</style>
