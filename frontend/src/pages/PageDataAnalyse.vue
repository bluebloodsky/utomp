<template>
  <div class="data-analyse">
    <section class="box top-box">
      <header>趋势分析</header>
      <section>
      </section>
    </section>
    <section class="box bottom-box">
      <header>数据列表</header>
      <section>
      </section>
    </section>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {}
  },
  mounted() {

  },
  methods: {

  }
}

</script>
<style scoped>
.data-analyse {
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

.top-box {
  position: absolute;
  top: 20px;
  bottom: calc(50% + 10px);
  left: 20px;
  right: 20px;
}

.bottom-box {
  position: absolute;
  top: 50%;
  bottom: 20px;
  left: 20px;
  right: 20px;
}

</style>
