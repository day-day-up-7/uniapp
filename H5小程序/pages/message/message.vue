<template>
	<view>
		<uni-list>
			<uni-list :border="true" v-for="message in messageList" :key="message._id">
				<!-- 头像显示角标 -->
				<uni-list-chat 
				:title="message.title" 
				:avatar="message.avatar" 
				note="您收到一条新的消息" 
				time="2020-02-02 20:20" 
				badge-positon="left" 
				badge-text="99"
				></uni-list-chat>
			</uni-list>
		</uni-list>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
 	export default {
		data() {
			return {
				
			}
		},
		// 下拉监听
		onPullDownRefresh() {
			setTimeout(function () {
				// 结束下拉
				uni.stopPullDownRefresh()
			}, 1000);
		},
		computed:{
			...mapState(['messageList'])
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
	
</style>
