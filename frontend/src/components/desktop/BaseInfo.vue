<template>
  <section ref="wrapper">
    <div class="baseInfo">
      <ul v-for="(baseInfo,n) in showInfos">
        <li>
          {{baseInfo.name_cn}}
        </li>
        <li>（{{baseInfo.manager}}）</li>
        <li>总长 <span><strong>{{baseInfo.tot_len}}</strong>km</span></li>
        <li>已运行 <span><strong>{{baseInfo.used_day}}</strong>天</span></li>
      </ul>
    </div>
    <nav>
      <ul>
        <li v-for="i in pageCount">
          <a @click="cur_page = i">{{i}}</a>
        </li>
      </ul>
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
      info_width:120,
    }
  },
  mounted(){
  	this.info_count = this.$refs['wrapper'].clientWidth / this.info_width;
  },
  computed: {
    pageCount() {
      return this.baseInfos && this.baseInfos.length ? Math.ceil(this.baseInfos.length / this.info_count) : 0
    },
    showInfos() {
      return this.baseInfos && this.baseInfos.length ? this.baseInfos.slice((this.cur_page - 1) * this.info_count, Math.min(this.cur_page * this.info_count), this.baseInfos.length) : []
    }
  }
}

</script>
<style scoped>
.baseInfo {
  position: relative;
  height: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
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

nav{
  text-align: center;
}
</style>
