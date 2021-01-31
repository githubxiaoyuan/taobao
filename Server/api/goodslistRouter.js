/* 商品列表路由模块 */

const express = require('express');
const apiRouter = express.Router();
//导入mysql模块
const mysql = require('mysql');


//商品列表数据请求接口
apiRouter.get('/goodslist', (req, res) => {
    //连接数据库
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'xiaoyuan',
        database: 'taobao'
    });
    connection.connect(function(err) {
        if (err) {
            res.data = {
                status: 0,
                message: '数据库连接错误'
            };
            res.send(res.data);
            throw '数据库连接错误' + err.stack;
        }
    });

    //查询数据库商品列表

    connection.query('select * from goods', (error, results, fields) => {
        if (error) {
            res.data = {
                status: 2,
                message: '数据库请求错误'
            };
            res.send(res.data);
            throw '数据库请求发生错误' + error;
        }

        res.data = {
            status: 1,
            message: '商品列表数据获取成功',
            total: results.length, //数据总条数
            limit: 48, //每页显示的商品数目
            data: results //查询结果
        };
        res.send(res.data);
        connection.end();
    });

});

//列表页掌柜热卖数据请求


//对外接口
module.exports = apiRouter;