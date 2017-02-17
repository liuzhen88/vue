<template>
	<div>存量动态表</div>
</template>

<script>
import config from '../config';
export default {
	name:'store',
	methods:{
		changeTitle(){
			this.$store.dispatch('changeTitle',config.tableName.store);
		}
	},
	created(){
		this.changeTitle();
	}
}
</script>

<style>
	
</style>