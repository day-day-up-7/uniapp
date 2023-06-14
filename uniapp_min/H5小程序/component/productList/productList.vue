<template>
	<view>
		<text class="headline">---商品列表---</text>
		<ul class="productList">
			<li class="product" v-for="product in productList" :key="product.id">
				<image class="imgProduct" 
				:src="product.imgUrl" 
				mode="widthFix"
				@click="getInfo(product.id)"
				></image>
				<text class="productName">{{ productName(product.title) }}</text>
			</li>
		</ul>
		<uni-pagination 
		class="pagination" 
		title="标题文字" 
		:total="total" 
		:pageSize="number"
		@change="cutPageNo"
		></uni-pagination>
	</view>
</template>

<script>
	import { reqHomeproduct } from '../../API/index.js'
	export default {
		props:['productList', 'total', 'number'],
		data() {
			return {
				
			}
		},
		methods: {
			async cutPageNo(e) {
				let pageNo = e.current
				this.$emit('nowPageNo',pageNo)
			},
			productName(name) {
				return name.replace(/[《》]/g,'')
			},
			getInfo(id) {
				uni.navigateTo({
					url:`/pages/commodityInfo/commodityInfo?id=${id}`
				})
			}
		},
	}
</script>

<style lang="less" scoped>
	// 每行商品数
	@num:2;
	
	.headline {
		margin: 20rpx 0rpx;
		display: block;
		width: 750rpx;
		text-align: center;
	}
	.productList {
		width: 750rpx;
		flex-wrap: wrap;
		display: flex;
		padding: 0rpx;
		justify-content: space-between;
		text-align: center;
		.product {
			margin: 10rpx 0rpx;
			border: 30rpx solid #f2f2f2;
			width: (600rpx / @num);
			list-style-type: none;
			.imgProduct {
				margin: 10rpx 0rpx 0rpx;
				width: 200rpx;
			}
			.productName {
				height: 40rpx;
				margin: 10rpx 0rpx;
				font-size: 30rpx;
				display: block;
				width: 100%;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}
	}
	.pagination {
		width: 500rpx;
		margin: 20rpx auto;
	}
</style>
