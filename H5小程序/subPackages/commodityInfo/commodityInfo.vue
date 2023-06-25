<template>
	<view>
		<image class="image" :src="commodityInfo.url" mode="widthFix"></image>
		<view class="priceStyle">
			<text class="price">￥{{ commodityInfo.price }}</text>
			<text class="priceNow">折后￥{{ productMoeny(commodityInfo.price) }}</text>
		</view>
		<text class="commodityName">{{ productName(commodityInfo.name) }}</text>
		<uni-list class="InfoList">
			<uni-list-item title="商品信息" showArrow clickable />
			<uni-list-item title="作者" rightText="xxxxx" />
			<uni-list-item title="翻译" rightText="xxxxxx" />
			<uni-list-item title="总字数" rightText="xxxxxx" />
			<uni-list-item title="出版社" rightText="xxxxxx" />
		</uni-list>
		<uni-popup ref="popup" type="bottom">
			<uni-list class="purchaseInfoList">
				<uni-list-item title="地址" note="xxx 88888888888" showArrow clickable />
				<view class="number">
					<text class="word">数量</text>
					<view class="num">
						<text class="jian" @click="changeNum(-1)">-</text>
						<input class="input" type="number" v-model="number" />
						<text class="jia" @click="changeNum(1)">+</text>
					</view>
				</view>
				<text class="addShopCart" @click="add">加入购物车</text>
			</uni-list>
		</uni-popup>
		<uni-goods-nav />
		<uni-goods-nav class="tabBar" @buttonClick="addShopCart" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:'',
				commodityInfo:{},
				number:1
			}			
		},
		onLoad(option) {
			this.id = option.id
			this.getCommodityInfo()
		},
		methods: {
			// 获取商品数据
			getCommodityInfo() {
				const id = this.id
				uniCloud.callFunction({
					name:'getCommodity',
					data:{id}
				}).then(res=>{
					const [data] = res.result.data
					this.commodityInfo = data
				})
			},
			// 价格优惠
			productMoeny(price) {
				return price * 0.95
			},
			// 去掉名字书名号
			productName(title) {
				let name = String(title)
				return name.replace(/[《》]/g,'')
			},
			// 商品数量变化
			changeNum(num) {
				if(num < 0 && this.number === 1) return
				this.number += num
			},
			// 商品挑选界面
			addShopCart(e) {
				// e.index为0，点击的为购物车
				if(e.index) return
				// 打开弹窗
				this.$refs.popup.open()
			},
			// 添加商品
			add() {
				const data = JSON.parse(JSON.stringify(this.commodityInfo))
				data.number = this.number
				uniCloud.callFunction({
					name:'addShopCart',
					data:{data}
				}).then(res=> {
					uni.showToast({
						title:'添加购物车成功',
						image:'/static/icon/成功.png',
						duration:1000
					})
					this.$refs.popup.close()
					this.number = 1
				}).catch(err=>{
					uni.showToast({
						title:'添加购物车失败',
						image:'/static/icon/失败.png',
						duration:1000
					})
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.image {
		width: 750rpx;
	}
	.priceStyle {
		width: 750rpx;
		height: 120rpx;
		display: flex;
		background-color: rgba(255, 192, 203, 0.5);
		align-items: center;
		.price {
			margin: 0rpx 10rpx;
			height: 80rpx;
			display: block;
			color: red;
			line-height: 80rpx;
		}
		.priceNow {
			line-height: 80rpx;
			padding: 0rpx 20rpx;
			height: 80rpx;
			border-radius: 40rpx;
			display: block;
			color: white;
			background-color: red;
		}
	}
	.commodityName {
		margin: 30rpx 0rpx 30rpx 10rpx;
		display: block;
		font-size: 50rpx;
	}
	.InfoList {
		padding-bottom: 150rpx;
	}
	.purchaseInfoList {
		display: flex;
		flex-direction: column;
		height: 900rpx;
		width: 750rpx;
		background-color: white;
		.number {
			margin: 20rpx 0rpx;
			display: flex;
			justify-content: space-between;
			.word {
				margin-left: 25rpx;
			}
			.num {
				margin-right: 25rpx;
				display: flex;
				.jian,.jia {
					text-align: center;
					line-height: 60rpx;
					border-radius: 50%;
					width: 60rpx;
					height: 60rpx;
					display: block;
					font-size: 40rpx;
					background-color: #f2f2f2;
				}
				.input {
					margin: 0rpx 10rpx;
					text-align: center;
					width: 200rpx;
					height: 60rpx;
					border-radius: 30rpx;
					background-color: #f2f2f2;
				}
			}
		}
		.addShopCart {
			margin-top: auto;
			margin-left: auto;
			margin-right: auto;
			text-align: center;
			line-height: 80rpx;
			color: white;
			border-radius: 40rpx;
			display: block;
			background-color: orange;
			width: 700rpx;
			height: 80rpx;		
		}
	}
	.tabBar {
		z-index: 999;
		width: 750rpx;
		position: fixed;
		bottom: 0rpx;
	}
</style>
