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
  mounted() {
    this.currentNode = this.findDefaultNode(this.data)
  },
  methods: {
    onNodeClick(item) {
      this.currentNode = item
      this.$emit('node-click', item)
    },
    findDefaultNode(nodes) {
      for (let node of nodes) {
        if (node.defaultSelected) {
          return node
        } else if (node.children) {
          let ret = this.findDefaultNode(node.children)
          if (ret) {
            return ret
          }
        }
      }
      return null
    }
  }
}

</script>
<style scoped>

</style>
