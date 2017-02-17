<template>
	<div class="time-container">
		<div class="selection">
			<span>订单号:</span>
			<select class="select" id='ddh'>
				<option>全部</option>
				<option v-for="item in $store.state.orderStatus.orderNum">
					{{ item }}
				</option>
			</select>
		</div>
		<div class="selection">
			<span>结构直径:</span>
			<select class="select" id='jgzj'>
				<option>全部</option>
				<option v-for="item in $store.state.orderStatus.diameterStruct">
					{{ item }}
				</option>
			</select>
		</div>
		<div class="selection">
			<span>状态:</span>
			<select class="select" id='zt'>
				<option>全部</option>
				<option>未完工</option>
				<option>已完工</option>
				<option>已撤销</option>
			</select>
		</div>
	</div>
</template>

<script>
import $ from 'jquery';
import config from '../config';

const serverUrl = config.serverUrl + '/getOrderStatusSelect';

export default {
	name:'orderStatus',
	methods:{
		changeTitle(){
			this.$store.dispatch('changeTitle',config.tableName.orderStatus);
		},
		getSelectData(cb){
			$.ajax({
				url:serverUrl,
				type:'get',
				dataType:'jsonp',
				jsonp:'callback',
				success:function(data){
					cb(data);
				}
			});
		}
	},
	created(){
		const that = this;
		this.changeTitle();
		this.getSelectData(function(data){
			that.$store.dispatch('selectDetail',data);
		});
	}
}
</script>

<style>
	
</style>