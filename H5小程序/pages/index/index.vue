<template>
	<view>
		<view class="header">
			<view class="appIcon">
				<image class="icon" src="/static/icon/文化活动室.png"></image>
				<text class="appName">图书馆</text>
			</view>
			<view class="input">
				<input class="search" type="text" placeholder="搜索内容" v-model="keyword"/>
				<text class="button" @click="search">搜索</text>
			</view>
		</view>
		<carousel :imageUrl="imageUrl"></carousel>
		<menuBar :menuBarUrl="menuBarUrl" :number="menuNum"></menuBar>
		<productList 
		:productList="productList" 
		:total="total" 
		:number="number"
		@nowPageNo="nowPageNo"
		></productList>
	</view>
</template>

<script>
	import carousel from '../../component/carousel/carousel.vue'
	import menuBar from '../../component/menuBar/menuBar.vue'
	import productList from '../../component/productList/productList.vue'
	
	import { mapState } from 'vuex'
	export default {
		components:{ carousel, menuBar, productList },
		data() {
			return {
				// 每页小功能个数
				menuNum:8,
				// 关键字
				keyword:'',
				// 每页商品数量
				number:6,
				// 当前页
				pageNo:1,
				// 商品数量
				total:0,
				imageUrl:[],
				productList:[]
			}
		},
		mounted() {
			// 首页商品初始化
			this.initProductList()
			// 轮播图初始化
			this.initCarousel()
		},
		methods: {
			search() {
				if(!this.keyword) return
				uni.navigateTo({
					url:`/subPackages/searchList/searchList?keyword=${this.keyword}`
				})
			},
			initProductList() {
				// 商品列表数据
				const number = this.number
				const pageNo = this.pageNo
				uniCloud.callFunction({
					name:'getProduct',
					data:{ number, pageNo }
				}).then(res=> {
					this.productList = res.result.data.data
					this.total = res.result.total.total
				})
			},
			nowPageNo(pageNo) {
				this.pageNo = pageNo
				this.initProductList()
			},
			initCarousel() {
				// 轮播图数据
				uniCloud.callFunction({
					name:'getCarousel'
				}).then(res=>{
					this.imageUrl = res.result.data
				})
			}
		},
		computed:{
			...mapState(['menuBarUrl'])
		}
	}
</script>

<style lang="less" scoped>
	.header {
		margin: 30rpx 0rpx;
		display: flex;
		justify-content: space-around;
		.appIcon {
			display: flex;
			.icon {
				height: 60rpx;
				width: 60rpx;
			}
			.appName {
				margin-left: 20rpx;
				height: 60rpx;
				line-height: 60rpx;
			}
		} 
		.input {
			display: flex;
			.search {
				width: 400rpx;
				height: 60rpx;
				background-color: #f1f1f1;
				border-radius: 30rpx 0rpx 0rpx 30rpx;
				padding-left: 30rpx;
				font-size: 30rpx;
				border: 1rpx solid #8a8a8a;
				border-right: #8a8a8a;
			}
			.button {
				text-align: center;
				width: 100rpx;
				height: 60rpx;
				line-height: 60rpx;
				border-radius: 0rpx 30rpx 30rpx 0rpx;
				background-color: #f1f1f1;
				border: 1rpx solid #8a8a8a;
			}
		}
	}
</style>
