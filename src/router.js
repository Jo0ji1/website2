// src/router.js
import { createRouter, createWebHistory } from 'vue-router'

// Importação das páginas
import Home from './pages/Home.vue'
import Services from './pages/Services.vue'
import Portfolio from './pages/Portfolio.vue'
import Profile from './pages/Profile.vue'
import Contact from './pages/Contact.vue'
import About from './pages/About.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/services', name: 'Services', component: Services },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/about', name: 'About', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
