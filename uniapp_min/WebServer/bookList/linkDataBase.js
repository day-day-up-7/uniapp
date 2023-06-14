const mongoose=require('mongoose');

const db_url='mongodb://127.0.0.1:27017/uniapp';

function linkDataBase(callback) {
    // 链接数据库
    mongoose.connect(db_url,(err)=>{
        if(err) console.log(err);
        else console.log('数据库连接成功！！！');
    });
    mongoose.connection.on('open',function (err) {
        if(err) {
            console.log('数据库打开失败！！！',err);
            callback('数据库打开失败！！！');
        }else {
            console.log('数据库打开成功！！！');
            callback();
        }
    })
}

module.exports=linkDataBase;
