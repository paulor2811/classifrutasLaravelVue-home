<script>
import Cabecalho from "./Cabecalho.vue";

export default {
  name: "Navegacao" ,
  components: {Cabecalho},
  data() {
    return {
      currentRoute: this.$route.path,
    };
  },
  computed: {
    vCadastrar() {
      return this.$route.path === "/registrar/dados" || this.$route.path === "/registrar/dados/";
    },
  },
  watch: {
    $route(newRoute) {
      this.currentRoute = newRoute.path;
    },
  },
}
</script>

<template>
  <section>
    <div class="navegar d-flex">
      <div class="voltar">
        <button class="button-voltar" @click="handleClick"> < voltar </button>
      </div>
      <div class="cadastrar-dados" v-if="!vCadastrar" :key="$route.fullPath">
        <button class="button-cadastrar"  @click="handleClick"> cadastrar dados </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Estilo base */
.button-voltar {
  width: 198px;
  height: 48px;
  border-color: #EE2641;
  background-color: #FFFFFF;
  color: #EE2641;
  border-radius: 21px;
  border: 2px solid #EE2641;
  position: relative;
}

.button-cadastrar {
  width: 348px;
  height: 48px;
  border-color: #EE2641;
  background-color: #EE2641;
  color: white;
  border-radius: 21px;
  border: 2px solid #EE2641;
  position: relative;
}

.navegar {
  display: flex;
  justify-content: space-between; /* Botões ficam alinhados nos extremos */
  align-items: center;
  margin: 50px; /* Margens padrão para espaços em telas maiores */
  gap: 20px; /* Adiciona espaçamento entre os botões */
}

/* Responsividade para telas menores */
@media (max-width: 768px) {
  .navegar {
    flex-direction: column; /* Empilha os botões verticalmente */
    margin: 20px; /* Reduz margens em telas menores */
    gap: 15px; /* Diminuir o espaço entre os botões */
  }

  .button-voltar,
  .button-cadastrar {
    width: 250px;
  }
}

@media (max-width: 480px) {
  .button-voltar,
  .button-cadastrar {
    height: 40px; /* Diminui a altura dos botões */
    font-size: 14px; /* Reduz o tamanho do texto */
  }

  .navegar {
    margin: 10px; /* Margens ainda menores para telas muito estreitas */
  }
}
</style>