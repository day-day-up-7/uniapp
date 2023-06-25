<template>
	<view>
		<image v-if="!shopCartList.length" class="icon" src="/static/icon/空空如也.png" mode="widthFix"></image>
		<uni-swipe-action>
			<checkbox-group @change="checkboxChange">
				<uni-swipe-action-item 
				:right-options="options" 
				class="shopCartInfo"
				v-for="shopCart in shopCartList" :key="shopCart._id"
				@click="deleteShopCart(shopCart._id)"
				>
					<view class="commodity">
						<checkbox class="pitchOn" :value="moeny(shopCart.price, shopCart.number)" />
						<image class="image" :src="shopCart.url" mode="widthFix"></image>
						<view class="commodityInfo">
							<view class="commodityName">{{ title(shopCart.name) }}</view>
							<view class="num">
								<image class="jian" 
								src="/static/icon/减.png" 
								@click="changeNum(-1, shopCart)"
								mode="heightFix"
								></image>
								<input class="input" type="number" :value="shopCart.number" />
								<image class="jia" src="/static/icon/加.png" 
								@click="changeNum(1, shopCart)"
								mode="heightFix"
								></iamge>
							</view>
						</view>
						<view class="price">
							<text class="commodityPrice">￥{{ shopCart.price }}</text>
							<text class="commodityAllPrice">￥{{ shopCart.price * shopCart.number }}</text>
						</view>
					</view>
				</uni-swipe-action-item>
			</checkbox-group>
		</uni-swipe-action>
		<view class="bed"></view>
		<view class="payment">
			<view class="info" v-if="num">
				<text class="length">已经选中{{ num }}件商品</text>
				<text class="moeny">合计<text style="color: red;font-size: 40rpx">￥{{ sum }}</text></text>
			</view>
			<text class="submit" @click="submit">提交订单</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options:[
					{
						text: '删除',
						style: {
							backgroundColor: '#dd524d'
						}
					}
				],
				shopCartList:[],
				sum:'',
				num:''
			}
		},
		onShow() {
			this.getShopCartList()
		},
		methods: {
			// 购物车商品数量修改
			changeNum(index, shopCart) {
				const num = shopCart.number + index
				if(num <= 0) {
					this.deleteShopCart(shopCart._id)
				}else {
					const data = JSON.parse(JSON.stringify(shopCart))
					data.number = index
					uniCloud.callFunction({
						name:'addShopCart',
						data:{data}
					}).then(res=>{
						this.getShopCartList()
					})
				}
			},
			// 获取购物车数据
			getShopCartList() {
				uniCloud.callFunction({
					name:'getShopCart'
				}).then(res=> {
					this.shopCartList = res.result.data
				})
			},
			// 替换掉商品书名号
			title(title) {
				let name = String(title)
				return name.replace(/[《》]/g,'')
			},
			// 删除购物车商品
			deleteShopCart(id) {
				uniCloud.callFunction({
					name:'deleteShopCart',
					data:{id}
				}).then(res=>{
					this.getShopCartList()
				})
			},
			// 计算选中产品总额
			checkboxChange(e) {
				const arr = e.detail.value
				const sum = arr.reduce((x1, x2)=> +x1 + +x2, 0)
				this.sum = sum
				this.num = arr.length
			},
			moeny(price,number) {
				return `${price * number}`
			},
			submit() {
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.icon {
		display: block;
		margin: 50rpx auto;
		width: 300rpx;
	}
	.shopCartInfo {
		background-color: rgba(255, 192, 203, 0.3);
		border-radius: 20rpx;
		border: 1rpx solid #f2f2f2;
		margin: 10rpx auto;
		width: 730rpx;
		display: flex;
		flex-direction: column;
		.pitchOn {
			text-align: center;
			width: 100rpx;
			transform:scale(0.7);
		}
		.commodity {
			display: flex;
			align-items: center;
			margin: 10rpx 0rpx;
			width: 730rpx;
			height: 200rpx;
			.image {
				width: 150rpx;
			}
			.commodityInfo {
				margin-left: 10rpx;
				height: 150rpx;
				.commodityName {
					width: 300rpx;
					margin-top: 10rpx;
					display: -webkit-box;
					overflow: hidden;
					-webkit-box-orient: vertical;
					line-clamp: 3;
					-webkit-line-clamp:3;
					font-size: 25rpx;
					height: 110rpx;
				}
				.num {
					width: 230rpx;
					height: 40rpx;
					display: flex;
					text-align: center;
					position: relative;
					.jian{
						z-index: 99;
						left: 0rpx;
						top: 0rpx;
						position: absolute;
						height: 60rpx;
					}
					.jia {
						
						z-index: 99;
						right: 0rpx;
						position: absolute;
						height: 60rpx;
					}
					.input {
						text-align: center;
						width: 230rpx;
						height: 40rpx;
						font-size: 30rpx;
						border-radius: 40rpx;
						background-color: white;
					}
				}
			}
			.price {
				margin-left: auto;
				margin-right: 10rpx;
				height: 150rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.commodityPrice {
					margin-left: auto;
					display: block;
					font-size: 25rpx;
					color: red;
				}
				.commodityAllPrice {
					display: block;
					font-size: 40rpx;
					color: red;
				}
			}
		}
	}
	.bed {
		width: 750rpx;
		height: 100rpx;
		background-color: white;
	}
	.payment {
		position: fixed;
		z-index: 999;
		width: 750rpx;
		height: 100rpx;
		background-color: white;
		display: flex;
		bottom: 0rpx;
		align-items: center;
		.info {
			margin-left: 10rpx;
			.length {
				font-size: 20rpx;
				line-height: 40rpx;
				height: 40rpx;
				display: block;
				color: #a8a8a8;
			}
			.moeny {
				font-size: 20rpx;
				color: #a8a8a8;
				line-height: 60rpx;
				height: 60rpx;
				display: block;
			}
		}
		.submit {
			margin-left: auto;
			margin-right: 10rpx;
			text-align: center;
			line-height: 60rpx;
			background-color: red;
			color: white;
			display: block;
			width: 200rpx;
			height: 60rpx;
			border-radius: 30rpx;
		}
	}
</style>
