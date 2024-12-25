<template>
  <BarraSuperior />
  <BotaoRegistroAutomatico />
  <Formulario />
  <ConfirmForm />
</template>

<script>
import BarraSuperior from '../components/Register/BarraSuperior.vue';
import BotaoRegistroAutomatico from '../components/Register/BotaoRegistroAutomatico.vue';
import Formulario from '../components/Register/Formulario.vue';
import ConfirmForm from "../components/Register/ConfirmForm.vue";
export default {
  name: "Registro",
  components: {
    BarraSuperior,
    BotaoRegistroAutomatico,
    Formulario,
    ConfirmForm,
  },
};
</script>

<style scoped>
/* Adicione estilos específicos para Registro.vue */
</style>
