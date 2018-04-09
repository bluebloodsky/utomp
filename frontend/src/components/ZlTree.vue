<template>
  <ul>
    <li v-for="item in data">
      {{item.label}}
      <ZlTree :data="item.children" v-if="item.children"></ZlTree>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'ZlTree',
  props: {
    data: {
      type: Array,
    }
  }
}

</script>
<style scoped>
li li{
	padding-left: 15px;
}
</style>
