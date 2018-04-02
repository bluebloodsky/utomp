export const CreateTunnel = (material, width, height, depth) => {
  var group = new THREE.Mesh()
  var leftMesh = new THREE.Mesh(new THREE.CubeGeometry(0.1, height, depth), material)
  leftMesh.translateY(height / 2)
  group.add(leftMesh)
  var rightMesh = new THREE.Mesh(new THREE.CubeGeometry(0.1, height, depth), material)
  rightMesh.translateX(width)
  rightMesh.translateY(height / 2)
  group.add(rightMesh)
  var bottomMesh = new THREE.Mesh(new THREE.CubeGeometry(width + 0.1, 0.1, depth), material)
  bottomMesh.translateX(width / 2)
  group.add(bottomMesh)
  var topMesh = new THREE.Mesh(new THREE.CubeGeometry(width + 0.1, 0.1, depth), material)
  topMesh.translateX(width / 2)
  topMesh.translateY(height)
  group.add(topMesh)
  return group
}
