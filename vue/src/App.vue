<template>
  <div id="app" class="vh-100 vw-100 d-flex flex-column justify-content-center align-items-center">
    <div class="text-center w-100">
      <h1 class="display-4 text-dark fw-bold mb-4 animate__animated animate__fadeInDown">Testando API</h1>

      <ul class="nav nav-tabs mb-4 justify-content-center" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link" :class="{ active: activeTab === 'hello' }" id="hello-tab" data-bs-toggle="tab" data-bs-target="#hello" type="button" role="tab" aria-controls="hello" aria-selected="true" @click="handleRequest('/hello', 'hello')">Hello World</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" :class="{ active: activeTab === 'log' }" id="log-tab" data-bs-toggle="tab" data-bs-target="#log" type="button" role="tab" aria-controls="log" aria-selected="false" @click="handleRequest('/log-test', 'log')">Test Log</button>
        </li>
      </ul>

      <div v-if="loading" class="d-flex justify-content-center my-4 animate__animated animate__fadeIn">
        <div class="spinner-border text-danger" role="status">
          <span class="visually-hidden">Carregando...</span>
        </div>
      </div>
      <p v-if="!loading" class="lead fs-4 text-secondary animate__animated animate__fadeIn">{{ message }}</p>
    </div>
  </div>
</template>

<script>
let currentController = new AbortController();

export default {
  data() {
    return {
      message: "Aguardando carregamento...",
      loading: false,
      activeTab: '',
    };
  },
  methods: {
    handleRequest(endpoint, tab) {
      // Abortar requisição anterior, se existir
      if (currentController) {
        currentController.abort();
      }

      // Criar novo controlador para a nova requisição
      currentController = new AbortController();
      this.fetchData(endpoint, tab, currentController.signal);
    },
    async fetchData(endpoint, tab, signal) {
      this.loading = true;
      this.activeTab = tab;
      this.message = "Aguardando carregamento...";

      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, { signal });
        const data = await response.json();

        // Simula tempo de carregamento
        setTimeout(() => {
          this.message = data.message;
          this.loading = false;
        }, 1000);
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log("Requisição abortada.");
        } else {
          console.error("Erro ao buscar a API:", error);
          this.message = "Erro ao buscar a API.";
          this.loading = false;
        }
      }
    },
  },
};
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

#app {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #ece9e6, #ffffff);
  color: #212529;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.nav-link.active {
  background-color: rgba(232, 54, 69, 0.98) !important;
  color: white !important;
  transition: background-color 0.3s ease-in-out;
}

.spinner-border {
  width: 4rem;
  height: 4rem;
}
</style>