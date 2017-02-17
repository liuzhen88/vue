<template>
	<ul class="meun-container">
		<li class="meun-list" v-for="item in meunList">
			<router-link active-class='active-router' :to="{
				path:item.path
			}">
				{{ item.name }}				
			</router-link>
		</li>
	</ul>
</template>

<script>
import config from '../config';
export default {
	name:'meun',
	data (){
		return {
			meunList:[
				{
					path:'orderStatus',
					name:config.tableName.orderStatus
				},
				{
					path:'store',
					name:config.tableName.store
				},
				{
					path:'dayTable',
					name:config.tableName.dayTable
				},
				{
					path:'summaryTable',
					name:config.tableName.summaryTable
				},
				{
					path:'dayUnqualify',
					name:config.tableName.dayUnqualify
				},
				{
					path:'workerPerformance',
					name:config.tableName.workerPerformance
				},
				{
					path:'productReport',
					name:config.tableName.productReport
				}
			]
		}
	}
}
</script>

<style>
.meun-container{
	list-style: none;
}	
.meun-list{
	padding-left: 24px;
	height: 42px;
	line-height: 42px;
	color: #999;
	font-size: 12px;
	cursor: pointer;
}
.meun-list:hover{
	color: #fff;
}
a{
	color: #999;
	text-decoration: none;
	display: inline-block;
	width: 100%;
	height: 100%;
}
.active-router{
	color: #fff;
}
</style>