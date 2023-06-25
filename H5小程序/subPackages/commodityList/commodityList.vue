<template>
	<view>
		<view class="scroll">
			<view class="menu" v-for="menu in menuBarUrl" :key="menu._id">
				<image class="image" :src="menu.url" @click="findData(menu.name)"></image>
				<text class="menuName">{{menu.name}}</text>
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
	
	import { mapState } from 'vuex'
	
	export default {
		components:{ productList },
		data() {
			return {
				keyword:'',
				// 每页商品数量
				number:8,
				// 当前页
				pageNo:1,
				// 商品数量
				total:0,
				productList:[]
			}
		},
		onLoad(option) {
			this.keyword = option.keyword
			this.searchproduct()
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
			findData(keyword) {
				this.keyword = keyword
				this.searchproduct()
			}
		},
		computed:{
			...mapState(['menuBarUrl'])
		}
	}
</script>

<style lang="less" scoped>
	.scroll {
		display: flex;
		flex-wrap: wrap;
		.menu {
			text-align: center;
			width: (730rpx / 4);
			margin: 20rpx 0rpx;
			.image {
				width: 80rpx;
				height: 80rpx;
			}
			.menuName {
				display: block;
				font-size: 30rpx;
				height: 40rpx;
			}
		}
	}
</style>
