//导入路径模块
const path = require('path');
//导入express模块
const express = require('express');
//导入商品列表路由模块
const goodslistRouter = require('./api/goodslistRouter');
//导入跨域请求模块
const cors = require('cors');

//实例化express对象
const app = express();

//实现接口跨域请求
app.use(cors());

//注册商品列表路由
app.use('/api', goodslistRouter);


//启动服务端
app.listen(80, () => {
    console.log('Taobao server running successful at http://127.0.0.1');
});