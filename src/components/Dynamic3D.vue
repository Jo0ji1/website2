<template>
  <div ref="threeContainer" class="w-100" style="height:400px;"></div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default {
  name: 'Dynamic3D',
  mounted() {
    const container = this.$refs.threeContainer
    const width = container.clientWidth
    const height = container.clientHeight

    // Cena, câmera e renderizador
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 3

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(width, height)
    container.appendChild(renderer.domElement)
    renderer.setClearColor(0x111111, 1)

    // Cria um cubo básico
    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshBasicMaterial({ color: 0x42f5ef, wireframe: true })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    // Adiciona controles de órbita
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05

    // Animação
    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Evento de resize
    window.addEventListener('resize', () => {
      const newWidth = container.clientWidth
      const newHeight = container.clientHeight
      renderer.setSize(newWidth, newHeight)
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
    })
  }
}
</script>

<style scoped>
</style>
