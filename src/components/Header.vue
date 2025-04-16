<template>
  <header class="header">
    <!-- Top Bar: Logo, Slogan Rotativo e Botões extras -->
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
        <!-- Botão Dark Mode -->
        <button @click="toggleDarkMode" class="btn btn-link text-white fs-4 p-0">
          <i :class="darkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon'"></i>
        </button>
        <!-- Botão de Busca -->
        <button class="btn btn-link text-white fs-4 p-0" @click="toggleSearch">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
        <!-- Botão Mobile Hamburger -->
        <button class="btn d-md-none text-white fs-3" @click="toggleMobileMenu">
          <i class="fa-solid fa-bars"></i>
        </button>
        <!-- Área de Perfil: Ícone + Texto -->
        <router-link to="/profile" class="profile-link text-white text-decoration-none d-flex align-items-center gap-2">
          <i class="fa-solid fa-user-circle fs-2"></i>
          <span class="d-none d-md-inline">Perfil</span>
        </router-link>
      </div>
    </div>
    
    <!-- Menu Principal para telas médias+ -->
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

    <!-- Menu Mobile Dropdown -->
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
    activeRoute: String
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
      searchQuery: "",
      showMobileMenu: false,
      darkMode: false
    }
  },
  computed: {
    currentSlogan() {
      return this.slogans[this.currentIndex];
    }
  },
  mounted() {
    // Slogan rotativo
    this.sloganInterval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slogans.length;
    }, 3000);
    // Carregar tema salvo
    this.loadTheme();
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
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      document.body.classList.toggle('dark-theme', this.darkMode);
      localStorage.setItem('darkMode', this.darkMode);
    },
    loadTheme() {
      const saved = localStorage.getItem('darkMode') === 'true';
      if (saved) {
        this.darkMode = true;
        document.body.classList.add('dark-theme');
      }
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  /* Fundo fixo: se darkMode estiver ativo, o corpo também terá tema escuro */
  background-color: #343a40;
  z-index: 1050;
}

/* Top bar */
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Menu Principal */
.main-nav {
  background-color: #1f6aa5;
}

/* Botões de Navegação */
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

/* Logo */
.site-logo {
  color: #fff !important;
  text-decoration: none !important;
}
.site-logo i {
  margin-right: 0.5rem;
}

/* Campo de Busca */
.search-bar {
  width: 200px;
  position: absolute;
  top: 60px;
  right: 10px;
  z-index: 1100;
}
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Mobile Menu */
.mobile-menu {
  top: 90px;
  right: 10px;
  z-index: 1100;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Perfil */
.profile-link {
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
}
.profile-link i {
  margin-right: 0.3rem;
}

/* Dark Theme (para o body, aplicado via classe no main.js) */
.dark-theme {
  background-color: #1a1a1a;
  color: #e0e0e0;
}

/* Responsividade: ocultar menu em telas pequenas */
@media (max-width: 767px) {
  .d-md-flex {
    display: none !important;
  }
}
</style>
