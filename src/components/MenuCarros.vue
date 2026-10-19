<template>
  <div class="janela">
    <div class="carros">
      <div class="carro">
        <img src="/images/car-hero.png" class="foto" />
        <h4 class="modelo">MODELO V1</h4>
        <div class="opcoes">
          <RouterLink to="/carro">Ver mais</RouterLink>
          <a href="#">Comprar</a>
        </div>
      </div>
      <div class="carro">
        <img src="/images/mega-v2.png" class="foto" />
        <h4 class="modelo">MODELO V2</h4>
        <div class="opcoes">
          <RouterLink to="/carro">Ver mais</RouterLink>
          <a href="#">Comprar</a>
        </div>
      </div>
      <div class="carro">
        <img src="/images/mega-v3.png" class="foto" />
        <h4 class="modelo">MODELO V3</h4>
        <div class="opcoes">
          <RouterLink to="/carro">Ver mais</RouterLink>
          <a href="#">Comprar</a>
        </div>
      </div>
      <div class="carro">
        <img src="/images/mega-v1.png" class="foto" />
        <h4 class="modelo">MODELO V1</h4>
        <div class="opcoes">
          <RouterLink to="/carro">Ver mais</RouterLink>
          <a href="#">Comprar</a>
        </div>
      </div>
      <div class="carro">
        <img src="/images/car-hero.png" class="foto" />
        <h4 class="modelo">MODELO V1</h4>
        <div class="opcoes">
          <RouterLink to="/carro">Ver mais</RouterLink>
          <a href="#">Comprar</a>
        </div>
      </div>
      <div class="carro">
        <img src="/images/car-hero.png" class="foto" />
        <h4 class="modelo">MODELO V1</h4>
        <div class="opcoes">
          <RouterLink to="/carro">Ver mais</RouterLink>
          <a href="#">Comprar</a>
        </div>
      </div>
    </div>
    <div class="lado">
      <p class="navegue">NAVEGUE</p>
      <hr />
      <a href="#">OFERTAS</a>
      <a href="#" class="vermelho">TEST DRIVE</a>
      <a href="#">LOJAS</a>
      <a href="#">SERVIÇOS</a>
      <a href="#">SAC</a>
      <a href="#">PRIVACIDADE</a>
    </div>
  </div>
</template>

<style scoped>
.janela {
  z-index: 10;
  background: #fff;
  border-top: 1px solid #d8d8d8;
  padding: 25px 40px;
  display: flex;
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
}
.carros {
  flex-wrap: wrap;
  flex: 1;
  gap: 15px;
  display: flex;
}
.carro {
  text-align: center;
  width: 30%;
  margin-bottom: 10px;
}
.foto {
  width: 100%;
}
.modelo {
  letter-spacing: 2px;
  color: #1a1a1a;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 400;
}
.opcoes {
  justify-content: center;
  gap: 25px;
  display: flex;
}
.opcoes a {
  color: #1a1a1a;
  font-size: 16px;
}
.lado {
  border-left: 1px solid #d8d8d8;
  width: 250px;
  padding-left: 20px;
}
.navegue {
  color: #979797;
  letter-spacing: 5px;
  font-size: 14px;
}
.lado a {
  color: #000;
  letter-spacing: 2px;
  font-size: 14px;
  line-height: 42px;
  display: block;
}
.lado a.vermelho {
  color: #e51837;
}
@media (max-width: 1024px) {
  .janela {
    display: none;
  }
}
</style>
