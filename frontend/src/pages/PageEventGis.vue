<template>
  <section class="wrapper">
    <div ref="container" class="gis">
    </div>
    <div class="box list" :class="{'show-list':show_list_flg}">
      <header>
        <span>入廊人员信息</span>
        <button type="text" @click="show_list_flg=false"><i class="iconfont icon-close"></i></button>
      </header>
      <section>
        <ul>
          <li>入廊人员</li>
          <li>任务数</li>
        </ul>
        <ul v-for="person in persons">
          <li>{{person.name}}</li>
          <li>{{person.tasks}}</li>
        </ul>
      </section>
    </div>
  </section>
</template>
<script>
import { BASE_INFOS } from '@/json/desktop'
import { PERSONS } from '@/json/persons'
export default {
  data() {
    return {
      map: null,
      persons: [],
      show_list_flg: false
    }
  },
  mounted() {
    this.persons = PERSONS
    this.map = new BMap.Map(this.$refs['container'], {
      mapType: BMAP_HYBRID_MAP
    })
    // 创建地图实例  
    var point = new BMap.Point(114.49639, 30.474205)
    // 创建点坐标  
    this.map.centerAndZoom(point, 13)
    this.map.setMapStyle({ style: "light" })
    this.map.enableScrollWheelZoom(true)

    BASE_INFOS.map(baseInfo => {
      var points = []
      baseInfo.gis.map(point => {
        points.push(new BMap.Point(point[0], point[1]))
      })
      var polyline = new BMap.Polyline(points, { strokeColor: "#10FD0F", strokeWeight: 8, strokeOpacity: 0.8 })
      this.map.addOverlay(polyline);

      polyline.addEventListener("click", e => {
        console.log(e.point.lng, e.point.lat)
      })
    })

    this.persons.map(person => {
      var point = new BMap.Point(person.location[0], person.location[1]);
      this.addMarker(point);
    })
  },
  methods: {
    addMarker(point) { // 创建图标对象   
      var myIcon = new BMap.Icon(require("../assets/person1.png"), new BMap.Size(10, 20), {
        // 指定定位位置。   
        // 当标注显示在地图上时，其所指向的地理位置距离图标左上    
        // 角各偏移10像素和25像素。您可以看到在本例中该位置即是   
        // 图标中央下端的尖角位置。    
        anchor: new BMap.Size(5, 10),
        // 设置图片偏移。   
        // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您   
        // 需要指定大图的偏移位置，此做法与css sprites技术类似。    
        imageOffset: new BMap.Size(0, 0) // 设置图片偏移    
      });
      // 创建标注对象并添加到地图   
      var marker = new BMap.Marker(point, { icon: myIcon });

      marker.addEventListener("click", e => {
        this.show_list_flg = true
      })
      this.map.addOverlay(marker);
    }

  }
}

</script>
<style scoped>
.wrapper {
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
}

.gis {
  width: 100%;
  height: 100%;
}

.list {
  position: absolute;
  left: -20%;
  width: 20%;
  top: 0;
  bottom: 0;
  background-color: #24456E;
  opacity: 0.8;
  border-radius: 10px;
  transition: all 0.6s ease 0s;
}

.show-list {
  left: 0;
}

.list header {
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  text-align: center;
  background-color: #0A2C4F;
}

.list header button {
  float: right;
  height: 40px;
  margin-right: 10px;
  color: #fff;
}

.list ul {
  height: 40px;
  line-height: 40px;
}

.list ul:nth-child(even) {
  background-color: #345278;
}

.list li {
  width: 40%;
  text-align: center;
  float: left;
  font-size: 16px;
}

</style>
