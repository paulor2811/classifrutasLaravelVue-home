<script>
import Cabecalho from "../../GeralComponents/Cabecalho.vue";
import Navegacao from "../../GeralComponents/Navegacao.vue";
export default {
  name: "PageDados",
  components: {
    Cabecalho,
    Navegacao,
  },
  data() {
    return {
      currentRoute: this.$route.path,
    };
  },
  computed: {
    isDadosRoute() {
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

  <router-view></router-view>

  <Cabecalho v-if="isDadosRoute" :key="$route.fullPath"/>

  <section v-if="isDadosRoute" :key="$route.fullPath">
    <div class="container d-flex justify-content-center align-items-center">
      <div class="row">
        <div class="text-div col-6">
          <h4>
            confirme seus dados para ter<br/>
            acesso completo ao<br/>
            classifrutas
          </h4>
        </div>
        <div class="campos-div col-6">
          <div class="campo" >
            <div class="outro-campo">
              <div class="perfil-usuario">
                <div class="row linha">
                  <div class="col-6 imagemm">
                    <img
                        src="../../../assets/site-assets/email-validado-icon.png"
                        alt="Perfil de User"
                        class="email-image-icon"
                    />
                  </div>
                  <div class="col-6 ajustar">
                    <h4 class="campo-titulo">email</h4>
                    <p class="paragraph">validado</p>
                  </div>
                </div>
              </div>
              <div class="perfil-usuario">
                <div class="row linha">
                  <div class="col-6 imagemm">
                    <img
                        src="../../../assets/site-assets/endereco-validado-icon.png"
                        alt="Perfil de User"
                        class="email-image-icon"
                    />
                  </div>
                  <div class="col-6 ajustar">
                    <h4 class="campo-titulo">Endereço</h4>
                    <p class="paragraph">validado</p>
                  </div>
                </div>
              </div>
              <div class="perfil-usuario">
                <div class="row linha">
                  <div class="col-6 imagemm">
                    <img
                        src="../../../assets/site-assets/user-perfil-icon.png"
                        alt="Perfil de User"
                        class="perfil-icon"
                    />
                  </div>
                  <div class="col-6 ajustar">
                    <h4 class="campo-titulo">perfil do usuário</h4>
                    <p class="paragraph">pendente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Navegacao />
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  margin-top: 130px;
}

/* Ajustando a largura da linha para permitir responsividade */
.row {
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  justify-content: center;
}
.imagemm {
  width: 45px;
}
/* Texto principal */
.text-div h4 {
  font-family: Arial;
  font-size: 24px; /* Diminui em telas menores */
  font-weight: bold;
  text-align: center; /* Centralizado para telas menores */
}

/* Imagens */
.perfil-image-icon {
  width: 154px;
  height: auto;
}

.endereco-image-icon,
.email-image-icon {
  width: 32px;
  height: 32px;
  margin-top: 15px;
}

/* Ajuste dos campos */
.campos-div {
  margin-top: 20px; /* Dá espaçamento em telas menores */
}

.campo {
  margin-left: 0; /* Removida margem fixa */
  padding: 10px;
}
.perfil-usuario,
.dados-pessoais,
.endereco {
  width: 100%; /* Ocupa toda a largura disponível em telas menores */
  max-width: 450px; /* Limite máximo para não perder o design */
  margin-bottom: 30px;
  border: 1px solid #8080808C;
  border-radius: 20px;
  padding: 20px;
}

/* Estilização do texto interno */
.paragraph {
  margin-bottom: 10px;
  font-size: 16px;
  font-family: Arial;
}
.campo-titulo {
  font-size: 18px;
  font-weight: bold;
}

/* Ajuste nas linhas de conteúdo */
.linha {
  max-width: 450px; /* Respeita largura máxima */
  margin: 0 auto; /* Centraliza */
}
.ajustar {
  width: 100px; /* Largura dinâmica para telas menores */
  text-align: left;
}
.mudar {
  margin: 10px 0;
}
.email-image-icon {
  display: block;
  margin: 0 auto;
  width: 45px;
}

/* Responsividade para telas menores (até 768px) */
@media (max-width: 768px) {
  .container {
    margin-top: 80px; /* Reduzido para melhor visibilidade em dispositivos menores */
  }
  .text-div {
    width: 100%;
  }
  .text-div h4 {
    font-size: 20px; /* Reduz o tamanho do texto */
    margin-bottom: 15px;
  }

  .perfil-usuario,
  .dados-pessoais,
  .endereco {
    width: 100%; /* Ocupa 100% da largura */
    height: 150px;
    padding: 15px; /* Reduz um pouco o padding */
    font-size: 14px; /* Diminui o texto */
  }

  .linha {
    width: 100%; /* Ocupa toda a largura possível */
    text-align: center; /* Centraliza o texto */
  }
  .row {
    flex-direction: row;
    align-items: center;
    max-width: 100%;
  }
  .col-6 {
    margin-top: 20px;
    width: 100%;
  }
  .campo {
    text-align: center;
    margin-left: 0;
    padding: 10px;
  }
  .perfil-usuario {
    width: 100%;
  }
  .ajustar {
    width: 100px;
    max-width: 40%;
  }
  .email-image-icon {
    width: 45px;
    height: auto;
  }
  .perfil-icon {
    width: 90px;
    height: 30px;
  }
  .imagemm {
    width: 70px;
    margin-right: 60px;
    max-width: 40%;
    margin-bottom: 10px;
  }
}

/* Responsividade para telas maiores (acima de 1024px) */
@media (min-width: 1024px) {
  .container {
    margin-top: 130px;
  }

  .row {
    max-width: 80%;
  }

  .perfil-usuario,
  .dados-pessoais,
  .endereco {
    width: 450px; /* Respeita o limite */
    margin-bottom: 20px;
  }

  .navegar {
    flex-direction: row;
    justify-content: space-between;
    gap: 20px; /* Espaços maiores entre botões */
  }
}
</style>