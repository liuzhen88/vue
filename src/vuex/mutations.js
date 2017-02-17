const mutations = {
	add(state){
		state.count++;
	},
	changeTitle(state,title){
		state.title = title;
	}
}

module.exports = mutations;