let express=require('express');

const { carousel } = require('../bookList/createModel')

let router=express.Router();

router.get('/carousel',(req,res)=>{
  carousel.find({},(err,data)=>{
    res.json({code:200, data})
  })
})

module.exports=router;
