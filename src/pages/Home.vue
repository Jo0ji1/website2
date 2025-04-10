<template>
    <div class="home-page">
      <!-- Hero Section / Carrossel Centralizado -->
      <div class="hero container-fluid px-0 text-center text-white">
        <Carousel class="mx-auto d-block" />
        <div class="hero-content animate__animated animate__fadeInDown">
          <h1 class="display-3 fw-bold">Bem-vindo ao Futuro</h1>
          <p class="lead">Inovação, criatividade e tecnologia para transformar ideias em realidade.</p>
          <button class="btn btn-primary btn-lg mt-3 animate__animated animate__pulse animate__infinite infinite">
            Descubra Mais
          </button>
        </div>
      </div>
  
      <!-- Seção de Impacto com Contadores (texto branco) -->
      <section class="impact-section container-fluid text-center py-5 my-5">
        <div class="row justify-content-center">
          <div
            class="col-6 col-md-3 mb-3"
            v-for="(counter, index) in counters"
            :key="index"
          >
            <h2 class="display-5">{{ counter.value }}</h2>
            <p class="mb-0 fs-5">{{ counter.label }}</p>
          </div>
        </div>
      </section>
  
      <!-- Elemento 3D Interativo -->
      <section class="container my-5">
        <h2 class="text-center mb-4">Experiência 3D Interativa</h2>
        <Dynamic3D />
      </section>
  
      <!-- Últimos Projetos -->
      <section class="container my-5">
        <h2 class="text-center mb-4">Últimos Projetos</h2>
        <div class="row g-4">
          <div class="col-12 col-md-6 col-lg-4" v-for="(proj, i) in recentProjects" :key="i">
            <div class="card h-100 hover-zoom">
              <img :src="proj.image" class="card-img-top" alt="Projeto" style="height:220px; object-fit:cover;">
              <div class="card-body">
                <h5 class="card-title">{{ proj.title }}</h5>
                <p class="card-text">{{ proj.desc }}</p>
                <router-link :to="proj.link" class="stretched-link">Ver Detalhes</router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import Dynamic3D from '../components/Dynamic3D.vue'
  import Carousel from '../components/Carousel.vue'
  
  export default {
    name: 'Home',
    components: { Carousel, Dynamic3D },
    data() {
      return {
        counters: [
          { value: 0, label: 'Clientes Satisfeitos', target: 150 },
          { value: 0, label: 'Projetos Concluídos', target: 120 },
          { value: 0, label: 'Anos de Experiência', target: 10 }
        ],
        recentProjects: [
          {
            title: 'Projeto Inovador',
            desc: 'Experiência interativa com 3D avançado.',
            image: 'https://picsum.photos/600/400?random=41',
            link: '/portfolio'
          },
          {
            title: 'Landing Page Criativa',
            desc: 'Design inovador com animações suaves.',
            image: 'https://picsum.photos/600/400?random=42',
            link: '/portfolio'
          },
          {
            title: 'Dashboard Analítico',
            desc: 'Visualização de dados com insights em tempo real.',
            image: 'https://picsum.photos/600/400?random=43',
            link: '/portfolio'
          }
        ]
      }
    },
    mounted() {
      // Animação dos contadores
      this.counters.forEach((counter, index) => {
        let start = 0
        const increment = Math.ceil(counter.target / 100)
        const duration = 2000
        const intervalTime = duration / counter.target
  
        const timer = setInterval(() => {
          start += increment
          if (start >= counter.target) {
            this.counters[index].value = counter.target
            clearInterval(timer)
          } else {
            this.counters[index].value = start
          }
        }, intervalTime)
      })
    }
  }
  </script>
  
  <style scoped>
  /* Hero: Ajustes para centralizar e destacar o carrossel */
  .hero {
    position: relative;
    background-color: #111; /* fundo escuro para a secao */
    overflow: hidden;
    padding-bottom: 2rem;
  }
  .hero .mx-auto {
    /* Ajuste extra para centralizar */
    margin-top: 1rem;
  }
  .hero-content {
    margin-top: 1rem;
  }
  
  /* Impact Section: Fundo e texto branco */
  .impact-section {
    background-color: #2ecc71; /* tom de verde, por exemplo */
    color: #fff; /* texto em branco */
  }
  
  /* Efeito de zoom ao passar o mouse em cartões */
  .hover-zoom:hover {
    transform: scale(1.05);
    transition: transform 0.4s ease;
  }
  </style>
  