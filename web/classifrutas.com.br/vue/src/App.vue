<template>
  <div id="app">

    <router-view></router-view>

    <!-- Footer -->
    <footer class="bg-dark text-white py-4 mt-5">
      <div class="container text-center">
        <p>© 2024 ClassiFrutas - Todos os direitos reservados</p>
      </div>
    </footer>
  </div>
</template>

<script>

let currentController = new AbortController();
export default {
  name: "App",
};
</script>

<style src="./GlobalStyles/Home.css">

</style>
