<template>
  <section>
    <ul>
      <li v-for="i in 10">
        电缆
      </li>
    </ul>
  </section>
</template>
<script>


</script>
<style scoped>
li {
  position: relative;
  height: 30px;
  line-height: 30px;
  background-color: #0274AA;
  margin: 10px 10px 0 10px;
  padding-left: 10px;
  font-size: 14px;
  border-radius: 5px;
}

li:before {
  content: '';
  position: absolute;
  left: 80px;
  right: 30px;
  background-color: #fff;
  height: 5px;
  margin-top: 15px;
  transform: translateY(-50%);
  border-radius: 5px;
}

</style>
