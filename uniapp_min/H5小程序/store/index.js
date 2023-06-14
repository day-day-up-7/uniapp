import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		menuBarUrl:[
			{
				_id:1,
				name:'CSS',
				url:'/static/icon/css.png'
			},
			{
				_id:2,
				name:'HTML',
				url:'/static/icon/html.png'
			},
			{
				_id:4,
				name:'JavaScript',
				url:'/static/icon/JavaScript.png'
			},
			{
				_id:5,
				name:'MongoDB',
				url:'/static/icon/mongdb.png'
			},
			{
				_id:6,
				name:'MySQL',
				url:'/static/icon/MySQL.png'
			},
			{
				_id:8,
				name:'React',
				url:'/static/icon/react.png'
			},
			{
				_id:9,
				name:'webpack',
				url:'/static/icon/webpack.png'
			},
			{
				_id:10,
				name:'Vue',
				url:'/static/icon/Vue.png'
			},
		],
		navigationTop:[
			{
				_id:1,
				name:'收藏',
				url:'/static/navigation/收藏.png'
			},
			{
				_id:2,
				name:'关注',
				url:'/static/navigation/店铺关注.png'
			},
			{
				_id:3,
				name:'足迹',
				url:'/static/navigation/历史记录.png'
			}
		],
		navigationBotton:[
			{
				_id:1,
				name:'待付款',
				url:'/static/navigation/待付款.png'
			},
			{
				_id:2,
				name:'待发货',
				url:'/static/navigation/待发货.png'
			},
			{
				_id:3,
				name:'待收货',
				url:'/static/navigation/待收货.png'
			},
			{
				_id:4,
				name:'退货/售后',
				url:'/static/navigation/退货售后.png'
			}
		]
	},
	mutations:{
		
	},
	actions:{
		
	}
})

export default store