<template>
	<view>
		<view class="navigation">
			<view class="option" 
			v-for="navigation in navigationList" 
			:style="{width:`${width}rpx`}"
			:key="navigation._id"
			>
				<image class="image" :src="navigation.url" mode="widthFix"></image>
				<text class="name">{{ navigation.name }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['navigationList', 'num'],
		data() {
			return {
				
			}
		},
		computed:{
			width() {
				return 750/this.num
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
	.navigation {
		background-color: #f2f2f2;
		margin: 20rpx 0rpx;
		padding: 40rpx 0rpx;
		display: flex;
		.option {
			height: 120rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			.image {
				width: 60rpx;
			}
			.name {
				display: block;
			}
		}
	}
</style>
