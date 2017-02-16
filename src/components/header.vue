<template>
	<div>
		<div class="day-chart-title">
			{{ title }}
		</div>
	</div>
</template>

<style>
.day-chart-title{
	background: #00b9ff;
	color: #fff;
	width: 100%;
	height: 44px;
	line-height: 44px;
	text-align: center;
	font-size: 14px;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 999;
}	
</style>

<script>
export default {
	name:'header',
	data(){
		return {
			title:this.$store.state.title
		}
	}
}
</script>