<template>
    <header class="header">
      <!-- Top Bar: Logo e Slogan -->
      <div class="top-bar d-flex justify-content-between align-items-center px-4 py-2">
        <div class="d-flex align-items-center gap-3">
          <router-link to="/" class="site-logo text-white text-decoration-none fs-3 fw-bold">
            <i class="fa-solid fa-rocket me-2"></i> MEU SITE
          </router-link>
          <div class="slogan text-white fs-6">
            {{ currentSlogan }}
          </div>
        </div>
        <div class="d-flex align-items-center gap-3">
          <!-- Botão de Busca -->
          <button class="btn btn-link text-white fs-4 p-0" @click="toggleSearch">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          <!-- Menu Mobile: só exibe em telas pequenas -->
          <button class="btn d-md-none text-white fs-3" @click="toggleMobileMenu">
            <i class="fa-solid fa-bars"></i>
          </button>
          <!-- Área do Perfil -->
          <router-link to="/profile" class="profile-link text-white text-decoration-none d-flex align-items-center gap-2">
            <i class="fa-solid fa-user-circle fs-2"></i>
            <span class="d-none d-md-inline">Perfil</span>
          </router-link>
        </div>
      </div>
  
      <!-- Menu Principal: para telas médias e acima -->
      <nav class="main-nav d-none d-md-flex justify-content-center gap-3 py-2">
        <router-link to="/" class="btn nav-btn" :class="{ active: activeRoute==='Home' }">
          <i class="fa-solid fa-home me-1"></i> Home
        </router-link>
        <router-link to="/services" class="btn nav-btn" :class="{ active: activeRoute==='Services' }">
          <i class="fa-solid fa-briefcase me-1"></i> Serviços
        </router-link>
        <router-link to="/portfolio" class="btn nav-btn" :class="{ active: activeRoute==='Portfolio' }">
          <i class="fa-solid fa-images me-1"></i> Portfólio
        </router-link>
        <router-link to="/contact" class="btn nav-btn" :class="{ active: activeRoute==='Contact' }">
          <i class="fa-solid fa-envelope me-1"></i> Contato
        </router-link>
        <router-link to="/about" class="btn nav-btn" :class="{ active: activeRoute==='About' }">
          <i class="fa-solid fa-info-circle me-1"></i> Sobre
        </router-link>
      </nav>
  
      <!-- Campo de Busca Expandível -->
      <transition name="slide-down">
        <div v-if="showSearch" class="search-bar px-4 py-2 bg-secondary">
          <input
            type="text"
            class="form-control"
            placeholder="Buscar..."
            v-model="searchQuery"
            @blur="closeSearch"
          />
        </div>
      </transition>
  
      <!-- Dropdown do Menu Mobile -->
      <transition name="fade">
        <nav v-if="showMobileMenu" class="mobile-menu position-absolute bg-dark p-3 rounded shadow">
          <router-link @click="toggleMobileMenu" to="/" class="d-block text-white mb-2">Home</router-link>
          <router-link @click="toggleMobileMenu" to="/services" class="d-block text-white mb-2">Serviços</router-link>
          <router-link @click="toggleMobileMenu" to="/portfolio" class="d-block text-white mb-2">Portfólio</router-link>
          <router-link @click="toggleMobileMenu" to="/contact" class="d-block text-white mb-2">Contato</router-link>
          <router-link @click="toggleMobileMenu" to="/about" class="d-block text-white">Sobre</router-link>
        </nav>
      </transition>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
    props: {
      activeRoute: String,
    },
    data() {
      return {
        slogans: [
          "Inovação a cada clique",
          "Transformando ideias em realidade",
          "Design moderno, tecnologia de ponta"
        ],
        currentIndex: 0,
        showSearch: false,
        showMobileMenu: false,
        searchQuery: ""
      }
    },
    computed: {
      currentSlogan() {
        return this.slogans[this.currentIndex];
      }
    },
    mounted() {
      this.sloganInterval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.slogans.length;
      }, 3000);
    },
    unmounted() {
      clearInterval(this.sloganInterval);
    },
    methods: {
      toggleSearch() {
        this.showSearch = !this.showSearch;
      },
      closeSearch() {
        this.showSearch = false;
      },
      toggleMobileMenu() {
        this.showMobileMenu = !this.showMobileMenu;
      }
    }
  }
  </script>
  
  <style scoped>
  .header {
    background-color: #343a40; /* Fundo fixo escuro */
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1050;
  }
  
  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .main-nav {
    background-color: #1f6aa5;
  }
  
  .nav-btn {
    color: #fff !important;
    background-color: transparent;
    border: 1px solid #fff;
    padding: 0.6rem 1.2rem;
    border-radius: 4px;
    font-size: 1.15rem;
    text-decoration: none;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  .nav-btn:hover {
    background-color: #fff !important;
    color: #343a40 !important;
  }
  .active {
    background-color: #fff !important;
    color: #343a40 !important;
    font-weight: bold;
  }
  
  .site-logo {
    color: #fff !important;
    text-decoration: none !important;
  }
  .site-logo i {
    margin-right: 0.5rem;
  }
  
  .search-bar {
    width: 100%;
  }
  
  .slide-down-enter-active, .slide-down-leave-active {
    transition: all 0.3s ease;
  }
  .slide-down-enter-from, .slide-down-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
  
  .mobile-menu {
    top: 90px;
    right: 10px;
    z-index: 1100;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  
  .profile-link {
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
  }
  
  .profile-link i {
    margin-right: 0.3rem;
  }
  
  @media (max-width: 767px) {
    .d-md-flex {
      display: none !important;
    }
  }
  </style>
  