<template>
  <section>
    <ZlTreeNode :data="data" :currentNode="currentNode" @node-click="onNodeClick"></ZlTreeNode>
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
    onNodeClick(item) {
      this.currentNode = item
      this.$emit('node-click', item)
    }
  }
}

</script>
<style scoped>
</style>
