'use strict';
exports.main = async (event, context) => {
	let skipNum = event.number * ( event.pageNo - 1 )
	let data = await uniCloud.database().collection('productList')
	.skip( skipNum ).limit( event.number ).get() //获取数据
	
	let total = await uniCloud.database().collection('productList').count()
	// 返回数据
	return {data, total}
};
