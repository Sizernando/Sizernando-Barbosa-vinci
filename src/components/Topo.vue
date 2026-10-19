<script>
import MenuCarros from './MenuCarros.vue'

export default {
  components: {
    MenuCarros: MenuCarros,
  },
  data() {
    return {
      aberto: false,
    }
  },
  methods: {
    // abre e fecha o menu de carros
    abrirFechar() {
      if (this.aberto == true) {
        this.aberto = false
      } else {
        this.aberto = true
      }
    },
    fechar() {
      this.aberto = false
    },
  },
  watch: {
    $route() {
      this.aberto = false
    },
  },
}
</script>

<template>
  <!-- topo do site -->
  <div class="caixa-topo" @mouseleave="fechar">
    <header class="topo">
      <RouterLink to="/" class="logo">
        <img src="/images/logo.svg" width="41" height="34" />
        <span class="nome">VINCI</span>
      </RouterLink>
      <nav class="links">
        <RouterLink to="/" class="link">Home</RouterLink>
        <RouterLink to="/about" class="link">Sobre</RouterLink>
        <button type="button" class="link" @click="abrirFechar" @mouseenter="aberto = true">
          Veículos
        </button>
        <RouterLink to="/#menu-loja" class="link">Serviços</RouterLink>
        <RouterLink to="/#menu-loja" class="link">Test Drive</RouterLink>
      </nav>
    </header>
    <MenuCarros v-show="aberto" @click="fechar" />
  </div>
</template>

<style scoped>
.caixa-topo {
  position: relative;
}
.topo {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 40px;
  background: white;
}
.logo {
  display: flex;
  align-items: center;
  gap: 27px;
}
.nome {
  font-size: 41px;
  letter-spacing: 6px;
  color: black;
}
.links {
  display: flex;
  align-items: center;
  gap: 90px;
}
.link {
  font-size: 16px;
  text-transform: uppercase;
  color: #1a1a1a;
  background: white;
  border: none;
  cursor: pointer;
  font-family: 'Genos', sans-serif;
  transition: color 0.2s ease;
}
.link:hover {
  color: #e51837;
}

/* celular */
@media (max-width: 768px) {
  .topo {
    height: auto;
    padding: 15px 20px;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
  }
  .links {
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .nome {
    font-size: 28px;
  }
}
</style>
