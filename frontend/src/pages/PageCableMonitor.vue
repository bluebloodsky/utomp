<template>
  <div ref="wrapper" :style="{'padding-left': padding_left + 'px'}">
    <section class="box" v-for="i in 10">
      <header>
        光谷一路#1段
      </header>
      <section>
        <ul>
          <li>
            <span>电缆运行电流：</span>
            <span><strong>100</strong>mA</span>
          </li>
          <li>
            <span>电缆护层接地电流：</span>
            <span><strong>100</strong>mA</span>
          </li>
          <li>
            <span>电缆外壳温度：</span>
            <span><strong>100</strong>℃</span>
          </li>
          <li>
            <span>电缆局部放电：</span>
            <span><strong>100</strong>pC</span>
          </li>
        </ul>
      </section>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      padding_left: 0
    }
  },
  mounted() {
    this.padding_left = ((this.$refs["wrapper"].clientWidth + 5) % 235) / 2
    window.addEventListener('resize', () => {
      this.padding_left = ((this.$refs["wrapper"].clientWidth + 5) % 235) / 2
    })
  }
}

</script>
<style scoped>
div {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin: 30px 5px;
}

.box {
  border: 1px solid #666;
  font-size: 16px;
  background-color: #311B28;
  margin-bottom: 5px;
  margin-right: 5px;
  width: 230px;
  height: 180px;
}

li {
  display: block;
  padding: 5px;
  font-size: 14px;
}

li span:first-child {
  color: #77747D;
  display: inline-block;
  width: 60%;
  text-align: right;
}

li span:last-child {
  color: #90DFE4;
}

li strong {
  font-size: 18px;
}

</style>
