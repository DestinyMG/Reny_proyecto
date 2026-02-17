// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
// Aquí importas tus componentes (ejemplo)
import HelloWorld from '../components/HelloWorld.vue'
import Login from '../views/Login.vue'
import BaseAdmin from '../components/BaseAdmin.vue'
import CalculoII from '../views/CalculoII.vue'
import CalculoX from '../views/CalculoX.vue'

const routes = [


    { path: '/', name: 'Home', component: HelloWorld },

    // {
    //   path: '/about',
    //   name: 'About',
    //   component: () => import('../components/About.vue') // Lazy loading
    // }
    { path: '/login', name: 'Login', component: Login },
    { path: '/admin', name: 'BaseAdmin', component: BaseAdmin },
    { path: '/CalculoII', name: 'CalculoII', component: CalculoII },
    { path: '/CalculoX', name: 'CalculoX', component: CalculoX },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router