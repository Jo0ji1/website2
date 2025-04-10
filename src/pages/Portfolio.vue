<template>
    <div class="container my-5 pt-5">
      <h2 class="text-center mb-4">Portfólio</h2>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col" v-for="(item, index) in portfolioItems" :key="index">
          <div class="card h-100 hover-zoom">
            <img :src="item.image" class="card-img-top" alt="Projeto" style="height:220px; object-fit:cover;">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Portfolio',
    data() {
      return {
        portfolioItems: [
          { title: 'Projeto Alpha', description: 'Um site inovador com design moderno.', image: 'https://picsum.photos/600/400?random=61' },
          { title: 'Projeto Beta', description: 'Soluções digitais com alta performance.', image: 'https://picsum.photos/600/400?random=62' },
          { title: 'Projeto Gamma', description: 'Experiência interativa com elementos dinâmicos.', image: 'https://picsum.photos/600/400?random=63' },
          { title: 'Projeto Delta', description: 'Interface responsiva e criativa.', image: 'https://picsum.photos/600/400?random=64' },
          { title: 'Projeto Épsilon', description: 'Soluções visuais para o mercado digital.', image: 'https://picsum.photos/600/400?random=65' },
          { title: 'Projeto Zeta', description: 'Integração de tecnologia 3D para experiências imersivas.', image: 'https://picsum.photos/600/400?random=66' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .hover-zoom:hover {
    transform: scale(1.05);
    transition: transform 0.4s ease;
  }
  </style>
  