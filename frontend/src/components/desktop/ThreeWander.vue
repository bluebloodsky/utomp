<template>
  <section>
    FOV:
    <input v-model.number="fov">(0~180)
    <input type="checkbox" v-model="moveFlg">漫游
    <div ref="canvas"></div>
    <section ref="stats" v-show="false"></section>
  </section>
</template>
<script>
import { CreateTunnel } from '@/models/threeObject'
export default {
  data() {
    return {
      fov: 45,
      step: 1,
      moveFlg: false,
      renderer: null,
      camera: null,
      scene: null,
      stats: null,
      material: null,
      rocks: null,
      angle: 0,
      width: 0,
      height: 0
    }
  },
  mounted() {
    this.initThree()
    this.initScene()
    this.initStats()
    this.initCamera()
    this.initLight()
    this.createBox()
    this.createObject()
    this.render()
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
        alpha: true,
        antialias: true,
        // preserveDrawingBuffer: true, //是否保存绘图缓冲  
      })
      this.renderer.shadowMap.enabled = true
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
      this.renderer.setSize(this.width, this.height)

      this.renderer.domElement.addEventListener("mousewheel", this.mousewheel, false)

      canvas.appendChild(this.renderer.domElement)
      // this.renderer.setClearColor(0xFFFFFF, 1.0)
    },
    initStats() {
      this.stats = new Stats()
      this.stats.setMode(0)
      this.stats.domElement.style = { position: 'absolute', left: 0, top: 0 }
      this.$refs['stats'].appendChild(this.stats.domElement)
    },
    initScene() {
      this.scene = new THREE.Scene()
      // this.scene.fog = new THREE.Fog(0xFFFFFF, 0.015, 100)
    },
    initCamera() {
      this.camera = new THREE.PerspectiveCamera(this.fov, this.width / this.height, 1, 100)
      this.camera.position.set(2, 2, 402)


      // let c = this.camera
      // let helper = new THREE.CameraHelper(c);
      // this.scene.add(helper);
    },
    initLight() {
      let directLight = new THREE.DirectionalLight(0xff0000, 1.0, 0)
      directLight.position.set(0, 0, 1000)
      this.scene.add(directLight)

      var ambiColor = "#0c0c0c"
      let ambientLight = new THREE.AmbientLight(ambiColor)
      this.scene.add(ambientLight)

      let pointlight = new THREE.PointLight(0xff0000)
      pointlight.position.set(0, 0, 200)
      this.scene.add(pointlight)

    },

    createBox() {
      var axes = new THREE.AxisHelper(200)
      this.scene.add(axes)
      var textureLoader = new THREE.TextureLoader()
      textureLoader.load('http://localhost:8088/lims/api/index.php/files/timg.jpg', t => {
        t.wrapS = t.wrapT = THREE.RepeatWrapping
        t.repeat.set(20, 1)
        var material = new THREE.MeshBasicMaterial({ map: t })
        var tunnel = CreateTunnel(material, 3, 4, 800)
        this.scene.add(tunnel)
        tunnel = CreateTunnel(material, 3, 4, 800)
        tunnel.translateX(3)
        this.scene.add(tunnel)
        this.moveFlg = true
      })
    },
    createObject() {

      var points = [new THREE.Vector3(1, 2, 400),
        new THREE.Vector3(1, 2, -400)
      ]

      var meshMaterial = new THREE.MeshDepthMaterial({ color: 0x000000 })

      var tubeGeometry = new THREE.TubeGeometry(new THREE.SplineCurve3(points),1,0.2,64 )

      var tubeMesh = new THREE.Mesh(tubeGeometry,meshMaterial)
      this.scene.add(tubeMesh)

      // var cylinderGeometry = new THREE.CylinderGeometry(0.1, 0.1, 800)
      // var meshMaterial = new THREE.MeshDepthMaterial({ color: 0x000000 })
      // var mesh = new THREE.Mesh(cylinderGeometry, meshMaterial)
      // mesh.rotateX(0.5 * Math.PI)
      // mesh.translateX(1)
      // mesh.translateZ(-2)
      // this.scene.add(mesh)

      // mesh = new THREE.Mesh(cylinderGeometry, meshMaterial)
      // mesh.rotateX(0.5 * Math.PI)
      // mesh.translateX(1)
      // mesh.translateZ(-1.5)
      // this.scene.add(mesh)

    },
    loadRockTexture() {
      var textureLoader = new THREE.TextureLoader()
      textureLoader.load('http://localhost:8088/lims/api/index.php/files/rock.jpg', t => {
        t.wrapS = t.wrapT = THREE.RepeatWrapping
        t.repeat.set(100, 1)
        this.material = new THREE.MeshLambertMaterial({ map: t })
        this.createRocks()
      })
    },
    createRocks() {
      this.rocks = []
      for (var i = 0; i < 100; i++) {

        var size = 10 + Math.random() * 10
        var geometry = new THREE.IcosahedronGeometry(size, 0)
        var icosahedron = new THREE.Mesh(geometry, this.material)

        for (var j = 0, l = geometry.vertices.length; j < l; j++) {
          geometry.vertices[j].x += size * -0.25 + Math.random() * size * 0.5;
          geometry.vertices[j].y += size * -0.25 + Math.random() * size * 0.5;
        }

        var variance = 0.01

        var field = 300
        icosahedron.position.x = -field + Math.random() * field * 2;
        icosahedron.position.y = -field + Math.random() * field * 2;
        icosahedron.position.z = -field + Math.random() * field * 2;

        this.scene.add(icosahedron)
        this.rocks.push(icosahedron)
      }
    },
    Rock() {

    },
    render() {
      this.stats.update()
      this.changeFov()
      if (this.moveFlg) {
        this.changeCameraPosition()
      }
      this.renderer.render(this.scene, this.camera)
      requestAnimationFrame(this.render)
    },
    changeCameraPosition() {
      if (this.camera.position.z > 404) {
        this.step = -0.1
      }
      this.camera.position.z += this.step
      if (this.camera.position.z < -396) {
        this.camera.position.z = 404
      }
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
      if (e.code == "KeyA") {
        this.camera.translateX(-0.1)
      } else if (e.code == "KeyD") {
        this.camera.translateX(0.1)
      } else if (e.code == "KeyW") {
        this.camera.translateZ(-0.5)
      } else if (e.code == "KeyS") {
        this.camera.translateZ(0.5)
      } else if (e.code == "KeyR") {
        this.camera.rotateY(0.1)
      } else if (e.code == "KeyT") {
        this.camera.rotateY(-0.1)
      } else if (e.code == "KeyF") {
        this.camera.rotateX(0.1)
      } else if (e.code == "KeyG") {
        this.camera.rotateX(-0.1)
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