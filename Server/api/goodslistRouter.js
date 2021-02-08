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
            return console.log('数据库连接错误' + error);
        }
    });

    //查询数据库商品列表

    connection.query('SELECT id,category,goods_title,goods_price,goods_sales,goods_img,shop_name,seller FROM goods;', (error, results, fields) => {
        if (error) {
            res.data = {
                status: 2,
                message: '数据库请求错误'
            };
            res.send(res.data);
            return console.log('数据库请求发生错误' + error);
        }
        const sql1 = 'select reputation from goods where id=?';
        const sql2 = 'update goods set qualify=? where id=?';
        // const sql3 = 'update goods set goods_reserve=? where id=?';
        // let sales = 0;
        // let cmt = 0;

        // console.log(results.length);
        for (let i = 1; i <= results.length; i++) {
            connection.query(sql1, [i], (err1, results1) => {

            });
        }
        res.data = {
            status: 1,
            message: '商品列表数据获取成功',
            total: results.length, //数据总条数
            limit: 48, //每页显示的商品数目
            data: results //查询结果
        };
        res.send(res.data);
        // connection.end();
    });

});

//销量排序
apiRouter.get('/goodslist/sales', (req, res) => {
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
            return console.log('数据库连接错误' + error);
        }
    });
    //查询数据库商品列表

    connection.query('SELECT id,category,goods_title,goods_price,goods_sales,goods_img,shop_name,seller FROM goods ORDER BY goods_sales DESC;', (error, results, fields) => {
        if (error) {
            res.data = {
                status: 2,
                message: '数据库请求错误'
            };
            res.send(res.data);
            return console.log('数据库请求发生错误' + error);
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

//信用排序
apiRouter.get('/goodslist/credit', (req, res) => {
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
            return console.log('数据库连接错误' + error);
        }
    });
    //查询数据库商品列表

    connection.query('SELECT id,category,goods_title,goods_price,goods_sales,goods_img,shop_name,seller FROM goods ORDER BY length(reputation) DESC;', (error, results, fields) => {
        if (error) {
            res.data = {
                status: 2,
                message: '数据库请求错误'
            };
            res.send(res.data);
            return console.log('数据库请求发生错误' + error);
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

//价格升序
apiRouter.get('/goodslist/price_asc', (req, res) => {
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
            return console.log('数据库连接错误' + error);
        }
    });
    //查询数据库商品列表

    connection.query('SELECT id,category,goods_title,goods_price,goods_sales,goods_img,shop_name,seller FROM goods ORDER BY goods_price;', (error, results, fields) => {
        if (error) {
            res.data = {
                status: 2,
                message: '数据库请求错误'
            };
            res.send(res.data);
            return console.log('数据库请求发生错误' + error);
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

//价格降序
apiRouter.get('/goodslist/price_desc', (req, res) => {
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
            return console.log('数据库连接错误' + error);
        }
    });
    //查询数据库商品列表

    connection.query('SELECT id,category,goods_title,goods_price,goods_sales,goods_img,shop_name,seller FROM goods ORDER BY goods_price desc;', (error, results, fields) => {
        if (error) {
            res.data = {
                status: 2,
                message: '数据库请求错误'
            };
            res.send(res.data);
            return console.log('数据库请求发生错误' + error);
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

//价格区间
apiRouter.get('/goodslist/price_range', (req, res) => {
    const qData = req.query;
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
            return console.log('数据库连接错误' + error);
        }
    });
    //查询数据库商品列表

    connection.query('SELECT id,category,goods_title,goods_price,goods_sales,goods_img,shop_name,seller FROM goods where goods_price>? and goods_price<? ;', [qData.price1, qData.price2], (error, results, fields) => {
        if (error) {
            res.data = {
                status: 2,
                message: '数据库请求错误'
            };
            res.send(res.data);
            return console.log('数据库请求发生错误' + error);
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


//获取指定范围的随机整数函数
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//对外接口
module.exports = apiRouter;