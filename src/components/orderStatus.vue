<template>
	<div>
		<div>订单状态表</div>
		<button @click="increment">click me</button>
		<div>{{ count }}</div>
	</div>
</template>

<script>
export default {
	name:'orderStatus',
	data(){
		return {
			count:this.$store.state.count
		}
	},
	methods:{
		increment(){
			this.$store.dispatch('add');
			this.count = this.$store.state.count;
		}
	}
}
</script>

<style>
	
</style>