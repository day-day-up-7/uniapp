const mongoose=require('mongoose');

// 图书信息数据模型
const bookData=new mongoose.Schema({
    id:{type:Number},
    type:{type:String},
    title:{type:String},
    price:{type:Number},
    imgUrl:{type:String},
},{collection:'commodity'});

// 购物车数据模型
const shopCart=new mongoose.Schema({
    id:{type:Number},
    type:{type:String},
    title:{type:String},
    price:{type:Number},
    imgUrl:{type:String},
    number:{type:Number},
},{collection:'shopCart'});

// 用户账号
const userInfo=new mongoose.Schema({
    name:{type:String},
    accountNumber:{type:String},
    head:{type:String},
    background:{type:String}
},{collection:'userInfo'});

// 轮播图
const carousel = new mongoose.Schema({
    id:{type:Number},
    url:{type:String}
})

// 创建模型
module.exports.bookData= mongoose.model('bookList',bookData);

module.exports.shopCart=mongoose.model('shopCart',shopCart);

module.exports.userInfo=mongoose.model('userInfo',userInfo);

module.exports.carousel = mongoose.model('carousel',carousel);