// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import $ from 'jquery'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import '../static/css/reset.css'
import './assets/libs/bootstrap/css/bootstrap.min.css'
import './assets/libs/bootstrap/js/bootstrap.min'
import './assets/libs/bootstrap-table/bootstrap-table.css'
import bootstrapTable from './assets/libs/bootstrap-table/bootstrap-table'
import './assets/libs/bootstrap-table/bootstrap-table-zh-CN'
// import BootstrapTable from ''
import position from './components/position'
import vehicle from './components/vehicle'
import member from './components/member'
import memberList from './components/member/list'
import memberVerify from './components/member/verify'
import system from './components/system'

// Object.defineProperty(Vue.prototype, '$bootstrapTable', {value: bootstrapTable})

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.component('icon', Icon)

/* eslint-disable no-new */
let router = new VueRouter({
	linkActiveClass: 'active',
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/position'
		},
		{
			path: '/position',
			component: position	
		},
		{
			path: '/vehicle',
			component: vehicle
		},
		{
			path: '/member',
			component: member,
			children: [
				{
					path: '/member/',
					redirect: '/member/list'
				},
				{
					path: '/member/list',
					component: memberList
				},
				{
					path: 'verify',
					component: memberVerify
				}
			]
		}, 
		{
			path: '/system',
			component: system
		}
	]
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
