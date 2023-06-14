// 商品搜索
export const reqSearchproduct = (keyword, number, pageNo) =>{
	return uni.request({
		url:`/api/search?keyword=${keyword}&number=${number}&pageNo=${pageNo}`,
		method:"GET"
	})
}

// 主页商品数据
export const reqHomeproduct = (number, pageNo) =>{
	return uni.request({
		url:`/api/recBook?number=${number}&pageNo=${pageNo}`,
		method:"GET"
	})
}

// 用户信息
export const reqUserInfo = () =>{
	return uni.request({
		url:'/api/userInfo',
		method:'GET'
	})
}

// 获取轮播图
export const reqCarousel = ()=>{
	return uni.request({
		url:'/api/carousel/',
		method:'GET'
	})
}

// 获取单件商品的信息
export const reqCommodityInfo = (id)=>{
	return uni.request({
		url:`/api/bookInfo?id=${id}`,
		method:'GET'
	})
}

// 添加商品到购物车
export const reqAddShopCart = (id, number)=> {
	return uni.request({
		url:`/api/shopCart?id=${id}&number=${number}`,
		method:'GET'
	})
}

// 获取购物车信息
export const reqShopCart = () =>{
	return uni.request({
		url:'/api/shopCartList',
		method:'GET'
	})
}

// 删除购物车物品
export const deleteShopCart = (id) =>{
	return uni.request({
		url:`/api/shopCartDelete?id=${id}`,
		method:'GET'
	})
}
