import Vue from 'vue';
import App from './App';
import store from './vuex/store';
import VueRouter from 'vue-router';
import routerConfig from './router';

Vue.use(VueRouter);


const router = new VueRouter({
	routes:routerConfig
});

/* eslint-disable no-new */
const app = new Vue({
	router,
	el:'#app',
	store,
	render: param => param(App)
});
