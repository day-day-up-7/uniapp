<template>
	<view class="menuBar">
		<view class="menu" v-for="menu in menuBarUrl" :key="menu._id">
			<image class="image" :src="menu.url" @click="findData(menu.name)"></image>
			<text class="menuName">{{menu.name}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props:['menuBarUrl','number'],
		data() {
			return {
				
			}
		},
		computed: {
		},
		methods: {
			findData(keyword) {
				uni.navigateTo({
					url:`/pages/commodityList/commodityList?keyword=${keyword}`
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	// 每行功能个数
	@num: 4;
	// 图片高度
	@imageHeight: 80rpx;
	// 文字高度
	@textHeight: 40rpx;
	.menuBar {
		min-height: 360rpx;
		min-width: 730rpx;
		margin: 0rpx auto;
		background-color: #f2f2f2;
		width: 730rpx;
		border: 10rpx solid #8a8a8a;
		display: flex;
		flex-wrap: wrap;
		.menu {
			text-align: center;
			width: (730rpx / @num);
			margin: 20rpx 0rpx;
			.image {
				width: 80rpx;
				height: @imageHeight;
			}
			.menuName {
				display: block;
				font-size: 30rpx;
				height: @textHeight;
			}
		}
	}
</style>
