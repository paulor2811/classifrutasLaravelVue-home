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
</style>
