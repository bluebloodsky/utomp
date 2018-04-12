<template>
  <ul>
    <li v-for="item in data">
      <a @click="nodeClick(item)">
        <i class="iconfont" :class="item.children?item.expand?'icon-nodeexpand':'icon-nodecollapse':'icon-document'"></i>
        <span>{{item.label}}</span>
      </a>
      <ZlTree :data="item.children" @nodeclick="nodeClick" v-if="item.children&&item.expand"></ZlTree>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'ZlTree',
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  methods: {
    nodeClick(item) {
      if (item.children) {
        this.$set(item, 'expand', item.expand ? false : true)
      } else {
        this.$emit('nodeclick', item)
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

a:hover {
  background-color: #5F1003;
}

</style>
