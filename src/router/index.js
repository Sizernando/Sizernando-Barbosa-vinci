import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Carro from '../views/Carro.vue'
import Sobre from '../views/Sobre.vue'

// paginas do site
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Inicio },
    { path: '/carro', component: Carro },
    { path: '/about', component: Sobre },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
