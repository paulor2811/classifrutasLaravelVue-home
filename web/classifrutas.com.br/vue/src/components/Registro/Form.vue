<template>
  <section>
    <div class="container d-flex flex-column justify-content-center">
      <!-- Campo Nome -->
      <div class="field name-field">
        <label for="id-name" class="label">nome completo</label>
        <div class="input-wrapper">
          <input
              type="text"
              id="id-name"
              v-model="username"
              class="text-input"
          />
        </div>
      </div>

      <!-- Campo Celular -->
      <div class="field phone-field">
        <label for="id-phone" class="label">celular</label>
        <div class="input-wrapper">
          <input
              type="text"
              id="id-phone"
              class="text-input"
              placeholder="de preferência o WhatsApp"
          />
          <img
              src="../../assets/site-assets/whatsapp-icon.png"
              alt="WhatsApp Icon"
              class="input-icon"
          />
        </div>
      </div>

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
        <label for="id-pwd" class="label">senha</label>
        <div class="input-wrapper">
          <input
              type="password"
              id="id-pwd"
              class="text-input"
              placeholder="no mínimo 6 caracteres"
          />
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container d-flex flex-column justify-content-center">
      <!-- Campo Receber Novidades -->
      <div class="field checkbox-field">
        <label class="checkbox-label">
          <input type="checkbox" v-model="conectado" class="checkbox-input" />
          aceito receber novidade do classifrutas
        </label>
      </div>

      <!-- Campo Aceitar Termos -->
      <div class="field checkbox-field">
        <label class="checkbox-label">
          <input type="checkbox" v-model="conectado" class="checkbox-input" />
          Estou de acordo com os termos de serviço  e a<br/>
          política de privacidade do Classifrutas
        </label>
      </div>

      <div class="signup-button">
        <button class="button" @click="handleClick">
          criar conta
        </button>
      </div>
      <a class="link-signup-text" href="http://classifrutas.local:88/login">já tenho uma conta</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "Formulario",
  data() {
    return {
      username: '', // Variável para armazenar o valor do campo nome de usuário
    };
  },
};
</script>

<style scoped>
.container {
  height: auto;
  width: 100%; /* Alterado para 100% para a largura se ajustar ao dispositivo */
  max-width: 383px; /* Mantém a largura máxima do formulário */
  margin: 0 auto; /* Centraliza o formulário */
  padding: 0 15px; /* Adiciona um pequeno espaçamento interno para telas menores */
}

.field {
  margin-bottom: 15px; /* Adiciona um espaço entre os campos */
}

.label {
  display: block; /* Garante que o label fique acima do input */
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
  outline: none;
  border-radius: 20px;
}

.input-icon {
  height: 30px; /* Reduz a altura do ícone para melhorar a responsividade */
  width: 30px; /* Ajusta a largura do ícone */
  margin-right: 10px; /* Espaço entre o input e o ícone */
}

.text-input::placeholder {
  color: #999;
  font-size: 14px;
}

/* Responsividade para dispositivos móveis */
@media (max-width: 768px) {
  .label {
    font-size: 12px; /* Ajusta o tamanho da fonte para telas menores */
  }

  .text-input {
    font-size: 14px; /* Ajusta o tamanho da fonte no campo de texto */
  }

  .input-wrapper {
    padding: 5px; /* Ajuste o padding para telas menores */
  }

  .input-icon {
    height: 30px; /* Ajusta o tamanho do ícone em telas pequenas */
    width: 30px;
  }

  .container {
    padding: 0 10px; /* Menos padding para telas muito pequenas */
  }

  .field {
    margin-bottom: 10px; /* Ajusta o espaço entre os campos */
  }
}

@media (max-width: 480px) {
  .label {
    font-size: 14px; /* Tamanho menor do texto do label em telas menores */
  }

  .text-input {
    font-size: 12px; /* Ajuste do tamanho da fonte no input */
  }

  .input-wrapper {
    padding: 5px; /* Ajusta o padding ainda mais para telas menores */
  }

  .input-icon {
    height: 30px; /* Ajusta o tamanho do ícone em telas muito pequenas */
    width: 30px;
  }

  .container {
    width: 100%; /* Faz o container ocupar 100% da tela em dispositivos muito pequenos */
  }
}

.link-text {
  text-decoration: underline;
  color: #007BFF; /* Cor azul para parecer um link */
  cursor: pointer; /* Muda o cursor ao passar o mouse */
}

.link-text:hover {
  text-decoration: none; /* Remove o sublinhado ao passar o mouse */
}

.button {
  width: 100%; /* Ajusta o botão para 100% da largura do formulário */
  height: 48px;
  border-radius: 20px;
  border: none;
  background-color: #EE2641;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  color: white;
  margin-top: 20px; /* Espaço superior do botão */
}
a.link-signup-text {
  display: block; /* Garante que o link ocupe o espaço do contêiner */
  width: 100%; /* Faz o link ocupar toda a largura disponível */
  text-align: center; /* Centraliza o texto do link */
  color: black;
  font-weight: bold;
  font-size: 15px;
  font-family: Arial;
}
/* Responsividade para dispositivos móveis */
@media (max-width: 768px) {
  .checkbox-label {
    font-size: 14px; /* Ajusta o tamanho da fonte para telas menores */
  }

  .button {
    font-size: 14px; /* Ajusta o tamanho da fonte do botão */
    height: 60px; /* Ajusta a altura do botão */
  }

  .container {
    padding: 0 10px; /* Menos padding para telas menores */
  }
}

@media (max-width: 480px) {
  .checkbox-label {
    font-size: 14px; /* Reduz o tamanho da fonte em telas muito pequenas */
  }

  .button {
    font-size: 13px; /* Ajusta o tamanho da fonte em telas muito pequenas */
    height: 50px; /* Ajusta a altura do botão */
  }

  .container {
    width: 100%; /* Faz o container ocupar 100% da largura em telas pequenas */
  }
}
</style>
