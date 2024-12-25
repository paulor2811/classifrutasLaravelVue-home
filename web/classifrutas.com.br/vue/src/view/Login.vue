<script>
import BarraSuperior from '../components/Login/BarraSuperior.vue';
import PageTitle from "../components/Login/PageTitle.vue";
import BotaoRegistroAutomatico from '../components/Login/BotaoRegistroAutomatico.vue';
export default {
  name: "Login",
  components: {
    BarraSuperior,
    PageTitle,
    BotaoRegistroAutomatico,
  },
};
</script>

<template>
  <BarraSuperior />
  <PageTitle />
  <BotaoRegistroAutomatico />
</template>

<style scoped>

</style>