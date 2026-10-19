<template>
  <!-- pagina sobre -->
  <div class="sobre">
    <div class="banner-sobre">
      <h1 class="titulo-sobre">SOBRE A VINCI</h1>
      <p class="subtitulo-sobre">
        Redefinindo o futuro da mobilidade elétrica com design autêntico, engenharia de ponta e
        sustentabilidade.
      </p>
    </div>

    <div class="conteudo">
      <div class="secao-historia">
        <div class="texto-historia">
          <h2>NOSSA HISTÓRIA</h2>
          <p>
            Fundada com a visão de criar veículos elétricos de alta performance sem comprometer a
            sofisticação, a VINCI une inovação tecnológica, linhas aerodinâmicas arrojadas e uma
            experiência de condução verdadeiramente emocionante.
          </p>
          <p>
            Nossos modelos são desenvolvidos para quem busca potência silenciosa, autonomia
            inteligente e o mais alto padrão em segurança e conectividade.
          </p>
        </div>
        <div class="imagem-historia">
          <img src="/images/feat-design.png" alt="Design VINCI" />
        </div>
      </div>

      <div class="pilares">
        <div class="pilar">
          <span class="numero-pilar">01</span>
          <h3>INOVAÇÃO</h3>
          <p>
            Baterias de última geração com recarga ultrarrápida e gerenciamento térmico inteligente.
          </p>
        </div>
        <div class="pilar">
          <span class="numero-pilar">02</span>
          <h3>SUSTENTABILIDADE</h3>
          <p>
            Zero emissões locais aliadas a materiais reciclados de alta qualidade e processos
            responsáveis.
          </p>
        </div>
        <div class="pilar">
          <span class="numero-pilar">03</span>
          <h3>PERFORMANCE</h3>
          <p>
            Aceleração instantânea, tração integral e dinâmica de condução precisa em qualquer
            estrada.
          </p>
        </div>
      </div>

      <div class="chamada">
        <h2>EXPERIMENTE O FUTURO HOJE</h2>
        <p>Agende seu test drive exclusivo e sinta a força da tecnologia VINCI.</p>
        <div class="acoes">
          <RouterLink to="/#secao-carros" class="botao-vermelho">Conheça os Modelos</RouterLink>
          <RouterLink to="/" class="botao-voltar">Voltar para Home</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sobre {
  background: white;
  min-height: 80vh;
}

.banner-sobre {
  padding: 80px 40px 60px;
  text-align: center;
  background: linear-gradient(180deg, #f7f7f7 0%, #ffffff 100%);
  border-bottom: 1px solid #eeeeee;
}

.titulo-sobre {
  font-size: 64px;
  font-weight: normal;
  letter-spacing: 4px;
  color: black;
  margin-bottom: 15px;
}

.subtitulo-sobre {
  font-family: 'Host Grotesk', sans-serif;
  font-size: 20px;
  line-height: 32px;
  color: #666;
  max-width: 720px;
  margin: 0 auto;
}

.conteudo {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 40px 100px;
}

.secao-historia {
  display: flex;
  align-items: center;
  gap: 60px;
  margin-bottom: 80px;
}

.texto-historia {
  flex: 1;
}

.texto-historia h2 {
  font-size: 36px;
  letter-spacing: 3px;
  margin-bottom: 20px;
  font-weight: normal;
}

.texto-historia p {
  font-family: 'Host Grotesk', sans-serif;
  font-size: 18px;
  line-height: 32px;
  color: #555;
  margin-bottom: 18px;
}

.imagem-historia {
  flex: 1;
}

.imagem-historia img {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.pilares {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 90px;
}

.pilar {
  padding: 35px 25px;
  background: #fafafa;
  border-radius: 8px;
  border-top: 3px solid #e51837;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.pilar:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.06);
}

.numero-pilar {
  font-size: 32px;
  font-weight: 500;
  color: #e51837;
  display: block;
  margin-bottom: 10px;
}

.pilar h3 {
  font-size: 24px;
  letter-spacing: 2px;
  margin-bottom: 12px;
  font-weight: normal;
}

.pilar p {
  font-family: 'Host Grotesk', sans-serif;
  font-size: 15px;
  line-height: 26px;
  color: #777;
}

.chamada {
  text-align: center;
  padding: 60px 30px;
  background: #111;
  color: white;
  border-radius: 8px;
}

.chamada h2 {
  font-size: 42px;
  letter-spacing: 3px;
  margin-bottom: 12px;
  font-weight: normal;
}

.chamada p {
  font-family: 'Host Grotesk', sans-serif;
  font-size: 18px;
  color: #aaa;
  margin-bottom: 30px;
}

.acoes {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.botao-vermelho {
  background: #e51837;
  color: white;
  padding: 0 35px;
  height: 52px;
  line-height: 52px;
  border-radius: 4px;
  font-size: 18px;
  text-transform: uppercase;
  display: inline-block;
  transition: background 0.2s ease;
}

.botao-vermelho:hover {
  background: #c0132c;
}

.botao-voltar {
  border: 1px solid white;
  color: white;
  padding: 0 35px;
  height: 52px;
  line-height: 52px;
  border-radius: 4px;
  font-size: 18px;
  text-transform: uppercase;
  display: inline-block;
  transition:
    background 0.2s ease,
    color 0.2s ease;
}

.botao-voltar:hover {
  background: white;
  color: black;
}

@media (max-width: 800px) {
  .banner-sobre {
    padding: 50px 20px 40px;
  }
  .titulo-sobre {
    font-size: 42px;
  }
  .conteudo {
    padding: 40px 20px 60px;
  }
  .secao-historia {
    flex-direction: column;
    gap: 30px;
  }
  .pilares {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .chamada h2 {
    font-size: 30px;
  }
}
</style>
