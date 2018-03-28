<template>
  <section>
    FOV:
    <input v-model.number="fov">(0~180)
    <input type="checkbox" v-model="moveFlg">平移
    <input type="checkbox" v-model="fovFlg">视角
    <div ref="canvas"></div>
  </section>
</template>
<script>
import * as THREE from 'three'
export default {
  data() {
    return {
      fov: 45,
      step: 1,
      moveFlg: false,
      fovFlg: true,
      renderer: null,
      camera: null,
      scene: null,
      cube: null,
      width: 0,
      height: 0,

    }
  },
  mounted() {
    this.initThree()
    this.initCamera()
    this.initScene()
    this.initLight()
    this.initObject()
    this.animation()
    window.onresize = () => {
      let canvas = this.$refs['canvas']
      this.width = canvas.clientWidth
      this.height = canvas.clientHeight
      this.renderer.setSize(this.width, this.height)
    }
  },
  methods: {
    initThree() {
      let canvas = this.$refs['canvas']
      this.width = canvas.clientWidth
      this.height = canvas.clientHeight
      this.renderer = new THREE.WebGLRenderer({
        antialias: true
      })
      this.renderer.shadowMap.enabled = true
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
      this.renderer.setSize(this.width, this.height)
      canvas.appendChild(this.renderer.domElement)
      this.renderer.setClearColor(0xFFFFFF, 1.0)
    },
    initCamera() {
      this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 10000)
      this.camera.position.x = 0
      this.camera.position.y = 0
      this.camera.position.z = 200
      this.camera.up.x = 0
      this.camera.up.y = 0
      this.camera.up.z = 0
    },
    initScene() {
      this.scene = new THREE.Scene()
    },
    initLight() {
      let light
      // light = new THREE.DirectionalLight(0xFF0000, 1.0, 0);
      // light.position.set(10, 10, 10);
      // this.scene.add(light);

      // light = new THREE.AmbientLight(0xff0000);
      // this.scene.add(light);

      light = new THREE.PointLight(0xff0000);
      light.position.set(0, 0, 100);
      this.scene.add(light);

    },
    initObject() {
      var geometry = new THREE.Geometry()
      var material = new THREE.LineBasicMaterial({ vertexColors: THREE.VertexColors })
      var color1 = new THREE.Color(0x444444),
        color2 = new THREE.Color(0xFF0000)

      // 线的材质可以由2点的颜色决定
      var p1 = new THREE.Vector3(-100, 60, 100)
      var p2 = new THREE.Vector3(100, 60, -100)
      geometry.vertices.push(p1)
      geometry.vertices.push(p2)
      geometry.colors.push(color1, color2)

      var line = new THREE.Line(geometry, material, THREE.LinePieces)
      this.scene.add(line)

      geometry = new THREE.CylinderGeometry(30, 50, 50)
      material = new THREE.MeshLambertMaterial({ color: 0x880000 })
      var mesh = new THREE.Mesh(geometry, material)
      mesh.position.set(0, 0, -60)
      this.scene.add(mesh)

    },
    animation() {
      if (this.fovFlg) {
        this.changeFov()
      }
      if(this.moveFlg){
      	this.changeCameraPosition()
      }
      this.renderer.render(this.scene, this.camera)
      requestAnimationFrame(this.animation)
    },
    changeCameraPosition() {
      if (this.camera.position.x == 200) {
        this.step = -1
      } else if (this.camera.position.x == -200) {
        this.step = 1
      }
      this.camera.position.x += this.step
    },
    changeFov() {
      if (this.fov == 180) {
        this.step = -1
      } else if (this.fov == 0) {
        this.step = 1
      }
      this.fov += this.step
      this.camera.fov = this.fov
      this.camera.updateProjectionMatrix()
    }
  }
}

</script>
<style scoped>
div {
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

</style>
