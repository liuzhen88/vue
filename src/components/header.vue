<template>
	<div>
		<div>{{ title }}</div>
	</div>
</template>

<script>
export default {
	name:'head',
	data(){
		return {
			title:'头部'
		}
	},
	beforeCreate(){
		console.log('被创建之前');
	}
}
</script>