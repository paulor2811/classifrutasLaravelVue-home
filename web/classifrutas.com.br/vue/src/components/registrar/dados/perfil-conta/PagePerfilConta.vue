<script>
import Header from "../../../GeralComponents/Cabecalho.vue";
export default {
  name: "PerfilContaView",
  components: {
    Header,
  },
  data() {
    return {
      currentRoute: this.$route.path,
    };
  },
  computed: {
    isPerfilContaRoute() {
      // Verifica se está exatamente no path '/registrar/dados'
      return this.$route.path === "/registrar/dados/perfil-conta" || this.$route.path === "/registrar/dados/perfil-conta/";
    },
  },
  watch: {
    $route(to) {
      this.currentRoute = to.path;
    },
  },
}
</script>

<template>

  <router-view></router-view>

  <Header v-if="isPerfilContaRoute"/>

  <section v-if="isPerfilContaRoute">
    <div class="container d-flex justify-content-center align-items-center">
      <div class="text-title">
        <h4>selecione o perfil da sua conta</h4>
      </div>
      <div class="navegar">
        <div class="botao-margem">
          <button class="button-navegar" @click="handleClick">
            <img src="../../../../assets/site-assets/perfil-icon.png" alt="Facebook" class="perfil-icon me-2" />
            <span class="sp ff">pessoa fisíca</span>
            <span class="sp tt">vendedores, compradores</span>
            <img src="../../../../assets/site-assets/fx.png" alt="Facebook" class="fx me-2" />
          </button>
        </div>
        <div class="botao-margem">
          <button class="button-navegar" @click="handleClick">
            <img src="../../../../assets/site-assets/empresa-icon.png" alt="Facebook" class="perfil-icon me-2" />
            <span class="sp ff">empresa</span>
            <span class="sp tt">vendedores, compradores</span>
            <img src="../../../../assets/site-assets/fx.png" alt="Facebook" class="fx me-2" />
          </button>
        </div>
        <div class="botao-margem">
          <button class="button-navegar" @click="handleClick">
            <img src="../../../../assets/site-assets/produtor-icon.png" alt="Facebook" class="perfil-icon me-2" />
            <span class="sp ff">produtor</span>
            <span class="sp tt">vendedores, compradores</span>
            <img src="../../../../assets/site-assets/fx.png" alt="Facebook" class="fx me-2" />
          </button>
        </div>
        <div class="botao-margem">
          <button class="button-navegar" @click="handleClick">
            <img src="../../../../assets/site-assets/entreposto.png" alt="Facebook" class="perfil-icon me-2" />
            <span class="sp ff">entreposto</span>
            <span class="sp tt">vendedores, compradores</span>
            <img src="../../../../assets/site-assets/fx.png" alt="Facebook" class="fx me-2" />
          </button>
        </div>
      </div>
      <div class="navegar d-flex">
        <div class="voltar">
          <button class="button-voltar" @click="handleClick"> < voltar </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Container principal */
.container {
  max-width: 100%;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto; /* Centraliza */
}

/* Botões para navegação */
.button-navegar {
  position: relative;
  width: 100%;
  max-width: 348px; /* Mantém o design do botão */
  height: 104px;
  border-radius: 18px;
  background-color: white;
  color: black;
  border: none;
  padding-left: 100px; /* Mantém espaçamento do texto */
  text-align: left; /* Alinha o texto à esquerda */
  display: flex;
  flex-direction: column; /* Texto alinhado verticalmente */
  justify-content: center;
  margin: 15px; /* Ajusta espaçamento entre botões */
}

/* Ícones dentro dos botões */
.perfil-icon {
  width: 60px;
  height: 60px;
  position: absolute; /* Alinha com precisão */
  left: 20px;
  top: 50%;
  transform: translateY(-50%); /* Centraliza verticalmente */
}

/* Estilo de cada box com botão */
.botao-margem {
  width: 100%;
  max-width: 350px; /* Mantém largura máxima do botão */
  height: 108px;
  border: 1px solid #8080808C;
  border-radius: 18px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px auto; /* Espaçamento responsivo */
}

/* Título principal */
.text-title {
  margin-top: 40px;
  margin-bottom: 20px;
  text-align: center; /* Título será centralizado */
}
.text-title h4 {
  font-family: Arial;
  font-size: 24px;
  font-weight: bold;
}

/* Texto dentro dos botões */
.sp {
  position: relative;
  bottom: 10px;
}
.ff {
  font-family: Arial;
  font-size: 18px;
  font-weight: bold;
}
.tt {
  font-family: Arial;
  font-size: 16px;
}
.fx {
  width: 6px;
  height: 15px;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}

/* Botão voltar */
.button-voltar {
  width: 198px;
  height: 48px;
  border-color: #EE2641;
  background-color: #FFFFFF;
  color: #EE2641;
  border-radius: 21px;
  border: 2px solid #EE2641;
  margin: 30px auto;
  display: block;
  text-align: center;
  font-size: 16px;
}

/* Responsividade */

/* Telas pequenas (até 768px) */
@media (max-width: 768px) {
  .text-title h4 {
    font-size: 20px;
    margin-bottom: 15px;
  }

  .container {
    width: 100%;
  }

  .button-navegar {
    width: 100%; /* Botões ocupam toda a largura */
    padding-left: 80px; /* Reduz padding para telas menores */
  }

  .botao-margem {
    height: auto;
    margin: 15px 0;
  }

  .perfil-icon {
    width: 50px; /* Ícones reduzidos */
    height: 50px;
  }

  .sp {
    bottom: 5px;
    font-size: 16px; /* Reduz tamanho do texto */
  }
  .tt {
    font-size: 14px; /* Texto menor */
  }
}

/* Telas maiores (acima de 1024px) */
@media (min-width: 1024px) {
  .container {
    max-width: 80%;
  }

  .text-title {
    margin-top: 60px;
  }

  .botao-margem {
    margin: 20px;
  }
}
</style>