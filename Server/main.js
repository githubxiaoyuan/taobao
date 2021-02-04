//导入路径模块
const path = require('path');
//导入express模块
const express = require('express');
//导入跨域请求模块
const cors = require('cors');
//导入querystring模块
const qs = require('querystring');

//导入用户注册路由模块
const registeredRouter = require('./api/registeredRouter');
//导入商品列表路由模块
const goodslistRouter = require('./api/goodslistRouter');


//实例化express对象
const app = express();

//实现接口跨域请求
app.use(cors());

//定义接受客户端发送过来的请求体数据处理中间件
app.use((req, res, next) => {
    let str = '';
    req.on('data', chunk => {
        str += chunk;
    });
    req.on('end', () => {
        const body = qs.parse(str);
        req.body = body;
        next();
    });
});

//挂载用户注册路由
app.use('/api', registeredRouter);
//挂载商品列表路由
app.use('/api', goodslistRouter);


//启动服务端
app.listen(80, () => {
    console.log('Taobao server running successful at http://127.0.0.1');
});