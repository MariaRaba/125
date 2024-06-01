import './style.scss';
import { createApp } from 'vue';
import * as VueRouter from 'vue-router';

import App from './App.vue';
import Home from './pages/Home.vue';
import RickAndMorty from './pages/RickAndMorty.vue';

const routes = [
 {path: '/', component: Home},
 {path: '/rickandmorty', component: RickAndMorty},
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');