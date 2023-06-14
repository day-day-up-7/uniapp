'use strict';
exports.main = async (event, context) => {
	let data = await uniCloud.database().collection('productList')
	.get() //获取数据
	
	// 返回数据
	return data
};
