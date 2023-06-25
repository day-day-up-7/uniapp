<template>
	<view>
		<view class="header">
			<view class="appIcon">
				<image class="icon" src="/static/icon/文化活动室.png"></image>
				<text class="appName">图书馆</text>
			</view>
			<view class="input">
				<input 
				class="search" 
				type="text" 
				placeholder="搜索内容" 
				v-model="keyword"
				/>
				<text class="button" @click="search">搜索</text>
			</view>
		</view>
		<productList
		:productList="productList" 
		:total="total" 
		:number="number"
		@nowPageNo="nowPageNo"
		></productList>
	</view>
</template>

<script>
	import productList from '../../component/productList/productList.vue'
	export default {
		components:{ productList },
		data() {
			return {
				// 关键字
				keyword:'',
				// 每页商品数量
				number:6,
				// 当前页
				pageNo:1,
				// 商品数量
				total:0,
				productList:[]
			}
		},
		onLoad(option) {
			let keyword = ''
			uni.getStorage({
				key:'keyword',
				success(res) {
					keyword = res.data
				}
			})
			if(!keyword) {
				this.keyword = option.keyword
				this.searchproduct()
			}else {
				this.keyword = keyword
				this.searchproduct()
			}
		},
		onUnload() {
			uni.removeStorage({
				key: 'keyword',
				success: function (res) {
					console.log('success');
				}
			})
		},
		methods: {
			searchproduct() {
				const keyword = this.keyword
				const number = this.number
				const pageNo = this.pageNo
				uniCloud.callFunction({
					name:'getSearch',
					data:{keyword, number, pageNo}
				}).then(res=>{
					this.productList = res.result.data.data
					this.total = res.result.total.total
				})
			},
			nowPageNo(pageNo) {
				this.pageNo = pageNo
				this.searchproduct()
			},
			search() {
				let keyword = ''
				uni.getStorage({
					key:'keyword',
					success(res) {
						keyword = res.data
					}
				})
				if(keyword === this.keyword) return
				this.searchproduct()
			}
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
