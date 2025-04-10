<template>
    <div class="container my-5 pt-5">
      <h2 class="text-center mb-4">Nossos Serviços</h2>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col" v-for="(service, index) in services" :key="index">
          <div class="card h-100 hover-shadow">
            <img :src="service.image" class="card-img-top" alt="Serviço" style="height:200px; object-fit:cover;">
            <div class="card-body">
              <h5 class="card-title">{{ service.title }}</h5>
              <p class="card-text">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Services',
    data() {
      return {
        services: [
          {
            title: 'Desenvolvimento Web',
            description: 'Criação de sites modernos, responsivos e dinâmicos.',
            image: 'https://picsum.photos/500/300?random=31'
          },
          {
            title: 'Design de Interfaces',
            description: 'Layouts intuitivos e centrados na experiência do usuário.',
            image: 'https://picsum.photos/500/300?random=32'
          },
          {
            title: 'Animações e Elementos 3D',
            description: 'Integração de Three.js para experiências imersivas.',
            image: 'https://picsum.photos/500/300?random=33'
          },
          {
            title: 'Consultoria Digital',
            description: 'Soluções estratégicas para o ambiente digital.',
            image: 'https://picsum.photos/500/300?random=34'
          },
          {
            title: 'Marketing Digital',
            description: 'Campanhas e estratégias para fortalecer sua presença online.',
            image: 'https://picsum.photos/500/300?random=35'
          },
          {
            title: 'Branding & Identidade',
            description: 'Criação de logotipos e material de marca impactantes.',
            image: 'https://picsum.photos/500/300?random=36'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .hover-shadow:hover {
    transform: scale(1.03);
    transition: transform 0.3s ease;
  }
  </style>
  