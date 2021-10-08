const express = require('express') // express是一个函数

// 返回app
const app = express()

// 监听默认路径
//get请求
app.get('/',(req,res,next)=>{
    res.end("heelo,express") // 返回

})
// post
app.post('/',(req,res)=>{
    res.end("hello post express") // 返回

})
app.post('/login', (req, res, next) => {
    res.end("Welcome Back~");
  })

// 开启服务器
app.listen(8000,()=>{
    console.log("express first try")
})
