<script>
export default {
  name: "ConfirmarDadosEmpresa",
  data() {
    return {
      selected: "autonomo", // Estado inicial (opção padrão)
    };
  },
  methods: {
    selectOption(option) {
      this.selected = option; // Atualiza a seleção
    },
    teste(option) {
      this.selected = option;
    }
  },
}
</script>

<template>
  <section>
    <div class="container d-flex justify-content-center align-items-center">
      <div class="formulario">
        <img src="../../../../../assets/site-assets/empresa-icon.png" alt="produtor" class="produtor me-2" />
        <h4>confirme aqui<br/>os dados da empresa</h4>
        <div class="toggle-container">
          <!-- Botões de Alternância -->
          <div class="toggle-buttons">
            <button
                :class="['toggle-button', { active: selected === 'autonomo' }]"
                @click="selectOption('autonomo')"
            >
              atacado
            </button>
            <button
                :class="['toggle-button', { active: selected === 'representante' }]"
                @click="selectOption('representante')"
            >
              varejo
            </button>
            <button
                :class="['toggle-button', { active: selected === 'teste' }]"
                @click="selectOption('teste')"
            >
              transporte
            </button>
          </div>
        </div>
        <div class="cnpj">
          <label for="id-cnpj" class="label">CNPJ</label>
          <div class="input-wrapper">
            <input
                type="text"
                id="id-cnpj"
                v-model="cnpj"
                class="text-input"
            />
          </div>
        </div>
        <div class="razao">
          <label for="id-razao" class="label">razão social</label>
          <div class="input-wrapper">
            <input
                type="text"
                id="id-razao"
                v-model="razao"
                class="text-input"
            />
          </div>
        </div>
        <div class="nomef">
          <label for="id-nomef" class="label">CNPJ</label>
          <div class="input-wrapper">
            <input
                type="text"
                id="id-nomef"
                v-model="nomef"
                class="text-input"
            />
          </div>
        </div>
        <div class="seguimento">
          <label for="id-seguimento" class="label">seguimento</label>
          <div class="input-wrapper">
            <select id="opcoes" name="opcoes">
              <option value="opcao1">Opção 1</option>
              <option value="opcao2">Opção 2</option>
              <option value="opcao3">Opção 3</option>
            </select>
          </div>
        </div>
        <div class="permissionario">
          <label for="id-cnpj" class="label">permissionário do CEASA</label>
          <div class="input-wrapper">
            <select id="opcoes" name="opcoes">
              <option value="opcao1">Opção 1</option>
              <option value="opcao2">Opção 2</option>
              <option value="opcao3">Opção 3</option>
            </select>
          </div>
        </div>
        <div class="razao">

        </div>
        <div class="nome fantasia">

        </div>
        <div class="seguimento">

        </div>
        <div class="permissionário do CEASA">

        </div>
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
        <div class="field checkbox-field">
          <label class="checkbox-label">
            <input type="checkbox" v-model="conectado" class="checkbox-input" />
            parceiro iCEASA ?
          </label>
          <img src="../../../../../assets/site-assets/iceasa-logo.png" alt="produtor" class="iceasa-logo me-2" />
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Contêiner principal */
.container {
  width: 100%;
  max-width: 440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Estilo do formulário */
.formulario {
  width: 100%;
  margin-top: 30px;
}
.label {
  display: block;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.input-wrapper {
  display: flex;
  height: 48px;
  width: 100%;
  max-width: 376px;
  align-items: center;
  border: 1px solid #E2E0E2;
  border-radius: 12px;
  padding: 2px 2px;
  background-color: #fff;
  margin-bottom: 25px;
}

.text-input {
  flex: 1;
  border: none;
  height: 40px;
  font-size: 16px;
  outline: none;
  border-radius: 12px;
  margin: 0 10px;
}

/* Toggle Container e Botões */
.toggle-container {
  width: 100%;
  margin: 0 auto 25px;
}

.toggle-buttons {
  display: flex;
  justify-content: space-around;
  border: 1px solid #ccc;
  border-radius: 25px;
  padding: 5px;
}

.toggle-button {
  flex: 1;
  max-width: 124px;
  padding: 10px 15px;
  background-color: white;
  color: black;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  outline: none;
  height: fit-content;
  transition: all 0.3s ease;
  text-align: center;
}

.toggle-button.active {
  background-color: #5c1414;
  color: white;
  font-weight: bold;
}

.toggle-button:not(.active) {
  background-color: white;
  color: black;
}

img {
  margin-bottom: 20px;
}

h4 {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
  line-height: 1.4;
}

/* Botão de ajuda */
.button-ajuda {
  height: 36px;
  width: 120px;
  background-color: lightskyblue;
  color: white;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  display: block;
  margin: 0 auto 10px;
}

.nao-achou-empresa {
  background-color: #F2F2F2;
  border: 1px solid #D8D8D8;
  height: auto;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  margin-top: 20px;
}

.text1 {
  font-weight: bold;
  font-family: Arial, sans-serif;
  margin-bottom: 5px;
}

.text2 {
  font-family: Arial, sans-serif;
  font-size: 13px;
  color: #555;
}

/* Checkbox */
.checkbox-field {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 14px;
  background-color: #FFFAE8;
  margin-top: 20px;
}

.checkbox-label {
  font-size: 14px;
  line-height: 1.5;
  font-family: Arial, sans-serif;
  display: flex;
  align-items: center;
}

.checkbox-input {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid black;
  border-radius: 3px;
  margin-right: 8px;
  position: relative;
  cursor: pointer;
}

.checkbox-input:checked {
  background-color: #EE2641;
  border-color: #EE2641;
}

.checkbox-input:checked::after {
  content: '';
  display: block;
  position: absolute;
  top: 2px;
  left: 5px;
  width: 6px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

.iceasa-logo {
  width: 125px;
  height: auto;
}

#opcoes {
  width: calc(100% - 20px);
  max-width: 376px;
  height: 45px;
  background-color: white;
  border-radius: 12px;
  border: none;
  padding: 0 10px;
}

/* Responsividade */

/* Ajustando para telas pequenas (até 768px) */
@media (max-width: 768px) {
  .formulario {
    margin-top: 20px;
    padding: 15px;
  }

  h4 {
    font-size: 18px;
    margin-bottom: 20px;
  }

  .toggle-container {
    margin-bottom: 20px;
  }

  .toggle-button {
    font-size: 12px;
    padding: 8px 10px;
  }

  .text1 {
    font-size: 14px;
  }

  .text2 {
    font-size: 12px;
  }

  .nao-achou-empresa {
    padding: 10px;
    font-size: 14px;
  }

  .button-ajuda {
    height: 30px;
    font-size: 12px;
  }

  .checkbox-label {
    font-size: 12px;
  }

  .input-wrapper {
    height: 44px;
    max-width: calc(100% - 10px);
    width: 100%;
  }

  #opcoes {
    height: 40px;
  }
}

/* Ajustando para telas maiores (desktops superiores a 1024px) */
@media (min-width: 1024px) {
  .formulario {
    max-width: 440px;
  }

  .toggle-buttons {
    justify-content: space-between;
  }

  .toggle-button {
    margin: 0 5px;
  }
}
</style>