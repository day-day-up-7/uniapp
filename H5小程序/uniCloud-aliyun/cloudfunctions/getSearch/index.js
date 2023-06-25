'use strict';
exports.main = async (event, context) => {
	const keyword = new RegExp(event.keyword, 'ig')
	console.log(event.keyword);
	let skipNum = event.number * ( event.pageNo - 1 )
	let data = await uniCloud.database().collection('productList')
	.where({name: keyword}).skip( skipNum ).limit( event.number ).get()
	
	let total = await uniCloud.database().collection('productList').where({name: keyword}).count()
	//返回数据给客户端
	return {data, total}
};
