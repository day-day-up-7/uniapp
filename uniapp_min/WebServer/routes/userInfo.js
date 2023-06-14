let express=require('express');

const { userInfo }=require('../bookList/createModel');

// 生成路由实例
let router=express.Router();

// 用户账号注册 必选参数:phone、password、userName
router.get('/register',(req,res)=>{
    const {phone,password,userName}=req.query;
    userInfo.find({phone},(err,data)=>{
        if(data.length) {
            res.json({code:303,data:'账号已经注册！！！'});
        }else {
            const result={phone,password,userName};
            userInfo.insertMany(result,(err)=>{
                if(err) {
                    res.json({code:404,data:'账号注册失败！！！'});
                }else {
                    res.json({code:200,data:'账号注册成功！！！'});
                }
            })
        }
    })
})

// 用户登录 必选参数:phone、password
router.get('/login',(req,res)=>{
    const {phone}=req.query;
    userInfo.find({phone},(err,data)=>{
        if(data.length) {
            const [{password,userName}]=data;
            if(req.query.password===password) {
                res.json({code:200,user:userName,hint:'账号登录成功！！！'});
            }else {
                res.json({code:404,hint:'密码错误！！！'});
            }
        }else {
            res.json({code:303,hint:'账号未注册！！！'});
        }
    })
})

// 忘记密码 必选参数:phone、password
router.get('/updatePassword',(req,res)=>{
    const {phone}=req.query;
    userInfo.find({phone},(err,data)=>{
        if(data.length) {
            const [{phone,password,userName}]=data;
            const oldResult={phone,password,userName};
            const result={phone,password:req.query.password,userName};
            userInfo.updateOne(oldResult,{$set:result},(err)=>{
                if(err) {
                    res.json({code:404,hint:'密码修改失败！！！'});
                }else {
                    res.json({code:200,hint:'密码修改成功！！！'});
                }
            })
        }else {
            res.json({code:303,hint:'账号未注册！！！'});
        }
    })
})

// 注销账号 必选参数 必选参数:phone、password
router.get('/deleteUser',(req,res)=>{
    const {phone}=req.query;
    const PassWord = req.query.password
    userInfo.find({phone},(err,data)=>{
        if(data.length) {
            const [{password}]=data;
            if(PassWord === password) {
                userInfo.deleteOne({phone},(err)=>{
                    if(err) {
                        res.json({code:404,hint:'账号注销失败！！！'});
                    }else {
                        res.json({code:200,hint:'账号注销成功！！！'});
                    }
                })
            }else {
                res.json({code:404,hint:'账号密码错误！！！'});
            }
        }else {
            res.json({code:303,hint:'账号未注册！！！'});
        }
    })
})

// 精简版
router.get('/userInfo',(req,res)=>{
    userInfo.find({},(err, data)=>{
        res.json({code:200,data})
    })
})

module.exports=router;