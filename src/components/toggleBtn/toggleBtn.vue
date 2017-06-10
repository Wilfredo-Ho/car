<template>
  	<div class="toggleBtn-wrapper">
		<button type="button" class="btn btn-selfWhite" @click="toggle"><icon :name="iconName" scale=1.1></icon></button>
		<ul class="breadcrumb">
			<li v-for="(item,index) in menu" :class="{active: index===(menu.length-1)}">{{item}}</li>
			<!-- <li>{{ parentItem }}</li>
			<li class="active">{{ currentItem }}</li> -->
		</ul>  		
  	</div>
</template> 
 
<script> 
export default { 
	props: {
		menu: {
			type: Array,
			default: []
		}
	},
	data () { 
		return { 
			iconName: 'outdent'
		}
	},
	methods: {
		toggle() {
			if(this.iconName === 'indent'){
				this.iconName = 'outdent';
				this.$emit('toggle')
				return;
			}
			this.iconName = 'indent'
			this.$emit('toggle')
		}
	}
}; 
</script> 
 
<style scoped> 
.toggleBtn-wrapper{

}
.btn-selfWhite{
	display: inline-block;
	padding: 12px 11px 7px;
	outline: none;
	background-color: #fff;
	color: #2A80C9;
	border: none;
	border-radius: 0;
	border-left: 1px solid #d9dfe5;
	border-right: 1px solid #d9dfe5;
}
.breadcrumb{
	display: inline-block;
	background-color: #fff;
	height: 42px;
	line-height: 42px;
	padding: 0 15px;
	margin-bottom: 0px;
}
</style> 