<template>
  <ul>
    <li v-for="item in data">
      <a @click="onNodeClick(item)" :class="{selected:item==currentNode}">
        <i class="iconfont" :class="item.children?!item.collapse?'icon-nodeexpand':'icon-nodecollapse':'icon-document'"></i>
        <span>{{item.label}}</span>
      </a>
      <ZlTreeNode :data="item.children" :currentNode="currentNode" @node-click="onNodeClick" v-if="item.children&&!item.collapse"></ZlTreeNode>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'ZlTreeNode',
  props: {
    data: {
      type: Array,
      default: []
    },
    currentNode: {
      type: Object
    }
  },
  methods: {
    onNodeClick(item) {
      if (item.children) {
        this.$set(item, 'collapse', item.collapse ? false : true)
      } else {
        this.$emit('node-click', item)
      }
    }
  }
}

</script>
<style scoped>
i,
span {
  font-size: 16px;
}

li ul {
  padding: 0 0 0 15px;
}

a {
  display: block;
  padding: 5px;
}

a:hover,
a.selected {
  background-color: #306C95;
}

</style>
