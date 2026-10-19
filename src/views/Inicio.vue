<template>
  <!-- pagina inicial -->
  <div class="pagina">
    <!-- banner grande -->
    <div class="banner-topo">
      <h1 class="titulo-grande">VINCI TDE2</h1>
      <p class="texto-banner">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever.
      </p>
      <div class="botoes">
        <a href="#secao-carros" class="botao-vermelho">Modelos</a>
        <a href="#menu-loja" class="botao-branco">Test Drive</a>
      </div>
    </div>

    <!-- os dois carros -->
    <div id="secao-carros" class="secao-carros">
      <div class="cartao">
        <div class="topo-cartao">
          <h2 class="titulo-carro">VINCI<br />MODEL V2</h2>
          <div class="tabela">
            <div class="nomes">
              <p>Potência:</p>
              <p>Autonomia:</p>
              <p>Peso:</p>
              <p>Tecnologia:</p>
            </div>
            <div class="valores">
              <p>300 cavalos</p>
              <p>500km por carga</p>
              <p>1.500 kg</p>
              <p>GPS e Smartlink</p>
            </div>
          </div>
        </div>
        <img src="/images/model-v2.png" class="foto-carro" />
        <div class="baixo-cartao">
          <span class="frase">A SUV mais robusta da categoria</span>
          <RouterLink to="/carro" class="conheca">CONHEÇA</RouterLink>
        </div>
      </div>

      <div class="cartao">
        <div class="topo-cartao">
          <h2 class="titulo-carro">VINCI<br />MODEL V1</h2>
          <div class="tabela">
            <div class="nomes">
              <p>Potência:</p>
              <p>Autonomia:</p>
              <p>Peso:</p>
              <p>Tecnologia:</p>
            </div>
            <div class="valores">
              <p>300 cavalos</p>
              <p>500km por carga</p>
              <p>1.500 kg</p>
              <p>GPS e Smartlink</p>
            </div>
          </div>
        </div>
        <img src="/images/model-v1.png" class="foto-carro" />
        <div class="baixo-cartao">
          <span class="frase">A SUV mais robusta da categoria</span>
          <RouterLink to="/carro" class="conheca">CONHEÇA</RouterLink>
        </div>
      </div>
    </div>

    <!-- foto do meio -->
    <img src="/images/banner-mid.png" class="foto-grande" />

    <!-- menu de links -->
    <div id="menu-loja" class="menu-loja">
      <a href="#" class="item-menu">
        <span>Agende um test drive</span>
        <img src="/images/arrow.svg" width="23" height="35" />
      </a>
      <a href="#" class="item-menu">
        <span>veja ofertas</span>
        <img src="/images/arrow.svg" width="23" height="35" />
      </a>
      <a href="#" class="item-menu">
        <span>encontre uma loja</span>
        <img src="/images/arrow.svg" width="23" height="35" />
      </a>
    </div>

    <!-- foto de baixo -->
    <img src="/images/banner-bottom-28e81b.png" class="foto-grande" />
  </div>
</template>

<style scoped>
.pagina {
  background: white;
}

/* banner */
.banner-topo {
  height: 637px;
  padding-top: 330px;
  padding-left: 40px;
  background:
    linear-gradient(to right, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0)),
    url('/images/hero-banner-356fb5.png');
  background-size: cover;
}
.titulo-grande {
  font-size: 72px;
  font-weight: normal;
  color: white;
}
.texto-banner {
  font-family: 'Host Grotesk', sans-serif;
  font-size: 20px;
  line-height: 36px;
  color: white;
  max-width: 700px;
  margin-top: 10px;
  margin-bottom: 30px;
}
.botoes {
  display: flex;
  gap: 15px;
}
.botao-vermelho {
  background: #e51837;
  color: white;
  width: 273px;
  height: 52px;
  text-align: center;
  line-height: 52px;
  border-radius: 4px;
  font-size: 20px;
  text-transform: uppercase;
}
.botao-branco {
  border: 1px solid white;
  color: white;
  width: 273px;
  height: 52px;
  text-align: center;
  line-height: 52px;
  border-radius: 4px;
  font-size: 20px;
  text-transform: uppercase;
}

/* carros */
.secao-carros {
  display: flex;
  gap: 90px;
  padding: 70px 40px;
}
.cartao {
  flex: 1;
}
.topo-cartao {
  display: flex;
  justify-content: space-between;
}
.titulo-carro {
  font-size: 24px;
  font-weight: normal;
  letter-spacing: 5px;
  line-height: 30px;
}
.tabela {
  display: flex;
  gap: 30px;
  font-size: 18px;
}
.nomes p {
  line-height: 24px;
  color: black;
}
.valores p {
  line-height: 24px;
  color: #979797;
}
.foto-carro {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}
.baixo-cartao {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.frase {
  font-size: 20px;
  color: #685757;
}
.conheca {
  font-size: 20px;
  color: #1a1a1a;
  text-decoration: underline;
}

/* fotos grandes */
.foto-grande {
  width: 100%;
  height: 593px;
  object-fit: cover;
}

/* menu */
.menu-loja {
  padding: 70px 40px 100px;
}
.item-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 72px;
  text-transform: uppercase;
  color: black;
  margin-bottom: 40px;
}

/* celular */
@media (max-width: 800px) {
  .banner-topo {
    height: auto;
    padding: 200px 20px 40px;
  }
  .titulo-grande {
    font-size: 40px;
  }
  .botoes {
    flex-direction: column;
  }
  .secao-carros {
    flex-direction: column;
    padding: 40px 20px;
  }
  .foto-grande {
    height: 300px;
  }
  .menu-loja {
    padding: 40px 20px 60px;
  }
  .item-menu {
    font-size: 28px;
  }
}
</style>
