<template>
  <div>
    <nav>
      <ZlTree :data="nav"></ZlTree>
    </nav>
  </div>
</template>
<script>
import ZlTree from '../components/ZlTree'
export default {
  components: { ZlTree },
  data() {
    return {
      nav: [{
        label: '光谷一路',
        children: [{
          label: '电力舱',
          children: [{
            label: '电力舱1'
          }, {
            label: '综合舱1'
          }]
        }, {
          label: '综合舱'
        }]
      }, {
        label: '光谷一路',
        children: [{
          label: '电力舱'
        }, {
          label: '综合舱'
        }]
      }]
    }
  }
}

</script>
<style scoped>


</style>
