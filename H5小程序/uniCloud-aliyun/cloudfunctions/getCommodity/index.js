'use strict';
exports.main = async (event, context) => {
	
	let data = await uniCloud.database().collection('productList')
	.where({_id: event.id}).get()
	
	//返回数据给客户端
	return data
};
