'use strict';
exports.main = async (event, context) => {
	
	let data = await uniCloud.database().collection('shopCart')
	.get()
	
	//返回数据给客户端
	return data
};
