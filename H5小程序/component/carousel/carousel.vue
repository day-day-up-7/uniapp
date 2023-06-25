<template>
	<view>
		<swiper
		class="swiper" 
		indicator-dots 
		autoplay 
		interval="3000" 
		circular 
		:style="{'height':swiperHeight}"
		indicator-color="rgba(255,255,255)"
		>
			<swiper-item class="swiper-item" v-for="image in imageUrl" :key="image._id">
				<image class="swiper-image" :src="image.url" mode="widthFix" @load="imageHeight"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props:['imageUrl'],
		data() {
			return {
				swiperHeight:''
			}
		},
		methods: {
			imageHeight(e) {
				this.swiperHeight = `${e.detail.height}rpx`
			}
		}
	}
</script>

<style lang="less" scoped>
	.swiper {
		.swiper-item {
			.swiper-image {
				width: 100%;
			}
		}
	}
</style>
