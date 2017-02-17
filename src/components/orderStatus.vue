<template>
	<div>
		<div>订单状态表</div>
		<button @click="increment">click me</button>
		<div>{{ $store.state.count }}</div>
	</div>
</template>

<script>
import config from '../config';
export default {
	name:'orderStatus',
	methods:{
		increment(){
			this.$store.dispatch('add');
		},
		changeTitle(){
			this.$store.dispatch('changeTitle',config.tableName.orderStatus);
		}
	},
	created(){
		this.changeTitle();
	}
}
</script>

<style>
	
</style>