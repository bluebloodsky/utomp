<template>
  <div class="event-handle">
    <EventList class="box left-box"></EventList>
    <EventView class="box right-box">
    </EventView>
  </div>
</template>
<script>
import ZlDatePicker from '../components/ZlDatePicker'
import EventList from '../components/eventhandle/EventList'
import EventView from '../components/eventhandle/EventView'
export default {
  components: { EventList, ZlDatePicker, EventView }
}

</script>
<style scoped>
.event-handle {
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background-color: #5987A9;
}

.left-box {
  position: absolute;
  left: 0;
  top: 0;
  right: 30%;
  bottom: 0;
  float: left;
  background-color: #38648D;
}

.right-box {
  position: absolute;
  left: calc(70% + 3px);
  top: 0;
  right: 0;
  bottom: 0;
  float: left;
  background-color: #38648D;
}

</style>
