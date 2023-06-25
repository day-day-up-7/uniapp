'use strict';
exports.main = async (event, context) => {
	const { _id } = event.data
	const db = uniCloud.database().collection('shopCart')
	let result = await db.doc(_id).get()
	let data
	// 首次添加
	if(!result.data.length) {
		data =await db.add(event.data)
	}
	// 数量修改
	else {
		const { number } = result.data[0]
		event.data.number += number
		Reflect.deleteProperty(event.data, '_id')
		data =await db.doc(_id).update(event.data)
	}
	
	//返回数据给客户端
	return data
};
