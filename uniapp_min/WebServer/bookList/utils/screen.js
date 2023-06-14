function screen(data,number,pageNo) {
    const result=[];
    data.forEach((item,index) => {
        if(index>=(pageNo-1)*number && index<number*1*pageNo) {
            result.push(item);
        }
    });
    return {result,total:data.length};
}

module.exports=screen;