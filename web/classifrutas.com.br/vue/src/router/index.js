import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../view/Home.vue'), // Página inicial
    },
    {
        path: '/registrar',
        name: 'Registro',
        component: () => import('../view/Registro.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../view/Login.vue')
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // Use `import.meta.env.BASE_URL` no Vue 3
    routes,
});

export default router;
