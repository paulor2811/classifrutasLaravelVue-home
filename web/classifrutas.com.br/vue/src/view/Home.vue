<template>
  <CompBarraSuperior />
  <CompCabecalho />
  <CompVideoSection />
  <CompMenuBusca />
  <CompCategorias />
  <CompAnuncio />
  <CompMaisBuscados />
  <CompDiretoRoca />
  <CompTemporadaPessego />
  <CompMercadoFlores />
  <CompInsumos />
  <CompParceiros />
</template>

<script>
import CompBarraSuperior from '../components/Home/BarraSuperior.vue';
import CompCabecalho from '../components/Home/Cabecalho.vue';
import CompVideoSection from '../components/Home/VideoSection.vue';
import CompMenuBusca from '../components/Home/MenuBusca.vue';
import CompCategorias from '../components/Home/Categorias.vue';
import CompAnuncio from '../components/Home/Anuncios.vue';
import CompMaisBuscados from '../components/Home/MaisBuscados.vue';
import CompDiretoRoca from '../components/Home/DiretoRoca.vue';
import CompTemporadaPessego from '../components/Home/TemporadaPessego.vue';
import CompMercadoFlores from '../components/Home/MercadoFlores.vue';
import CompInsumos from '../components/Home/Insumos.vue';
import CompParceiros from '../components/Home/Parceiros.vue';

export default {
  name: "Home",
  components: {
    CompBarraSuperior,
    CompCabecalho,
    CompVideoSection,
    CompMenuBusca,
    CompCategorias,
    CompAnuncio,
    CompMaisBuscados,
    CompDiretoRoca,
    CompTemporadaPessego,
    CompMercadoFlores,
    CompInsumos,
    CompParceiros,
  },
};
</script>

<style scoped>
</style>
