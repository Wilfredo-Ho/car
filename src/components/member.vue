<template>
  	<div class="row">
  		<div class="sidebar-wrapper col-md-2" ref="side">
        <sidebar :listItem="list" :placeholdMsg="placeholdMsg"></sidebar>
      </div>
  		<div class="content" :class="cont">
  			<div class="toggleBtn-wrapper">
					<toggle-btn :menu="menu" @toggle="toggle"></toggle-btn>
  			</div>
  			<div class="page-wrapper">
  				<router-view></router-view>
  			</div>
  		</div>
  	</div>
  
</template> 
 
<script>
import toggleBtn from './toggleBtn/toggleBtn'
import sidebar from './sidebar/sidebar' 

const navHeight = 84;
const toggleBtnHeight = 45;

export default {
  mounted () {
    $('.page-wrapper').height(window.innerHeight - navHeight - toggleBtnHeight);
  }, 
  data () { 
    return { 
 		searchText: "",
 		cont: 'col-md-10',
 		menu: ["会员管理", "会员列表"],
    list: [
      {
        name:"会员列表",
        path: '/member/list'
      },
      {
        name: "会员审核",
        path: '/member/verify'
      }
    ],
    placeholdMsg: "请输入车牌号或PNO码"
    }
  },
  methods: {
  	clearInput () {
  		this.searchText = '';
  	},
  	toggle () {
  		let sidename = this.$refs.side.className;
  		if(sidename.indexOf('collapse')<0){
  			this.$refs.side.className = 'collapse'
  			this.cont = 'col-md-12'
  		}else{
  			this.$refs.side.className = 'sidebar col-md-2'
  			this.cont = 'col-md-10'
  		}
  	},
  	nameToggle(){
  		// 获取当前路由
  		let val = this.$route.path;
  		if(val.indexOf('list')>=0){
  			this.menu = ["会员管理", "会员列表"];
  		}else{
  			this.menu = ["会员管理", "会员审核"];
  		}
  	}
  },
  watch: {
  	// 监听路由变化
  	"$route": "nameToggle"
  },
  components: {
    toggleBtn,
    sidebar
  }
}
</script> 
 
<style scoped>
ul{
	list-style: none;
}
.row{
	margin: 0;
} 

ul{
	padding: 0;
}

.content{
  background-color: #ecf2f7;
}
.toggleBtn-wrapper{
    height:45px;
    margin-left: -7px;
    margin-right: -7px;
    background-color: #fff;
    margin-bottom: 15px;
}
.page-wrapper{
	background-color: #ecf2f7;
}
.clearfix{
	display: none;
}
</style> 