<template>
	<view>
		<view class="header">
			<image class="backgroundImage" :src="userInfo.background" mode="widthFix"></image>
			<view class="user">
				<image class="headerImage" :src="userInfo.head" mode="widthFix"></image>
				<view class="userMessage">
					<text class="userName">{{ userInfo.name }}</text>
					<text class="userAccountNumber">账号：{{ userInfo.accountNumber }}</text>
				</view>
			</view>
		</view>
		<navigation :navigationList="navigationTop" :num="navigationTop.length"></navigation>
		<text class="headline">我的订单</text>
		<navigation :navigationList="navigationBotton" :num="navigationBotton.length"></navigation>
		<otherSet></otherSet>
	</view>
</template>

<script>
	import navigation from '../../component/navigation/navigation.vue'
	import otherSet from '../../component/otherSet/otherSet.vue'
	
	import { reqUserInfo } from '../../API/index.js'
	
	import { mapState } from 'vuex'
	export default {
		components:{ navigation, otherSet },
		data() {
			return {
				userInfo:{}
			}
		},
		mounted() {
			this.requserData()
		},
		methods: {
			async requserData() {
				const result = await reqUserInfo()
				const data = result.data.data
				const [userInfo] = data
				this.userInfo = userInfo
			}
		},
		computed:{
			...mapState(['navigationTop','navigationBotton'])
		}
	}
</script>

<style lang="less" scoped>
	.header {
		position: relative;
		.backgroundImage {
			width: 750rpx;
		}
		.user {
			z-index: 11;
			position: absolute;
			top: 200rpx;
			left: 30rpx;
			display: flex;
			.headerImage {
				width: 100rpx;
				border: 1rpx solid white;
			}
			.userMessage {
				display: flex;
				flex-direction: column;
				.userName {
					margin-top: auto;
					display: block;
					margin-left: 20rpx;
					color: white;
				}
				.userAccountNumber {
					font-size: 20rpx;
					display: block;
					margin-left: 20rpx;
					color: white;
				}
			}
		}
	}
	.headline {
		margin: 20rpx 0rpx 20rpx 40rpx;
		display: block;
		font-weight: bold;
	}
</style>
