<template>
	<view>
		<text class="headline">---商品列表---</text>
		<ul class="productList">
			<li class="product" v-for="product in productList" :key="product._id">
				<image class="imgProduct" 
				:src="product.url" 
				mode="widthFix"
				@click="getInfo(product._id)"
				></image>
				<text class="productName">{{ product.name }}</text>
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
	export default {
		props:['productList', 'total', 'number'],
		data() {
			return {
				
			}
		},
		methods: {
			cutPageNo(e) {
				let pageNo = e.current
				this.$emit('nowPageNo',pageNo)
			},
			getInfo(id) {
				uni.navigateTo({
					url:`/subPackages/commodityInfo/commodityInfo?id=${id}`
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
		display: block;
		width: 400rpx;
		margin: 20rpx auto;
	}
</style>
