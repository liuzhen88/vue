const mutations = {
	changeTitle(state,title){
		state.title = title;
	},
	selectMutation(state, data){
		state.orderStatus.orderNum = data.ddh;
		state.orderStatus.diameterStruct = data.jgzj;
	}
}

module.exports = mutations;