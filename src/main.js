import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';

// registrando o módulo/plugin no global view object
Vue.use(VueResource);
Vue.use(VueRouter);

//Cria instacia de VueRouter passando as rotas que seram configuradas
const router = new VueRouter({
  routes,
  mode: 'history'
});

//Associa a rota a Vue para que seja posssivel ser acessada de qualquer lugar da aplicação
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
