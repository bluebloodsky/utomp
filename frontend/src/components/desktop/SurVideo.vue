<template>
  <section>
  	<video :src="'http://localhost:8088/lims/api/index.php/files/' + i + '.mp4'"
  	autoplay loop v-for="i in 4"></video>
  </section>
</template>
<script>
export default {
}

</script>
<style scoped>
video{
	object-fit:fill;
	height: calc(50% - 5px);
	width: calc(50% - 5px);
}
video:nth-child(odd){
	margin-right: 5px;
}
</style>
