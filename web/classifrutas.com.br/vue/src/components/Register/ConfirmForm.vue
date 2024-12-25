<template>
  <section>
    <div class="container d-flex flex-column justify-content-center">
      <!-- Campo Receber Novidades -->
      <div class="field checkbox-field">
        <label class="checkbox-label">
          <input type="checkbox" v-model="receiveNews" class="checkbox-input" />
          aceito receber novidade do classifrutas
        </label>
      </div>

      <!-- Campo Aceitar Termos -->
      <div class="field checkbox-field">
        <label class="checkbox-label">
          <input type="checkbox" v-model="acceptTerms" class="checkbox-input" />
          Estou de acordo com os
          <span class="link-text">termos de serviço</span> e a
          <span class="link-text">política de privacidade</span> do Classifrutas
        </label>
      </div>
      <div class="signup-button">
        <button class="button" @click="handleClick">
          criar conta
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ConfirmForm",
  data() {
    return {
      name: '', //Nome do usuário
      phone: '', //Celular do usuário
      email: '', // E-mail do usuário
      password: '', // Senha do usuário
      tipo_usuario_id: 1, // Tipo do usuário
      tipo_anunciante_id: 2, // Tipo do anunciante
      uuid: "d68f4a4b-d775-431b-9437-5197f8c6bb8d", // UUID do usuário
      grupo_usuario_id: 3, // ID do grupo de usuário
      grupo_nome: "Grupo A", // Nome do grupo de usuário
      is_adm: true, // Indica se o usuário é admin


      receiveNews: false, // Estado para a checkbox de receber novidades
      acceptTerms: false, // Estado para a checkbox de aceitar termos
    };
  },
  methods: {
    async handleClick() {
      const formData = {
        tipo_usuario_id: this.tipo_usuario_id,
        tipo_anunciante_id: this.tipo_anunciante_id,
        uuid: this.uuid,
        name: this.name,
        nome_fantasia: this.name, // Se você quiser o nome fantasia como o nome
        email: this.email,
        password: this.password,
        grupo_usuario_id: this.grupo_usuario_id,
        grupo_nome: this.grupo_nome,
        is_adm: this.is_adm,
      }
      try {
        const response = await fetch('http://api.classifrutas.local:88/api/register-user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          console.log('Conta criada com sucesso:', data);
          // Realize ações adicionais após sucesso (ex: redirecionar, limpar campos)
        } else {
          console.error('Erro ao criar conta:', data);
        }
      } catch (error) {
        console.error('Erro ao enviar a requisição:', error);
      }
    },
  },
};
</script>

<style scoped>
.container {
  height: auto;
  width: 100%; /* Largura 100% para garantir que o formulário não ultrapasse a tela */
  max-width: 383px; /* Limite máximo de largura */
  margin: 0 auto; /* Centraliza o formulário */
  padding: 0 15px; /* Adiciona espaçamento interno */
}

.field {
  margin-bottom: 15px; /* Espaçamento entre os campos */
}

.checkbox-field {
  display: flex;
  align-items: center;
}

.checkbox-label {
  display: block; /* Garante que o label ocupe toda a largura */
  font-size: 14px;
  line-height: 1.5; /* Melhor espaçamento entre as linhas */
  font-family: Arial;
  position: relative; /* Para manipular o checkbox customizado */
}

.checkbox-input {
  appearance: none; /* Remove o estilo padrão do checkbox */
  -webkit-appearance: none; /* Para Safari */
  -moz-appearance: none; /* Para Firefox */
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 3px;
  margin-right: 10px; /* Espaçamento entre o checkbox e o texto */
  position: relative;
  cursor: pointer; /* Cursor em forma de mão */
  transition: background-color 0.3s, border-color 0.3s; /* Transição suave */
}

.checkbox-input:checked {
  background-color: #EE2641; /* Cor vermelha ao marcar */
  border-color: #EE2641; /* Alterar a borda para combinar com o fundo */
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
  height: 60px;
  border-radius: 20px;
  border: 3px solid #E2E0E2;
  background-color: #EE2641;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  color: white;
  margin-top: 20px; /* Espaço superior do botão */
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
