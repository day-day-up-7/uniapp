'use strict';
exports.main = async (event, context) => {
	
	let data = await uniCloud.database().collection('shopCart')
	.doc(event.id).remove()
	
	//返回数据给客户端
	return data
};
