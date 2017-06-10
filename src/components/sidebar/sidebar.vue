<template>
	<div class="sidebar">
		<div class="btn-wrapper">
			<div class="input-group">
				<input type="text" class="form-control" :placeholder="placeholdMsg" v-model="searchText">
				<span class="input-group-btn">
					<button class="btn btn-primary" type="button"><icon name="search"></icon></button>
				</span>
			</div>
			<div class="clear-wrapper" @click="clearInput">
				<icon name="close" class="close-btn"></icon>
			</div>
		</div>
		<div class="tab">
			<ul>
				<router-link tag="li" v-for="item in listItem" :to="{path: item.path}" :key="item.path">{{item.name}}</router-link>
			</ul>
		</div>
	</div>	
</template> 
 
<script> 
export default {
	props: {
		placeholdMsg: {
    		type: String,
    		default: ''
    	},
 		listItem: {
 			type: Array,
 			default: []
 		}
	},
	data () { 
		return {
			searchText: ''	
		}; 
	},
	methods: {
		clearInput () {
			this.searchText = ''
		}
	}
}
</script> 
 
<style scoped> 
.sidebar{
	
}
.btn-primary{
	background-color: #2A80C9;
}
.btn-wrapper{
	position: relative;
	padding: 5px 0;
	cursor: pointer;
}
.btn-wrapper .close-btn{
	position: absolute;
	top: 28%;
	right: 18%;
	z-index: 10;
	color: #DDDDDD;
}
.tab{
	/*margin-top: 8px;*/
  margin-left: -15px;
  margin-right: -15px;
}
ul li{
	height:62px;
	line-height: 62px;
	text-align: center;
	font-size: 18px;
	cursor: pointer;
  	padding-left: 8px;
  	background-color: #f0f0f0;
	color: #768595;
}
ul li.active{
	background-color: #f8f8f8;
	color: #5fc0ed;
	border-left: 8px solid #2a80c9;
 	padding-left: 0;
}
</style> 