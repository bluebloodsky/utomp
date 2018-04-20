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
export default {
  props: ['locatePercent'],
  data() {
    return {
      fov: 45,
      step: 0.1,
      clock: new THREE.Clock,
      renderer: null,
      meshes: [],
      mixers: [],
      camera: null,
      scene: null,
      stats: null,
      width: 0,
      height: 0,
      moveFlg: false,
      startPoint: [-668, -1690, 1355],
      endPoint: [-688, 201955, 1355]
    }
  },
  mounted() {
    this.initThree()
    this.initScene()
    this.initStats()
    // this.initCamera()
    this.initLight()
    this.loadModel()
    this.render()
    window.addEventListener("resize", () => {
      let canvas = this.$refs['canvas']
      this.width = canvas.clientWidth
      this.height = canvas.clientHeight
      this.renderer.setSize(this.width, this.height)
    })

    window.addEventListener("keypress", this.keypress)
  },
  watch: {
    moveFlg(newVal) {
      this.$emit('move-flg-change', newVal)
    }
  },
  methods: {
    fullScreen(e) {
      e.target.webkitRequestFullscreen()
    },
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

      this.renderer.domElement.addEventListener("dblclick", this.fullScreen)
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
      var axes = new THREE.AxisHelper(200000)
      this.scene.add(axes)
    },
    initCamera() {
      this.camera = new THREE.PerspectiveCamera(this.fov, this.width / this.height, 1, 100)
      this.camera.position.set(2, 2, 402)


      // let c = this.camera
      // let helper = new THREE.CameraHelper(c);
      // this.scene.add(helper);
    },
    initLight() {
      var ambiColor = "0x161616"
      let ambientLight = new THREE.AmbientLight(ambiColor, 1)
      this.scene.add(ambientLight)
    },
    loadModel() {
      var loader = new THREE.JDLoader()
      loader.load("../../../static/model/tunnel.jd", data => {
        for (var i = 0; i < data.objects.length; ++i) {
          if (data.objects[i].type == "Mesh" || data.objects[i].type == "SkinnedMesh") {
            var mesh = null;
            var matArray = this.createMaterials(data);
            if (data.objects[i].type == "SkinnedMesh") {
              mesh = new THREE.SkinnedMesh(data.objects[i].geometry, matArray);
            } else // Mesh
            {
              mesh = new THREE.Mesh(data.objects[i].geometry, matArray);
            }
            this.meshes.push(mesh);
            this.scene.add(mesh);

            if (mesh && mesh.geometry.animations) {
              var mixer = new THREE.AnimationMixer(mesh);
              this.mixers.push(mixer);
              var action = mixer.clipAction(mesh.geometry.animations[0]);
              action.play();
            }
          } else if (data.objects[i].type == "Line") {
            var jd_color = data.objects[i].jd_object.color;
            var color1 = new THREE.Color(jd_color[0] / 255, jd_color[1] / 255, jd_color[2] / 255);
            var material = new THREE.LineBasicMaterial({ color: color1 }); //{ color: new THREE.Color( 0xff0000 ) }
            var line = new THREE.Line(data.objects[i].geometry, material);
            this.scene.add(line);

            if (line.geometry.animations) {
              var mixer = new THREE.AnimationMixer(line);
              this.mixers.push(mixer);
              var action = mixer.clipAction(line.geometry.animations[0]);
              action.play();
            }
          }
        }

        var near = 1,
          far = 4 * data.boundingSphere.radius;
        this.camera = new THREE.PerspectiveCamera(this.fov, this.width / this.height, near, far);
        
        // this.camera.position.x = data.boundingSphere.center.x +  data.boundingSphere.radius 
        // this.camera.position.y = data.boundingSphere.center.y 
        // this.camera.position.z = data.boundingSphere.center.z
        // this.camera.lookAt(data.boundingSphere.center);

        this.camera.position.set(this.startPoint[0], this.startPoint[1], this.startPoint[2])
        this.camera.lookAt(this.endPoint[0], this.endPoint[1], this.endPoint[2])
        
        this.camera.add(new THREE.DirectionalLight(0xFFFFFF, 1))
        this.scene.add(this.camera)
        // this.moveFlg = true
      })
    },
    createMaterials(data) {
      var matArray = [];
      for (var j = 0; j < data.materials.length; ++j) {
        var mat = new THREE.MeshPhongMaterial({});
        mat.copy(data.materials[j]);
        //mat.transparent = true;
        matArray.push(mat);
      }
      return matArray;
    },
    render() {
      var delta = this.clock.getDelta();
      for (var i = 0; i < this.mixers.length; ++i)
        this.mixers[i].update(delta);
      if (this.camera) {
        this.changeFov()
        // if (this.moveFlg) {
        this.changeCameraPosition()
        // }
        this.renderer.render(this.scene, this.camera)
      }
      requestAnimationFrame(this.render)
    },
    changeCameraPosition() {
      // var diff = [this.endPoint[0] - this.startPoint[0], this.endPoint[1] - this.startPoint[1], this.endPoint[2] - this.startPoint[2]]
      // this.camera.position.x = this.startPoint[0] + diff[0] * this.locatePercent
      // this.camera.position.y = this.startPoint[1] + diff[1] * this.locatePercent
      // this.camera.position.z = this.startPoint[2] + diff[2] * this.locatePercent
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
        this.camera.translateX(-this.step)
      } else if (e.code == "KeyD") {
        this.camera.translateX(this.step)
      } else if (e.code == "KeyW") {
        this.camera.translateZ(-this.step)
      } else if (e.code == "KeyS") {
        this.camera.translateZ(this.step)
      } else if (e.code == "KeyR") {
        this.camera.rotateY(0.1)
      } else if (e.code == "KeyT") {
        this.camera.rotateY(-0.1)
      } else if (e.code == "KeyF") {
        this.camera.rotateZ(0.1)
      } else if (e.code == "KeyG") {
        this.camera.rotateZ(-0.1)
      } else if (e.code == "KeyH") {
        this.camera.rotateX(0.1)
      } else if (e.code == "KeyY") {
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
