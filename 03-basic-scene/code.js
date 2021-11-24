const scene = new THREE.Scene()

// RED cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000
})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Camera
const viewSize = {
  height: 600,
  width: 800,
}
const camera = new THREE.PerspectiveCamera(75, viewSize.width / viewSize.height)
scene.add(camera)
camera.position.z = 3
camera.position.x = 0.75
camera.position.y = 0.75



const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('.cube'),
})
renderer.setSize(viewSize.width, viewSize.height)
renderer.render(scene, camera)
