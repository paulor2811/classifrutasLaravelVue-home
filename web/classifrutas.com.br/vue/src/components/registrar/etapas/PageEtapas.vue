<script>
import Header from '../../GeralComponents/Cabecalho.vue';
import Navegacao from '../../GeralComponents/Navegacao.vue';
export default {
  name: "PageEtapas",
  components: {
    Header,
    Navegacao,
  }
}
</script>

<template>

  <Header />

  <section>
    <div class="container d-flex justify-content-center align-items-center">
      <div class="row">
        <div class="text-div col-6">
          <h4>
            antes de começar vamos<br/>
            precisar confirmar algumas<br/>
            informações
          </h4>
        </div>
        <div class="campos-div col-6">
          <div class="campo" >
            <div class="outro-campo">
              <div class="perfil-usuario">
                <img
                    src="../../../assets/site-assets/user-perfil-icon.png"
                    alt="Perfil de User"
                    class="perfil-image-icon"
                />
                <h4 class="campo-titulo">perfil do usuário</h4>
                <p class="paragraph">vamos entender qual a sua usabilidade no classifrutas</p>
              </div>
              <div class="dados-pessoais">
                <img
                    src="../../../assets/site-assets/dados-pessoais-icon.png"
                    alt="Perfil de User"
                    class="dados-image-icon"
                />
                <h4 class="campo-titulo">dados pessoais</h4>
                <p class="paragraph">para poder validar um cadastro completo</p>
              </div>
              <div class="endereco">
                <img
                    src="../../../assets/site-assets/endereco-icon.png"
                    alt="Perfil de User"
                    class="endereco-image-icon"
                />
                <h4 class="campo-titulo">endereço</h4>
                <p class="paragraph">assim podemos mostrar as melhores oportunidades pra você</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Navegacao />
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column; /* Organiza elementos de cima para baixo */
  justify-content: space-between; /* Posiciona o conteúdo no topo e o container .navegar no final */
  height: 100%; /* Ocupa exatamente a altura total da janela */
  overflow: hidden; /* Garante que nada ultrapasse a área visível */
  padding: 20px;
  box-sizing: border-box;
}
.container {
  flex: 1; /* Faz este elemento crescer para ocupar o espaço entre os outros */
  display: flex;
  align-items: center; /* Centraliza o conteúdo verticalmente */
  justify-content: center; /* Centraliza horizontalmente */
  text-align: center;
}
.row {
  max-width: 100%;
  width: 100%;
  justify-content: center; /* Centraliza todo o conteúdo */
}
.text-div h4 {
  font-family: Arial;
  font-size: 22px; /* Diminui para telas menores */
  font-weight: bold;
  text-align: left;
  margin-bottom: 20px; /* Espaço extra para celulares */
}
.perfil-image-icon {
  width: 120px;
  height: auto; /* Ajusta proporcionalmente em todas as telas */
}
.dados-image-icon, .endereco-image-icon {
  width: 32px;
  height: 32px;
}
/* Espaçamentos */
.campo {
  margin-left: 0; /* Remove valores fixos */
  padding: 10px; /* Adiciona espaçamento interno */
  text-align: left;
}
.perfil-usuario,
.dados-pessoais,
.endereco {
  max-width: 100%; /* Ocupa o total permitido */
  margin-bottom: 30px; /* Ajusta margem para itens menores */
}
/* Ajuste dos textos */
.campo-titulo {
  font-size: 18px;
  font-weight: bold;
}
.paragraph {
  font-size: 16px; /* Menor para manter equilíbrio */
}
.col-6 {
  width: 40%;
}
@media (max-width: 768px) {
  .container {
    margin-top: 10px;
  }

  .row {
    max-width: 90%; /* Reduz o uso máximo da largura */
    flex-direction: column;
    align-items: center;
  }
  .col-6 {
    width: 100%;
  }
  .campo {
    text-align: center; /* Alinha à esquerda novamente */
  }
  .campos-div {
    margin-top: 20px;
  }
  .text-div h4 {
    text-align: center;
  }
}
</style>