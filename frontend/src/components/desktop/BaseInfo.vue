<template>
  <section ref="wrapper">
    <div class="baseInfo">
      <ul v-for="baseInfo in showInfos">
        <li>
          {{baseInfo.name_cn}}
        </li>
        <li>（{{baseInfo.manager}}）</li>
        <li>总长 <span><strong>{{baseInfo.tot_len}}</strong>km</span></li>
        <li>已运行 <span><strong>{{baseInfo.used_day}}</strong>天</span></li>
      </ul>
    </div>
    <nav>
      <a @click="cur_page = i" v-for="i in pageCount" :class="{selected:i==cur_page}"></a>
    </nav>
  </section>
</template>
<script type="text/javascript">
export default {
  props: ['baseInfos'],
  data() {
    return {
      info_count: 3,
      cur_page: 1,
      info_width: 120,
    }
  },
  computed: {
    pageCount() {
      return this.baseInfos && this.baseInfos.length ? Math.ceil(this.baseInfos.length / this.info_count) : 0
    },
    showInfos() {
      return this.baseInfos && this.baseInfos.length ? this.baseInfos.slice((this.cur_page - 1) * this.info_count, Math.min(this.cur_page * this.info_count), this.baseInfos.length) : []
    }
  },
  mounted() {
    this.info_count = this.$refs['wrapper'].clientWidth / this.info_width;
    window.setInterval(() => {
      if (++this.cur_page > this.pageCount) {
        this.cur_page = 1
      }
    }, 5000)
  }
}

</script>
<style scoped>
.baseInfo {
  position: relative;
  height: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.baseInfo ul {
  width: 33%;
  text-align: center;
}

.baseInfo li {
  display: block;
  padding: 5px;
  font-size: 14px;
  color: #77747D;
}

.baseInfo li:first-child {
  color: #fff;
}

.baseInfo span {
  color: #90DFE4;
}

.baseInfo strong {
  font-size: 18px;
}

nav {
  text-align: center;
  height: 10px;
  line-height: 10px;
}

nav a {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #fff;
  margin: 0 5px;
}

a.selected {
  background-color: #FFCE44;
}

</style>
