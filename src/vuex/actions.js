const actions = {
	changeTitle(context, title){
		context.commit('changeTitle', title);
	},
	selectDetail(context, data){
		context.commit('selectMutation', data);
	}
}

module.exports = actions;