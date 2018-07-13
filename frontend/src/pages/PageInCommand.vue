<template>
  <div class="fire-handle">
    <div class="box left-box">
      <section>
        <header>入廊人员</header>
        <section>
          <ul v-for=" person in persons">
            <li>{{person.name}}</li>
            <li>{{person.tel}}</li>
          </ul>
        </section>
      </section>
      <section>
        <header>应急规范操作</header>
        <section>
          <ul v-for="(plan,i) in plans">
            <li>{{i+1}}.{{plan}}</li>
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
          <ul v-for="i in 1">
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
        <section id="view">
          <img src="../assets/intunnel.png" @dblclick="fullScreen">
        </section>
      </section>
      <section>
        <img src="http://61.83.161.2:10000/mjpeg.cgi?channel=1&user=guest&password=guest&time=1524039431169" @dblclick="fullScreen">
      </section>
      <section>
        <img src="http://61.83.161.2:10000/mjpeg.cgi?channel=4&user=guest&password=guest&time=1524039431169" @dblclick="fullScreen">
      </section>
    </div>
    <div class="box bottom-box">
      <section>
        <header>风机状态监控</header>
        <section>
          <div class="pic-text">
            <i class="iconfont icon-fan"></i>
            <ul>
              <li>运行状态：
                <input type="" name="" value="关闭">
              </li>
              <li>运行模式：
                <input type="" name="" value="远程">
              </li>
              <li>供电状态：
                <input type="" name="" value="正常">
              </li>
            </ul>
          </div>
          <div class="btns">
            <button>开始</button>
            <button>关闭</button>
          </div>
        </section>
      </section>
      <section>
        <header>井盖状态监控</header>
        <section>
          <div class="pic-text">
            <i class="iconfont icon-manhole-cover"></i>
            <ul>
              <li>运行状态：
                <input type="" name="" value="关闭">
              </li>
              <li>运行模式：
                <input type="" name="" value="远程">
              </li>
              <li>供电状态：
                <input type="" name="" value="正常">
              </li>
            </ul>
          </div>
          <div class="btns">
            <button>开始</button>
            <button>关闭</button>
          </div>
        </section>
      </section>
      <section>
        <header>预警广播</header>
        <section>
          <div class="pic-text">
            <i class="iconfont icon-systemprompt"></i> <span>当前无动态信息</span>
          </div>
        </section>
      </section>
      <section>
        <header>提示牌</header>
        <section>
          <div class="pic-text">
            <i class="iconfont icon-bulletinboard"></i> <span> 当前无动态信息</span>
          </div>
        </section>
      </section>
      </section>
    </div>
  </div>
</template>
<script>
import FireGis from '../components/firehandle/FireGis'
import { commandInfo } from '@/json/command'
export default {
  components: { FireGis },
  data() {
    return {
      persons: [],
      plans:[]
    }
  },
  mounted() {
    this.persons = commandInfo.persons
    this.plans = commandInfo.in_plans
    // openGraph("view", "/test.gra")
  },
  methods: {
    fullScreen(e) {
      e.target.webkitRequestFullscreen()
    }
  }
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
  bottom: calc(40% + 5px);
  left: calc(25% + 25px);
  right: 20px;
}

.bottom-box {
  position: absolute;
  top: 60%;
  bottom: 20px;
  left: calc(25% + 25px);
  right: 20px;
  display: flex;
  justify-content: space-between;
}

.left-box ul {
  width: 100%;
  height: 32px;
  line-height: 32px;
  display: flex;
  justify-content: space-around;
}

.left-box li {
  width: 40%;  
  text-align: left;
}

.left-box ul:nth-child(even) {
  background-color: #306C95;
}


.left-box>section:nth-child(1) {
  height: 20%;
}

.left-box>section:nth-child(2),
.left-box>section:nth-child(3) {
  height: calc(40% - 5px);
  margin-top: 5px;
}

.main-box>section:first-child {
  float: left;
  height: 100%;
  width: 60%;
  margin-right: 5px;
}

.main-box>section:nth-child(2),
.main-box>section:nth-child(3) {
  float: left;
  width: calc(40% - 5px);
}

.main-box>section:nth-child(2) {
  height: calc(50% - 5px);
  margin-bottom: 5px;
}

.main-box>section:nth-child(3) {
  height: 50%;
}

.main-box>section:first-child>header {
  display: flex;
  justify-content: space-around;
}


.bottom-box>section {
  width: calc(25% - 5px);
  height: 100%;
}

.bottom-box>section>section {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.pic-text {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pic-text li {
  margin-bottom: 5px;
}

.pic-text input {
  width: calc(100% - 80px);
}

.btns {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.bottom-box .iconfont {
  font-size: 60px
}

img {
  width: 100%;
  height: 100%;
}

img:hover {
  cursor: pointer;
}

img:-webkit-full-screen {
  width: auto;
  height: 100%;
  max-width: 100%;
}

</style>
