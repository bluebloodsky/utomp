<template>
  <section>
    <img :src="imgSrc" @dblclick="fullScreen" v-for="imgSrc in imgSrcs">
  </section>
</template>
<script>
export default {
  props: ['imgSrcs'],
  data() {
    return {
      dt: (new Date).getTime()
    }
  },
  mounted() {

  },
  methods: {
    fullScreen(e) {
      e.target.webkitRequestFullscreen()
    }
  }
}

</script>
<style scoped>
section {
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
