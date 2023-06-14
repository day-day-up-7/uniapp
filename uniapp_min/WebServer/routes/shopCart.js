let express=require('express');

const { shopCart,bookData }=require('../bookList/createModel');

// 引入外接处理函数
const screen=require('../bookList/utils/screen');

// 生成路由实例
let router=express.Router();

// 获取购物车物品
router.get('/shopCartList',(req,res)=>{
    const {number,pageNo}=req.query;
    shopCart.find({},(err,data)=>{
        res.json(data);
    })
})

// 加入购物车 get请求 必选参数:id、number
router.get('/shopCart',(req,res)=>{
    // 购物车是否有相同商品
    shopCart.find({id:req.query.id},(err,data)=>{
        if(data.length) {
            // 有该商品
            // 解析数据
            const [{id,type,title,price,number,imgUrl}]=data;
            // 需要替换的数据
            const oldResult={id,type,title,price,number,imgUrl};
            // 替换的结果数据
            const result={id,type,title,price,imgUrl,number:req.query.number*1+number};
            // 数据替换
            shopCart.updateOne(oldResult,{$set:result},(err)=>{
                if(err) {
                    res.json({code:404,data:'添加购物车失败！！！'});
                }else {
                    res.json({code:200,data:'添加购物车成功！！！'});
                }
            })
            
        }else {
            // 没有
            bookData.find({id:req.query.id},(err,data)=>{
                // 解析数据
                const [{id,type,title,price,imgUrl}]=data;
                // 重新合并数据
                const result={id,type,title,price,imgUrl,number:req.query.number};
                shopCart.insertMany(result,(err)=>{
                    if(err) {
                        res.json({code:404,data:'添加购物车失败！！！'});
                    }else {
                        res.json({code:200,data:'添加购物车成功！！！'});
                    }
                });
            })
        }
    })
})

// 删除购物车商品 get请求 必选参数:id
router.get('/shopCartDelete',(req,res)=>{
    shopCart.find({id:req.query.id},(err,data)=>{
        if(!data.length) {
            res.json({code:404,data:'购物车中没有该商品！！！'});
        }else {
            // 解析数据
            const [{id,type,title,price,number,imgUrl}]=data;
            // 重新赋值
            const result={id,type,title,price,number,imgUrl};
            // 删除数据
            shopCart.deleteMany(result,(err)=>{
                if(err) {
                    res.json({code:404,data:'删除购物车失败！！！'});
                }else {
                    res.json({code:200,data:'删除购物车成功！！！'});
                }
            })
        }
    })
})

module.exports=router;