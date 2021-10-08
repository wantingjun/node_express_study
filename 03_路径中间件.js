const express = require('express');

const app = express();


// 路径匹配的中间件
app.use('/home', (req, res, next) => {
  console.log("home middleware 01");
});
//  多个相同路径的中间件，只有第一个执行，
// 如果想让第二个执行，要在第一个里加next()
app.use('/home', (req, res, next) => {
  console.log("home middleware 01");
});

// 中间插入了一个普通的中间件，
// 如果有next()会按顺序从上到下执行
app.use((req, res, next) => {
    console.log("common middleware02");
    next();
  })
  
app.use('/home', (req, res, next) => {
    console.log("home middleware 02");
});
  

app.listen(8000, () => {
  console.log("express初体验服务器启动成功~");
});
