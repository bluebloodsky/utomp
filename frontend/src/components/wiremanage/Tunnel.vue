<template>
  <section ref="canvas">
  </section>
</template>
<script>
export default {
  data() {
    return {
      fov: 45,
      step: 1,
      moveFlg: false,
      clock: new THREE.Clock,
      meshes: [],
      mixers: [],
      hemisphereLight: null,
      pointLight: null,
      renderer: null,
      camera: null,
      scene: null,
      width: 0,
      height: 0
    }
  },
  mounted() {
    this.initThree()
    this.initScene()
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
  methods: {
    fullScreen(e) {
      e.target.webkitRequestFullscreen()
    },
    initThree() {
      let canvas = this.$refs['canvas']
      this.width = canvas.clientWidth
      this.height = canvas.clientHeight
      this.renderer = new THREE.WebGLRenderer({})
      this.renderer.shadowMap.enabled = true
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
      this.renderer.setSize(this.width, this.height)

      this.renderer.domElement.addEventListener("mousewheel", this.mousewheel, false)

      this.renderer.domElement.addEventListener("dblclick", this.fullScreen)
      canvas.appendChild(this.renderer.domElement)
      // this.renderer.setClearColor(0xFFFFFF, 1.0)
    },
    initScene() {
      this.scene = new THREE.Scene()
      // this.scene.fog = new THREE.Fog(0xFFFFFF, 0.015, 100)
    },
    initLight() {
      var ambiColor = "0x161616"
      let ambientLight = new THREE.AmbientLight(ambiColor, 1)
      this.scene.add(ambientLight)

    },
    loadModel() {
      var loader = new THREE.JDLoader()
      loader.load("http://localhost:8088/lims/api/index.php/files/anim.jd", data => {
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
          far = 10 * data.boundingSphere.radius;
        this.camera = new THREE.PerspectiveCamera(70, this.width / this.height, near, far);
        this.camera.position.z = data.boundingSphere.center.z + 2.5 * data.boundingSphere.radius;
        this.camera.lookAt(data.boundingSphere.center);
        this.camera.add(new THREE.DirectionalLight(0xFFFFFF, 1));
        this.scene.add(this.camera)
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
        if (this.moveFlg) {
          this.changeCameraPosition()
        }
        this.renderer.render(this.scene, this.camera)
      }
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
      }else if (e.code == "KeyH") {
        this.camera.rotateZ(0.1)
      } else if (e.code == "KeyY") {
        this.camera.rotateZ(-0.1)
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
