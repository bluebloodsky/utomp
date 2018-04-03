<template>
  <section ref="wrapper"></section>
</template>
<script>
export default {
  props: ['baseInfos'],
  data() {
    return {

    }
  },
  mounted() {
    var map = new BMap.Map(this.$refs['wrapper'])
    // 创建地图实例  
    var point = new BMap.Point(114.49639, 30.474205)
    // 创建点坐标  
    map.centerAndZoom(point, 13)
    map.setMapStyle({ style: "light" })
    map.enableScrollWheelZoom(true)
    this.baseInfos.map(baseInfo => {
      var points = []
      baseInfo.gis.map(point => {
        points.push(new BMap.Point(point[0], point[1]))
      })
      var polyline = new BMap.Polyline(points, { strokeColor: "red", strokeWeight: 5, strokeOpacity: 0.8 })
      polyline.addEventListener("click", e => {
        alert(baseInfo.name_cn + ":" + e.point.lng + "," + e.point.lat)
      })
      map.addOverlay(polyline);
    })
  }
}

</script>
<style>

</style>
