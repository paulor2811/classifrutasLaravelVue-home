<script>
export default {
  name: "PagePessoaFisica",
  data() {
    return {
      selected: "autonomo", // Estado inicial (opção padrão)
    };
  },
  methods: {
    selectOption(option) {
      this.selected = option; // Atualiza a seleção
    },
  },
};
</script>

<template>
  <section>
    <div class="container d-flex justify-content-center align-items-center">
      <div class="formulario">
        <img src="../../../../../assets/site-assets/perfil-icon.png" alt="produtor" class="produtor me-2" />
        <h4>confirme aqui<br/>seus dados pessoais</h4>
        <div class="toggle-container">
          <!-- Botões de Alternância -->
          <div class="toggle-buttons">
            <button
                :class="['toggle-button', { active: selected === 'autonomo' }]"
                @click="selectOption('autonomo')"
            >
              autônomo
            </button>
            <button
                :class="['toggle-button', { active: selected === 'representante' }]"
                @click="selectOption('representante')"
            >
              representante
            </button>
          </div>
        </div>
        <div class="form-autonomo row">
          <div class="nome">
            <label for="id-name" class="label">nome completo</label>
            <div class="input-wrapper">
              <input
                  type="text"
                  id="id-name"
                  v-model="nome"
                  class="text-input"
              />
            </div>
          </div>
          <div class="cpf">
            <label for="id-name" class="label">cpf</label>
            <div class="input-wrapper">
              <input
                  type="text"
                  id="id-name"
                  v-model="nome"
                  class="text-input"
              />
            </div>
          </div>
          <div class="row">
            <div class="data">
              <label for="id-data" class="label">data de nascimento</label>
              <div class="input-wrapper-nasc">
                <input type="text" id="id-data" v-model="dataNascimento" class="text-input-nasc" />
              </div>
            </div>
            <div class="tel">
              <label for="id-tel" class="label">celular</label>
              <div class="input-wrapper-tel">
                <input type="text" id="id-tel" v-model="telefone" class="text-input-tel" />
              </div>
            </div>
          </div>
        </div>
        <div class="form-representate row" v-if="selected === 'representante'">
          <div class="cnpj">
            <label for="id-name" class="label">CNPJ da empresa representante</label>
            <div class="input-wrapper-cnpj">
              <input
                  type="text"
                  id="id-name"
                  v-model="nome"
                  class="text-input-cnpj"
              />
            </div>
          </div>
          <label for="id-empresa" class="empresa-label">SAVIOLLI & SAVIOLLI</label>
          <div class="nao-achou-empresa">
            <p class="text1">não encontrou a empresa?</p>
            <button class="button-ajuda" @click="ajudaClick">
              ajuda
            </button>
            <p class="text2">
              clique nesse botão para<br/>
              podermos te ajudar
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Estilo para o formulário principal */
.formulario {
  width: 100%;
  max-width: 376px;
  margin-top: 50px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  background: #fff;
}

/* Estilo para a imagem no topo */
.produtor {
  display: block;
  margin: 0 auto 20px;
  width: 80px; /* Ajuste para tamanho confortável */
  height: auto;
}

/* Título principal */
h4 {
  font-size: 22px;
  text-align: center;
  font-family: Arial, sans-serif;
  font-weight: bold;
  margin-bottom: 30px;
  line-height: 1.5;
}

/* Estilo do container de toggle */
.toggle-container {
  margin-bottom: 30px;
  text-align: center;
}

.toggle-buttons {
  display: flex;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 25px;
  overflow: hidden;
}

.toggle-button {
  flex: 1;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: white;
  color: black;
}

.toggle-button.active {
  background-color: #5c1414;
  color: white;
}

.toggle-button:not(.active) {
  background-color: white;
}

/* Container dos campos de formulário */
.row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
}

/* Campos de entrada e seus labels */
.label {
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
  display: block;
}

.input-wrapper,
.input-wrapper-nasc,
.input-wrapper-tel,
.input-wrapper-cnpj {
  display: flex;
  align-items: center;
  border: 1px solid #E2E0E2;
  border-radius: 12px;
  background: white;
  padding: 8px 12px;
  height: 48px;
  margin-bottom: 15px;
  width: 100%;
}

.text-input,
.text-input-nasc,
.text-input-tel,
.text-input-cnpj {
  width: 100%;
  border: none;
  outline: none;
  background: none;
  font-size: 16px;
  height: 100%;
}

/* Ajustes exclusivos para Data e Telefone */
.input-wrapper-nasc,
.input-wrapper-tel {
  width: calc(50% - 10px); /* Divide os campos igualmente */
}

.text-input-nasc,
.text-input-tel {
  font-size: 14px;
}

/* CNPJ no formulário do representante */
.input-wrapper-cnpj {
  width: 100%;
}

/* Estilo para empresa e ajuda */
.empresa-label {
  font-size: 16px;
  font-family: Arial, sans-serif;
  font-weight: bold;
  margin-bottom: 15px;
  display: block;
  text-align: center;
}

.nao-achou-empresa {
  text-align: center;
  background-color: #f2f2f2;
  border: 1px solid #d8d8d8;
  border-radius: 10px;
  padding: 15px;
}

.text1 {
  font-weight: bold;
  margin-bottom: 10px;
}

.text2 {
  font-size: 14px;
  color: #666;
  margin-top: 10px;
}

.button-ajuda {
  display: inline-block;
  background-color: lightskyblue;
  color: white;
  padding: 8px 15px;
  border-radius: 8px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.button-ajuda:hover {
  background-color: #007FFF;
}

/* Responsividade */

/* Ajustes para dispositivos menores que 768px */
@media (max-width: 768px) {
  .formulario {
    padding: 15px;
  }

  .toggle-buttons {
    flex-direction: column;
  }

  .toggle-button {
    padding: 10px 15px;
    font-size: 12px;
  }

  /* Reduz os campos divididos (Data e Telefone) */
  .input-wrapper-nasc,
  .input-wrapper-tel {
    width: 100%;
  }

  .empresa-label,
  .text1,
  .text2 {
    font-size: 14px;
  }

  .button-ajuda {
    width: 100%;
  }
}

/* Ajustes para desktops */
@media (min-width: 1200px) {
  .formulario {
    max-width: 450px;
  }

  h4 {
    font-size: 24px;
  }
}
</style>