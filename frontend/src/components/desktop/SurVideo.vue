<template>
  <section>
    <!-- <video :src="'http://localhost:8088/lims/api/index.php/files/' + i + '.mp4'"
  	autoplay loop v-for="i in 4"></video> -->
    <div v-for="i in 4">
      <img :src="'http://61.83.161.2:10000/mjpeg.cgi?channel='+i+'&user=guest&password=guest&time=' + dt" @dblclick="fullScreen">
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      dt: (new Date()).getTime()
    }
  },
  mounted() {
    // window.setInterval(() => {
    //   this.dt = (new Date()).getTime()
    // }, 500)
  },
  methods: {
    fullScreen(e) {
      e.target.webkitRequestFullscreen()
    }
  }
}

</script>
<style scoped>
div {
  display: inline-block;
  height: calc(50% - 5px);
  width: calc(50% - 5px);
}

div:nth-child(odd) {
  margin-right: 5px;
}

div img {
  height: 100%;
  width: 100%;
}

div img:hover {
  cursor: pointer;
}

</style>
