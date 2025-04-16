<template>
  <div class="home-page">
    <!-- Hero Section com fundo parallax -->
    <div class="hero parallax-hero">
      <div class="hero-content animate__animated animate__fadeInDown">
        <h1 class="display-3 fw-bold hero-title">Bem-vindo ao Futuro</h1>
        <p class="lead hero-subtitle">
          Inovação, criatividade e tecnologia para transformar ideias em realidade.
        </p>
        <button class="btn btn-primary btn-lg mt-3 animate__animated animate__pulse animate__infinite infinite">
          Descubra Mais
        </button>
      </div>
    </div>

    <!-- Seção de Impacto com Contadores (texto em branco) -->
    <section class="impact-section container text-center py-5 my-5">
      <div class="row justify-content-center">
        <div class="col-6 col-md-3 mb-3" v-for="(counter, index) in counters" :key="index">
          <h2 class="display-5 text-white">{{ counter.value }}</h2>
          <p class="fs-5 text-white">{{ counter.label }}</p>
        </div>
      </div>
    </section>

    <!-- Elemento 3D Interativo -->
    <section class="container my-5">
      <h2 class="text-center mb-4 text-white">Experiência 3D Interativa</h2>
      <Dynamic3D />
    </section>

    <!-- Últimos Projetos -->
    <section class="container my-5">
      <h2 class="text-center mb-4 text-white">Últimos Projetos</h2>
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

export default {
  name: 'Home',
  components: { Dynamic3D },
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
          desc: 'Visualizações de dados com insights em tempo real.',
          image: 'https://picsum.photos/600/400?random=43',
          link: '/portfolio'
        }
      ]
    }
  },
  mounted() {
    // Animação dos contadores usando requestAnimationFrame para suavidade
    this.counters.forEach((counter, index) => {
      const startTime = Date.now()
      const duration = 2000
      const updateCounter = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        this.counters[index].value = Math.floor(progress * counter.target)
        if (progress < 1) {
          requestAnimationFrame(updateCounter)
        }
      }
      requestAnimationFrame(updateCounter)
    })
  }
}
</script>

<style scoped>
/* Hero Section com parallax */
.hero {
  position: relative;
  height: 600px;
  overflow: hidden;
}

/* Fundo parallax: imagem centrada */
.parallax-hero {
  background: url('https://picsum.photos/1200/600?random=10') center center / cover no-repeat fixed;
  height: 600px;
  position: relative;
  /* Removido filter: brightness(...) para ficar mais claro */
}

/* Centralizar e limitar largura do texto */
.hero-content {
  position: absolute;
  top: 30%;
  left: 26%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
  width: 50%;
  max-width: 800px;
}

/* Texto sempre em branco */
.hero-title,
.hero-subtitle {
  color: #fff !important;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.7);
}

.impact-section {
  color: #fff;
  background-color: #2ecc71; /* Fundo verde */
}

/* Efeito zoom nos cards */
.hover-zoom:hover {
  transform: scale(1.05);
  transition: transform 0.4s ease;
}
</style>
