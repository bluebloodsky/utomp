<template>
  <section>
    FOV:
    <input v-model.number="fov">(0~180)
    <input type="checkbox" v-model="moveFlg">平移
    <div ref="canvas"></div>
  </section>
</template>
<script>
// import * as THREE from 'three'
export default {
  data() {
    return {
      fov: 60,
      step: 1,
      moveFlg: false,
      renderer: null,
      controls: null,
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
    // this.initControls()
    this.initScene()
    this.initLight()
    this.initObject()
    this.animation()

    window.addEventListener("resize", () => {
      let canvas = this.$refs['canvas']
      this.width = canvas.clientWidth
      this.height = canvas.clientHeight
      this.renderer.setSize(this.width, this.height)
    })

    window.addEventListener("keypress", this.keypress)
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

      this.renderer.domElement.addEventListener("mousewheel", this.mousewheel, false)

      canvas.appendChild(this.renderer.domElement)
      this.renderer.setClearColor(0xFFFFFF, 1.0)
    },
    initCamera() {
      this.camera = new THREE.PerspectiveCamera(this.fov, this.width / this.height, 1, 10000)
      this.camera.position.z = 200
    },
    initControls() {
      this.controls = new THREE.TrackballControls(this.camera)
    },
    initScene() {
      this.scene = new THREE.Scene()
    },
    initLight() {
      // light = new THREE.DirectionalLight(0xFF0000, 1.0, 0)
      // light.position.set(10, 10, 10)
      // this.scene.add(light)

      let ambientLight = new THREE.AmbientLight(0xff0000)
      this.scene.add(ambientLight)

      // let light = new THREE.PointLight(0xff0000)
      // light.position.set(0, 0, 100)
      // this.scene.add(light)

    },
    initObject() {
      var groundgeometry, groundmaterial, groundmesh
      groundgeometry = new THREE.PlaneGeometry(100, 100, 20, 20)
      groundgeometry.vertices[0].uv = new THREE.Vector2(0, 0)
      groundgeometry.vertices[1].uv = new THREE.Vector2(1, 0)
      groundgeometry.vertices[2].uv = new THREE.Vector2(1, 1)
      groundgeometry.vertices[3].uv = new THREE.Vector2(0, 1)

      var loader = new THREE.TextureLoader()
      loader.load("http://localhost:8088/lims/api/index.php/files/timg.jpg",
        (t) => {
          groundmaterial = new THREE.MeshBasicMaterial({ map: t })
          groundmesh = new THREE.Mesh(groundgeometry, groundmaterial)
          this.scene.add(groundmesh)
        })
      var geometry, material, mesh
      geometry = new THREE.CylinderGeometry(30, 50, 50)
      material = new THREE.MeshLambertMaterial({ color: 0x880000 })
      mesh = new THREE.Mesh(geometry, material)
      mesh.position.set(0, 0, 20)
      this.scene.add(mesh)

    },
    animation() {
      this.changeFov()
      if (this.moveFlg) {
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
      this.camera.fov = this.fov
      this.camera.updateProjectionMatrix()
    },
    mousewheel(e) {
      if (e.deltaY > 0) {
        this.fov += 1
      } else {
        this.fov -= 1
      }
    },
    keypress(e) {
      console.log(e)
      if (e.code == "KeyA") {
        this.camera.position.x -= 2
      } else if (e.code == "KeyD") {
        this.camera.position.x += 2
      } else if (e.code == "KeyW") {
        this.camera.position.z -= 2
      } else if (e.code == "KeyS") {
        this.camera.position.z += 2
      }
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
