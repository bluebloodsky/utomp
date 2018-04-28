<template>
  <section ref="container">
  </section>
</template>
<script>
import { BASE_INFOS } from '@/json/desktop'
export default {
  mounted() {
    var map = new BMap.Map(this.$refs['container'], {
      mapType: BMAP_HYBRID_MAP
    })
    // 创建地图实例  
    var point = new BMap.Point(114.49639, 30.474205)
    // 创建点坐标  
    map.centerAndZoom(point, 13)
    map.setMapStyle({ style: "light" })
    map.enableScrollWheelZoom(true)

    BASE_INFOS.map(baseInfo => {
      var points = []
      baseInfo.gis.map(point => {
        points.push(new BMap.Point(point[0], point[1]))
      })
      var polyline = new BMap.Polyline(points, { strokeColor: "#10FD0F", strokeWeight: 8, strokeOpacity: 0.8 })
      map.addOverlay(polyline);

      polyline.addEventListener("click", e => {
        console.log(e.point.lng, e.point.lat)
      })
    })

    function addMarker(point) { // 创建图标对象   
      var myIcon = new BMap.Icon(require("@/assets/fire.png"), new BMap.Size(23, 25), {
        // 指定定位位置。   
        // 当标注显示在地图上时，其所指向的地理位置距离图标左上    
        // 角各偏移10像素和25像素。您可以看到在本例中该位置即是   
        // 图标中央下端的尖角位置。    
        anchor: new BMap.Size(10, 25),
        // 设置图片偏移。   
        // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您   
        // 需要指定大图的偏移位置，此做法与css sprites技术类似。    
        imageOffset: new BMap.Size(0, 0) // 设置图片偏移    
      });
      // 创建标注对象并添加到地图   
      var marker = new BMap.Marker(point, { icon: myIcon });
      map.addOverlay(marker);
    }

    {
      var point = new BMap.Point(114.448465, 30.476026)
      addMarker(point)
    }

  }
}

</script>
<style scoped>
section {
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
}

</style>
