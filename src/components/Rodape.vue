<template>
  <!-- rodape do site -->
  <footer class="rodape">
    <div class="cima">
      <div class="marca">
        <img src="/images/logo.svg" width="41" height="34" />
        <span class="nome-marca">VINCI</span>
      </div>
      <div class="listas">
        <div class="lista">
          <h4>SOBRE</h4>
          <ul>
            <li><RouterLink to="/about">A Marca</RouterLink></li>
            <li><RouterLink to="/about">História</RouterLink></li>
            <li><a href="/#menu-loja">Qualidade</a></li>
            <li><a href="/#menu-loja">Onde estamos</a></li>
            <li><a href="/#menu-loja">Investidores</a></li>
          </ul>
        </div>
        <div class="lista">
          <h4>CONTATO</h4>
          <ul>
            <li><a href="/#menu-loja">Fale Conosco</a></li>
            <li><a href="/#menu-loja">Atendimento</a></li>
            <li><a href="/#menu-loja">SAC</a></li>
          </ul>
        </div>
        <div class="lista">
          <h4>SAC</h4>
          <ul>
            <li><a href="/#menu-loja">Canais Oficiais</a></li>
            <li><a href="/#menu-loja">Redes Sociais</a></li>
            <li><a href="/#menu-loja">Suporte</a></li>
          </ul>
        </div>
      </div>
    </div>
    <p class="fim">©Copyright 2026.<br />Todos os Direitos Reservados.</p>
  </footer>
</template>

<style scoped>
.rodape {
  padding: 40px;
  background: white;
}
.cima {
  display: flex;
  justify-content: space-between;
}
.marca {
  display: flex;
  align-items: center;
  gap: 27px;
}
.nome-marca {
  font-size: 41px;
  letter-spacing: 6px;
  color: black;
}
.listas {
  display: flex;
  gap: 90px;
}
.lista h4 {
  font-size: 24px;
  font-weight: normal;
  letter-spacing: 3px;
  margin-bottom: 20px;
}
.lista ul {
  list-style: none;
}
.lista a {
  font-size: 20px;
  color: #666;
  line-height: 42px;
  letter-spacing: 2px;
  transition: color 0.2s ease;
}
.lista a:hover {
  color: #e51837;
}
.fim {
  margin-top: 40px;
  color: #666;
  font-size: 16px;
  letter-spacing: 5px;
  text-transform: uppercase;
  line-height: 24px;
}

/* celular */
@media (max-width: 800px) {
  .cima {
    flex-direction: column;
    gap: 30px;
  }
  .listas {
    flex-direction: column;
    gap: 30px;
  }
}
</style>
