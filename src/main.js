import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import headerComponent from './components/header.vue';
import testComponent from './components/test.vue';

Vue.use(VueRouter);


const routes = [
	{
		path:'/header',
		name:'header',
		component:headerComponent
	},
	{
		path:'/test',
		name:'test',
		component:testComponent
	},
	{
		path:'*',
		component:headerComponent
	}
];

const router = new VueRouter({
	routes:routes
});


/* eslint-disable no-new */
const app = new Vue({
	router,
	el:'#app',
	render: h => h(App)
});
