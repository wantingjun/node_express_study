const express = require('express')

const app = express()

//通过use注册一个中间件，本质是回调函数
app.use((req,res,next)=>{
    console.log("普通中间件")
    res.end("hello world") //结束请求响应周期，
    // 但是并不妨碍下个中间件next(),下个中间件还是可以调用的
    next()// 查找下一个能匹配到的中间件
})
app.use((req, res, next) => {
    console.log("注册了第02个普通的中间件~");
    next(); // 如果没有next()就不会匹配下一个中间件
    // res.end("hello world2") //再写会报错，命名之前已经end了，再end会报错
  });
  
  app.use((req, res, next) => {
    console.log("注册了第03个普通的中间件~");

  });
app.listen(8000,()=>{
    console.log('success')
})