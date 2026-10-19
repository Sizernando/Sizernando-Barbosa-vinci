<script>
export default {
  data() {
    return {
      // qual pergunta do faq ta aberta (0 = nenhuma)
      aberto: 0,
    }
  },
  methods: {
    // clica na pergunta pra abrir e fechar
    clicar(numero) {
      if (this.aberto == numero) {
        this.aberto = 0
      } else {
        this.aberto = numero
      }
    },
  },
}
</script>

<template>
  <!-- pagina do carro -->
  <div class="pagina-carro">
    <!-- comeco com a foto -->
    <div class="comeco">
      <img src="/images/car-hero.png" class="foto-principal" />
      <h1 class="titulo-carro">VINCI MODEL V2</h1>
      <p class="texto-centro">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever.
      </p>
      <div class="botoes">
        <a href="#partes" class="botao1">Modelos</a>
        <RouterLink to="/#menu-loja" class="botao2">Test Drive</RouterLink>
      </div>
    </div>

    <!-- numeros -->
    <div class="numeros">
      <p class="frase-cima">tecnologia aliada ao futuro</p>
      <div class="linha-numeros">
        <div class="numero">
          <p class="numero-grande">520 KM</p>
          <p class="numero-pequeno">COM 1 CARGA</p>
        </div>
        <div class="traco"></div>
        <div class="numero">
          <p class="numero-grande">2.800 RPM</p>
          <p class="numero-pequeno">de torque</p>
        </div>
        <div class="traco"></div>
        <div class="numero">
          <p class="numero-grande">10 anos</p>
          <p class="numero-pequeno">garantia</p>
        </div>
      </div>
    </div>

    <!-- foto do meio -->
    <div class="meio">
      <img src="/images/car-banner.png" class="foto-meio" />
    </div>

    <!-- 4 partes -->
    <div id="partes" class="partes">
      <div class="parte">
        <h3 class="titulo-parte">recarga rápida</h3>
        <img src="/images/feat-charge.png" class="foto-parte" />
        <p class="texto-parte">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard.
        </p>
      </div>
      <div class="parte">
        <h3 class="titulo-parte">painel de instrumentos</h3>
        <img src="/images/feat-panel.png" class="foto-parte" />
        <p class="texto-parte">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard.
        </p>
      </div>
      <div class="parte">
        <h3 class="titulo-parte">pontos de recarga</h3>
        <img src="/images/feat-points.png" class="foto-parte" />
        <p class="texto-parte">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard.
        </p>
      </div>
      <div class="parte">
        <h3 class="titulo-parte">design premiado</h3>
        <img src="/images/feat-design.png" class="foto-parte" />
        <p class="texto-parte">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard.
        </p>
      </div>
    </div>

    <!-- detalhe do carro -->
    <div class="detalhe">
      <h2 class="titulo-detalhe">VINCI MODEL V2</h2>
      <p class="texto-detalhe">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever.
      </p>
      <ul class="legenda">
        <li><span class="bolinha"></span>Retrovisores inteligentes</li>
        <li><span class="bolinha"></span>RODAS DE LIGA LEVE</li>
        <li><span class="bolinha"></span>RECONHECIMENTO DE DIGITAL</li>
        <li><span class="bolinha"></span>sensor de proximidade</li>
        <li><span class="bolinha"></span>antena 5g</li>
        <li><span class="bolinha"></span>design sofisticado</li>
        <li><span class="bolinha"></span>abertura automática</li>
        <li><span class="bolinha"></span>câmera de estacionamento</li>
      </ul>
      <div class="foto-lado">
        <img src="/images/model-v2.png" style="width: 100%" />
        <span class="ponto" style="left: 6%; top: 30%">A</span>
        <span class="ponto" style="left: 23%; top: 44%">C</span>
        <span class="ponto" style="left: 1%; top: 90%">B</span>
        <span class="ponto" style="left: 52%; top: 37%">D</span>
        <span class="ponto" style="left: 65%; top: 2%">E</span>
        <span class="ponto" style="left: 80%; top: 35%">G</span>
        <span class="ponto" style="left: 97%; top: 94%">H</span>
        <span class="ponto" style="left: 63%; top: 76%">F</span>
      </div>
    </div>

    <!-- perguntas -->
    <div class="perguntas">
      <h2 class="titulo-perguntas">FAQ</h2>
      <p class="sub-perguntas">PERGUNTAS FREQUENTES</p>

      <div class="pergunta" @click="clicar(1)">
        <div class="linha-pergunta">
          <span>Qual é a autonomia real da bateria em diferentes condições de condução?</span>
          <img
            src="/images/chevron.svg"
            width="24"
            height="12"
            class="icone-chevron"
            :class="{ 'chevron-aberto': aberto == 1 }"
          />
        </div>
        <p v-if="aberto == 1" class="resposta">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      <div class="pergunta" @click="clicar(2)">
        <div class="linha-pergunta">
          <span
            >Quanto tempo o carro leva para carregar em tomadas residenciais e em carregadores
            rápidos?</span
          >
          <img
            src="/images/chevron.svg"
            width="24"
            height="12"
            class="icone-chevron"
            :class="{ 'chevron-aberto': aberto == 2 }"
          />
        </div>
        <p v-if="aberto == 2" class="resposta">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      <div class="pergunta" @click="clicar(3)">
        <div class="linha-pergunta">
          <span>Como funciona a infraestrutura de recarga para viagens de longa distância?</span>
          <img
            src="/images/chevron.svg"
            width="24"
            height="12"
            class="icone-chevron"
            :class="{ 'chevron-aberto': aberto == 3 }"
          />
        </div>
        <p v-if="aberto == 3" class="resposta">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      <div class="pergunta" @click="clicar(4)">
        <div class="linha-pergunta">
          <span>Qual é o tempo de garantia da bateria e qual a sua vida útil estimada?</span>
          <img
            src="/images/chevron.svg"
            width="24"
            height="12"
            class="icone-chevron"
            :class="{ 'chevron-aberto': aberto == 4 }"
          />
        </div>
        <p v-if="aberto == 4" class="resposta">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      <div class="pergunta" @click="clicar(5)">
        <div class="linha-pergunta">
          <span
            >Quais são as principais economias em manutenção e impostos comparado a um carro a
            combustão?</span
          >
          <img
            src="/images/chevron.svg"
            width="24"
            height="12"
            class="icone-chevron"
            :class="{ 'chevron-aberto': aberto == 5 }"
          />
        </div>
        <p v-if="aberto == 5" class="resposta">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>
    </div>
    <hr />
  </div>
</template>

<style scoped>
.pagina-carro {
  background: white;
}

/* comeco */
.comeco {
  max-width: 947px;
  margin: 0 auto;
  padding-top: 57px;
  text-align: center;
}
.foto-principal {
  width: 100%;
  height: 533px;
  object-fit: cover;
}
.titulo-carro {
  font-size: 72px;
  font-weight: normal;
  color: black;
}
.texto-centro {
  font-family: 'Host Grotesk', sans-serif;
  font-size: 20px;
  line-height: 36px;
  color: #666;
  margin-top: 10px;
}
.botoes {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 40px;
}
.botao1 {
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
.botao2 {
  background: white;
  border: 1px solid black;
  color: black;
  width: 273px;
  height: 52px;
  text-align: center;
  line-height: 52px;
  border-radius: 4px;
  font-size: 20px;
  text-transform: uppercase;
}

/* numeros */
.numeros {
  text-align: center;
  padding-top: 80px;
}
.frase-cima {
  font-size: 24px;
  text-transform: uppercase;
  color: #666;
}
.linha-numeros {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  margin-top: 40px;
}
.numero-grande {
  font-size: 72px;
  text-transform: uppercase;
}
.numero-pequeno {
  font-size: 24px;
  text-transform: uppercase;
}
.traco {
  width: 1px;
  height: 92px;
  background: #d3d0d0;
}

/* foto do meio */
.meio {
  padding: 80px 40px 0 40px;
}
.foto-meio {
  width: 100%;
  height: 520px;
  object-fit: cover;
  border-radius: 12px;
}

/* partes */
.partes {
  display: flex;
  margin-top: 35px;
}
.parte {
  width: 25%;
  padding: 0 26px 35px 26px;
  border-left: 1px solid #e8e8e8;
}
.titulo-parte {
  font-size: 26px;
  font-weight: normal;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.foto-parte {
  width: 100%;
  height: 272px;
  object-fit: cover;
  margin-bottom: 20px;
}
.texto-parte {
  font-family: 'Host Grotesk', sans-serif;
  font-size: 16px;
  line-height: 28px;
  color: #979797;
}

/* detalhe */
.detalhe {
  padding: 60px 40px 0 40px;
}
.titulo-detalhe {
  font-size: 42px;
  font-weight: normal;
}
.texto-detalhe {
  font-family: 'Host Grotesk', sans-serif;
  font-size: 16px;
  line-height: 32px;
  color: #666;
  max-width: 379px;
  margin-top: 10px;
}
.legenda {
  list-style: none;
  margin-top: 20px;
}
.legenda li {
  display: inline-block;
  margin-right: 25px;
  margin-bottom: 15px;
  font-size: 16px;
  text-transform: uppercase;
  color: #666;
}
.bolinha {
  display: inline-block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #1a1a1a;
  margin-right: 8px;
}
.foto-lado {
  position: relative;
  max-width: 1074px;
  margin: 20px auto 0 auto;
}
.ponto {
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #e51837;
  color: white;
  font-size: 12px;
  text-align: center;
  line-height: 18px;
}

/* perguntas */
.perguntas {
  max-width: 1064px;
  margin: 0 auto;
  padding: 45px 0 90px 0;
}
.titulo-perguntas {
  font-size: 42px;
  font-weight: normal;
  text-align: center;
}
.sub-perguntas {
  text-align: center;
  color: #979797;
  font-size: 22px;
  letter-spacing: 2px;
  margin-top: 20px;
}
.pergunta {
  margin-top: 60px;
  cursor: pointer;
}
.linha-pergunta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  font-size: 26px;
  text-transform: uppercase;
  color: #1a1a1a;
  line-height: 32px;
}
.pergunta:hover .linha-pergunta {
  color: #e51837;
}
.icone-chevron {
  transition: transform 0.25s ease;
}
.chevron-aberto {
  transform: rotate(180deg);
}
.resposta {
  font-family: 'Host Grotesk', sans-serif;
  font-size: 16px;
  color: #979797;
  margin-top: 15px;
  text-transform: none;
}

/* celular */
@media (max-width: 800px) {
  .comeco {
    padding: 30px 20px 0 20px;
  }
  .foto-principal {
    height: 300px;
  }
  .titulo-carro {
    font-size: 45px;
  }
  .botoes {
    flex-direction: column;
    align-items: center;
  }
  .linha-numeros {
    flex-direction: column;
    gap: 30px;
  }
  .traco {
    width: 90px;
    height: 1px;
  }
  .meio {
    padding: 40px 20px 0 20px;
  }
  .foto-meio {
    height: 300px;
  }
  .partes {
    flex-direction: column;
  }
  .parte {
    width: 100%;
    border-left: none;
    border-top: 1px solid #e8e8e8;
    padding-top: 20px;
    margin-bottom: 20px;
  }
  .detalhe {
    padding: 40px 20px 0 20px;
  }
  .perguntas {
    padding: 40px 20px 60px 20px;
  }
  .linha-pergunta {
    font-size: 20px;
  }
}
</style>
