<template>
  <section>
    <ZlTreeNode :data="data" :currentNode="currentNode" @nodeclick="nodeClick"></ZlTreeNode>
  </section>
</template>
<script>
import ZlTreeNode from './ZlTreeNode'
export default {
  name: 'ZlTree',
  components: { ZlTreeNode },
  data() {
    return {
      currentNode: null
    }
  },
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  methods: {
    nodeClick(item) {
      this.currentNode = item
      this.$emit('nodeclick', item)
    }
  }
}

</script>
<style scoped>
</style>
