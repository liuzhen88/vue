import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		lss:'Tom',
		count:1,
		title:'合绳日明细报表'
	},
	mutations:{
		add(state){
			state.count++;
		}
	},
	actions:{
		add(context){
			context.commit('add');
		}
	}
});

export default store;