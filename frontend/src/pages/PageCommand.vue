<template>
  <div>
    <section>
      <header>应急专家</header>
      <section>
        <ul v-for="i in 10">
          <li>王路</li>
          <li>13571151622</li>
        </ul>
      </section>
    </section>
     <section>
      <header>应急预案</header>
      <section>
        <ul v-for="i in 10">
          <li>{{i}}.确定火灾位置</li>
          <li><input type="checkbox"></li>
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
     <section>
      <header>
      	<i class=""></i>
      </header>
      <section>
        <ul v-for="i in 10">
          <li>王路</li>
          <li>13571151622</li>
        </ul>
      </section>
    </section>
  </div>
</template>
<script>
export default {

}

</script>
<style scoped>


</style>
