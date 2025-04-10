<template>
    <div ref="threeContainer" class="w-100 animate__animated animate__fadeIn" style="height:400px;"></div>
  </template>
  
  <script>
  import * as THREE from 'three'
  
  export default {
    name: 'Dynamic3D',
    mounted() {
      const container = this.$refs.threeContainer
      const width = container.clientWidth
      const height = container.clientHeight
  
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({ antialias: true })
      renderer.setSize(width, height)
      container.appendChild(renderer.domElement)
  
      // Adiciona uma cor de fundo
      renderer.setClearColor(0x000000, 1)
  
      const geometry = new THREE.BoxGeometry()
      const material = new THREE.MeshBasicMaterial({ color: 0x42f5ef, wireframe: true })
      const cube = new THREE.Mesh(geometry, material)
      scene.add(cube)
  
      camera.position.z = 3
  
      const animate = () => {
        requestAnimationFrame(animate)
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01
        renderer.render(scene, camera)
      }
      animate()
  
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
  