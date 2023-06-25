<template>
	<view>
		<swiper indicator-dots class="menuBar">
			<swiper-item class="swiper-item" v-for="(item, a) in menuNumber" :key="a">
				<view class="menu" v-for="(menu, b) in menuBar(item)" :key="b">
					<image class="image" :src="menu.url" @click="findData(menu.name)"></image>
					<text class="menuName">{{menu.name}}</text>
				</view>
			</swiper-item>
		</swiper>
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
			menuNumber() {
				return Math.ceil(this.menuBarUrl.length / this.number)
			}
		},
		methods: {
			menuBar(num) {
				return this.menuBarUrl.filter((item, index)=> {
					const left = this.number * num
					const right = (num + 1) * this.number
					return left <= index && index < right
				})
			},
			findData(keyword) {
				uni.navigateTo({
					url:`/subPackages/commodityList/commodityList?keyword=${keyword}`
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
		.swiper-item {
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
	}
</style>
