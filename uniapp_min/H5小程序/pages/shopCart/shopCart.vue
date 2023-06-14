<template>
	<view>
		<uni-swipe-action>
		    <uni-swipe-action-item 
			:right-options="options" 
			class="shopCartInfo"
			v-for="shopCart in shopCartList" 
			:key="shopCart.id"
			@click="deleteShopCart(shopCart.id)"
			>
				<view class="commodity">
					<radio class="pitchOn"></radio>
					<image class="image" :src="shopCart.imgUrl" mode="widthFix"></image>
					<view class="commodityInfo">
						<text class="commodityName">{{ title(shopCart.title) }}</text>
						<view class="num">
							<text class="jian" @click="changeNum(-1, shopCart.id, shopCart.number)">-</text>
							<input class="input" type="number" :value="shopCart.number" />
							<text class="jia" @click="changeNum(1, shopCart.id, shopCart.number)">+</text>
						</view>
					</view>
					<view class="price">
						<text class="commodityPrice">￥{{ shopCart.price }}</text>
						<text class="commodityAllPrice">￥{{ shopCart.price * shopCart.number }}</text>
					</view>
				</view>
		    </uni-swipe-action-item>
		</uni-swipe-action>
	</view>
</template>

<script>
	import { reqShopCart, reqAddShopCart, deleteShopCart } from '../../API/index.js'
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
			}
		},
		onShow() {
			this.getShopCartList()
		},
		methods: {
			async changeNum(index, id, number) {
				const num = number + index
				if(num <= 0) {
					const result = await deleteShopCart(id)
					if(result.data.code === 200) {
						this.getShopCartList()
					}
					return
				}
				const result = await reqAddShopCart(id, index)
				if(result.data.code === 200) {
					this.getShopCartList()
				}
			},
			async getShopCartList() {
				const result = await reqShopCart()
				this.shopCartList = result.data
			},
			title(title) {
				let name = String(title)
				return name.replace(/[《》]/g,'')
			},
			async deleteShopCart(id) {
				const result = await deleteShopCart(id)
				if(result.data.code === 200) {
					this.getShopCartList()
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.shopCartInfo {
		border-radius: 20rpx;
		border: 1rpx solid #8a8a8a;
		margin: 10rpx auto;
		width: 730rpx;
		display: flex;
		flex-direction: column;
		.pitchOn {
			text-align: center;
			width: 100rpx;
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
					display: block;
					font-size: 25rpx;
					word-break: break-all;
					height: 110rpx;
				}
				.num {
					height: 40rpx;
					display: flex;
					text-align: center;
					.jian,.jia {
						text-align: center;
						line-height: 40rpx;
						border-radius: 50%;
						width: 40rpx;
						height: 40rpx;
						display: block;
						font-size: 10rpx;
						background-color: #f2f2f2;
						border: 1rpx solid #8a8a8a;
					}
					.input {
						margin: 0rpx 10rpx;
						text-align: center;
						width: 100rpx;
						height: 40rpx;
						font-size: 10rpx;
						border-radius: 40rpx;
						background-color: #f2f2f2;
						border: 1rpx solid #8a8a8a;
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
</style>
