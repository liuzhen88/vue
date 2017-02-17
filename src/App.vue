<template>
    <div id="app">
    	<headerTitle></headerTitle>
    	<div class="meun-list-left">
    		<meun></meun>
    	</div>
    	<div class="meun-list-right">
        	<router-view></router-view>
    	</div>
    </div>
</template>

<script>
import HeaderTitle from './components/header';
import Meun from './components/meun';

export default {
	name:'app',
	components:{
		HeaderTitle,
		Meun
	}
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
	font-family: "微软雅黑";
}
.meun-list-left{
	width: 180px;
	min-height: 1000px;
	height: auto;
	position: absolute;
	left: 0;
	top: 44px;
	background: #404040;
	display: block;
}
.meun-list-right{    
    position: absolute;
    left: 190px;
   	top: 44px;
   	right: 0;
}
.time-container{
	padding: 10px;
}
.selection{
	float: left;
	margin-right: 20px;
	margin-top: 10px;
	margin-bottom: 10px;
	font-size: 12px;
	color: #666;
}
#search{
	margin-top: 10px;
	margin-bottom: 10px;
	float: left;
}
.select{
	width: 100px;
	height: 25px;
	border:solid #d9d9d9 1px;
	border-radius: 4px;
	font-size: 12px;
	color: #666;
}
</style>
