import { createApp } from 'vue';
import App from './App.vue';
//import './styles/style.scss';
import { store } from './vuex/store.js';
//import Vue from 'vue';
import router from "./router/router";


//Vue.config.productionTip = false;
//createApp(App).mount('#app');

createApp(App).mount('#app');
createApp(App).use(store);
createApp(App).use(router);

//new Vue({
//	render: h => h(App),
//	store
//}).$mount('#app');

//createApp({
//	el: App,
//	store: store,
//}).mount('#app');
