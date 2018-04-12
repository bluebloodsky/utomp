<template>
  <section>
    <!-- <video :src="'http://localhost:8088/lims/api/index.php/files/' + i + '.mp4'"
  	autoplay loop v-for="i in 4"></video> -->
      <img :src="'http://61.83.161.2:10000/mjpeg.cgi?channel='+i+'&user=guest&password=guest&time=' + dt" @dblclick="fullScreen"  v-for="i in 4">
  </section>
</template>
<script>
export default {
  data() {
    return {
      dt: (new Date).getTime()
    }
  },
  mounted() {
    // window.setInterval(() => {
    //   this.dt = (new Date).getTime()
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
section{
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
}
img {
  height: calc(50% - 5px);
  width: calc(50% - 5px);
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
