const actions = {
	add(context){
		context.commit('add');
	},
	changeTitle(context, title){
		context.commit('changeTitle', title);
	}
}

module.exports = actions;