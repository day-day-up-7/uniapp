'use strict';
exports.main = async (event, context) => {
	let data = await uniCloud.database().collection('carousel')
	.get() //获取数据
	
	// 返回数据
	return data
};
