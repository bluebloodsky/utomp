<template>
  <section ref="wrapper">
    <ul ref="content" :style="{top:top + 'px'}">
      <li v-for="event in events" :class="event.event_level">
        {{event.event_time}} {{event.location}} | {{event.event_desc}}
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  props: ['baseInfos'],
  data() {
    return {
      top: 0
    }
  },
  computed: {
    events() {
      let _events = []
      this.baseInfos.map(baseInfo => {
        baseInfo.events.map(event => {
          _events.push({
            event_time: event.event_time.format('MM-dd hh:mm:ss'),
            event_desc: event.event_desc,
            event_level: event.event_level,
            location: baseInfo.name_cn
          })
        })
      })
      return _events.sort((a, b) => a.event_time > b.event_time ? 1 : -1)
    }
  },
  mounted() {
    var wrapperHeight = this.$refs["wrapper"].clientHeight
    var contentHeight = this.$refs["content"].clientHeight
    if (contentHeight > wrapperHeight) {
      window.setInterval(() => {
        if (this.top == wrapperHeight - contentHeight) {
          this.top = 0
        } else if(this.top == 0) {
          this.top = wrapperHeight - contentHeight
        }
      }, 5000)
    }
  }
}

</script>
<style scoped>
section {
  overflow: hidden;
}

ul {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;  
  transition: top 3s ease 0s;
}

li {
  padding: 10px 5px;
  font-size: 14px;
}

li:nth-child(odd) {
  background-color: #372A44;
}

.alarm {
  color: #EA7E9E;
}

.info {
  color: #8F8C9F;
}

</style>
