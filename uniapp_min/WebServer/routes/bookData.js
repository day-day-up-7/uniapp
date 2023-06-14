let express=require('express');

const { bookData }=require('../bookList/createModel');

// 引入外接处理函数
const screen=require('../bookList/utils/screen');
const search = require('../bookList/utils/search')

// 生成路由实例
let router=express.Router();

// 获取主页数据
router.get('/recBook',(req,res)=>{
    const {number,pageNo}=req.query;
    // 进行数据操作
    bookData.find({type:'001'},(err,data)=>{
        const result= screen(data,number,pageNo);
        res.json(result);
    }) 
})

// 获取单个图书数据 get请求 必选参数:id
router.get('/bookInfo',(req,res)=>{
    bookData.find({id:req.query.id},(err,data)=>{
        res.json(data);
    })
})

// 搜索图书
router.get('/search',(req,res)=>{
    const { keyword,number,pageNo } = req.query
    bookData.find({},(err,data)=>{
        const result = search(data, keyword)
        const dataResult = screen(result,number,pageNo)
        res.json(dataResult)
    })
})

module.exports=router;