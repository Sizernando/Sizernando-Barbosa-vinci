<script>
// pega o topo e o rodape que aparece em toda pagina
import Topo from './components/Topo.vue'
import Rodape from './components/Rodape.vue'

export default {
  components: {
    Topo: Topo,
    Rodape: Rodape,
  },
}
</script>

<template>
  <div>
    <Topo />
    <RouterView />
    <Rodape />
  </div>
</template>
