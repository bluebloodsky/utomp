<template>
  <div class="sub-nav" ref="wrapper" :style="{'padding-left': padding_left + 'px'}">
    <router-link :to="sub_menu.url" v-for="sub_menu in items">
      <i class="iconfont" :class="sub_menu.icon"></i>
      <span>{{sub_menu.name_cn}}</span>
    </router-link>
  </div>
</template>
<script>
export default {
  props: ['items'],
  data() {
    return {
      padding_left: 0
    }
  },
  mounted() {
    if (!this.items || !this.items.length) {
      this.$router.push({ path: '/home/desktop' })
    }

    this.padding_left = ((this.$refs["wrapper"].clientWidth + 10) % 260) / 2
    window.addEventListener('resize', () => {
      this.padding_left = ((this.$refs["wrapper"].clientWidth + 10) % 260) / 2
    })
  }
}

</script>
<style scoped>
.sub-nav {
  margin-top: 50px;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  flex-wrap: wrap;
}

a {
  display: inline-block;
  height: 162px;
  line-height: 162px;
  background-color: #0088D2;
  margin: 0 10px 10px 0;
  width: 250px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-radius: 10px;
}

a:hover {
  background-color: #B91C47;
}

i.iconfont {
  font-size: 50px;
}

span {
  vertical-align: top;
}

</style>
