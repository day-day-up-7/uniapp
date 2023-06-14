// 导入数据库连接模块
const linkDataBase=require('./linkDataBase');
// 导入
const express=require('express');
// 引入路由
const bookListRouter=require('../routes/bookData');
const shopCartRouter=require('../routes/shopCart');
const userInfoRouter=require('../routes/userInfo');
const carouselRouter = require('../routes/carousel')
// 创建
const app=express();
// 图片文件夹
app.use(express.static('img'));

// 路由中间件
app.use(bookListRouter);
app.use(shopCartRouter);
app.use(userInfoRouter);
app.use(carouselRouter)

// 开启服务器
linkDataBase(()=>{
    app.listen(3000,()=>{
        console.log('服务器启动成功！端口号为:3000');
    })
})
