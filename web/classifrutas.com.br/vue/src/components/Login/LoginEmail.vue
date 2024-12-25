<template>
  <section>
    <div class="container d-flex flex-column justify-content-center">

      <!-- Campo Email -->
      <div class="field email-field">
        <label for="id-email" class="label">email</label>
        <div class="input-wrapper">
          <input
              type="text"
              id="id-email"
              class="text-input"
          />
        </div>
      </div>

      <!-- Campo Senha -->
      <div class="field pwd-field">
        <label for="id-pwd" class="label">senha super secreta</label>
        <div class="input-wrapper">
          <input
              type="password"
              id="id-pwd"
              class="text-input"
              placeholder="no mínimo 6 caracteres"
          />
        </div>
      </div>

      <!-- Campo Continuar Conectado -->
      <div class="field checkbox-field">
        <label class="checkbox-label">
          <input type="checkbox" v-model="conectado" class="checkbox-input" />
          continuar conectado
        </label>
      </div>

      <!-- Botão Entrar -->
      <div class="signup-button">
        <button class="button" @click="signupHandleClick">
          entrar
        </button>
      </div>

      <!-- Esqueci a Senha -->
      <div class="link-container">
        <a href="#" class="forgot-pwd-link">esqueci a senha</a>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "LoginEmail",
  data() {
    return {
      email: "", //Armazena o email digitado pelo usuário
    };
  },
  methods: {
    handleClick() {
      console.log("Email: ", this.email);
    },
  },
}
</script>

<style scoped>
.container {
  height: auto;
  width: 383px;
  margin: 0 auto;
  padding: 0 15px;
}

.field {
  margin-bottom: 15px;
}

.checkbox-field {
  display: flex;
  align-items: center;
}

.checkbox-label {
  font-size: 14px;
  line-height: 1.5;
  font-family: Arial;
  position: relative;
}

.checkbox-input {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid black;
  border-radius: 3px;
  margin-right: 10px;
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

.label {
  display: block;
  font-size: 14px;
  font-weight: bold;
  color: #333;
}

.input-wrapper {
  display: flex;
  height: 48px;
  align-items: center;
  border: 1px solid #E2E0E2;
  border-radius: 20px;
  padding: 2px 2px;
  background-color: #fff;
}

.text-input {
  flex: 1;
  border: none;
  height: 40px;
  font-size: 16px;
  padding: 1px;
  outline: none;
  border-radius: 20px;
}

.text-input::placeholder {
  color: #999;
}

/* Responsividade */
@media (max-width: 768px) {
  .label {
    font-size: 12px;
  }

  .text-input {
    font-size: 14px;
  }

  .input-wrapper {
    padding: 5px;
  }

  .container {
    padding: 0 10px;
  }

  .field {
    margin-bottom: 10px;
  }
}

@media (max-width: 480px) {
  .label {
    font-size: 14px;
  }

  .text-input {
    font-size: 12px;
  }

  .input-wrapper {
    padding: 5px;
  }

  .container {
    width: 100%;
  }
}

.button {
  width: 100%;
  height: 48px;
  border-radius: 20px;
  border: none;
  background-color: #EE2641;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  color: white;
  margin-top: -10px;
}

.link-container {
  display: flex; /* Torna o container flexível */
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  margin-bottom: 60px;
}

a {
  color: #EE2641;
  font-family: Arial;
  font-size: 15px;
  text-decoration: none;
  font-weight: bold;
}
</style>
