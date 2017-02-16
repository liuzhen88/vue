<template>
	<ul class="meun-container">
		<li class="meun-list" v-for="item in meunList">
			<router-link :to="{
				path:item.path
			}">
				{{ item.name }}				
			</router-link>
		</li>
	</ul>
</template>

<script>
export default {
	name:'meun',
	data (){
		return {
			meunList:[
				{
					path:'orderStatus',
					name:'订单状态表'
				},
				{
					path:'store',
					name:'存量动态表'
				},
				{
					path:'dayTable',
					name:'日明细报表'
				},
				{
					path:'summaryTable',
					name:'日汇总表'
				},
				{
					path:'dayUnqualify',
					name:'日不合格品统计表'
				},
				{
					path:'workerPerformance',
					name:'工人绩效表'
				},
				{
					path:'productReport',
					name:'生产量报表'
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
</style>