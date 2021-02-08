//渲染商品页面

//获取url携带的商品ID
var goodsId = parseInt(location.search.substr(location.search.indexOf('=') + 1));

var goodsMain = document.querySelector('.goods-main');
//发起获取商品详情数据请求
$.ajax({
    url: '/api/item',
    method: 'GET',
    data: {
        id: goodsId
    },
    success: function(res) {
        switch (res.status) {
            case 0:
                goodsMain.innerHTML = '<h2 style="padding:100px 0;text-align:center;font-size:60px;color:#f40;">数据库连接错误，请检查设置！</h2>';
                break;
            case 2:
                goodsMain.innerHTML = '<h2 style="padding:100px 0;text-align:center;font-size:60px;color:#f40;">数据库请求过程中发生错误，请重新尝试！</h2>';
                break;
            case 3:
                goodsMain.innerHTML = '<h2 style="padding:100px 0;text-align:center;font-size:60px;color:#f40;">很遗憾，所请求的商品不存在！</h2>';
                break;
            case 1:
                var d = res.data;
                //设置网站标题
                document.title = d.goods_title;

                //判断是否是金牌卖家
                var shopStr = '';
                if (d.gold_periods) {
                    shopStr = '<div class="gold-seller"><a href="javascript:;"><div class="gold-periods">连续<span class="gold-periods-num">' + d.gold_periods + '</span>期</div><img src="./images/gold-seller.png" alt=""></a><a href="javascript:;" class="gold-img-wrap"></a></div>';
                }
                //判断店铺年数
                if (d.shop_years) {
                    shopStr += '<div class="shop-age"><a href="javascript:;"><div class="shop-age-content"><i class="shop-age-icon"></i><span class="shop-age-num">' + d.shop_years + '</span><span class="shop-age-text">年老店</span></div></a></div>';
                }

                //处理无效的描述图片
                var goodsImgStr = d.goods_desc.replace(/\/\/img.alicdn.com\/tps\/i4\/T10B2IXb4cXXcHmcPq-85-85.gif/gi, './images/loading.gif');

                // 处理无效的参数图片
                var goodsParamsStr = d.goods_params.replace(/<img src/gi, '<img src="./images/loading.gif" data-src');

                //商品详情页面模板
                var goodsStr = '<div class="goods-detail-info clearfix"><div class="goods-info-left clearfix"><div class="goods-pre-img"><div class="preview-box"><div class="mask"></div><img src="' + d.goods_img + '" alt=""></div><div class="bigImg-box"><div class="bigImg-wrap"><img src="' + d.goods_img + '" alt="" class="big-img"></div></div></div><div class="goods-info-wrap"><div class="goods-info-inner"><div class="goods-title"><h3>' + d.goods_title + '</h3></div><div class="sales-box"><ul class="clearfix"><li class="price-box"><span class="txt">价格</span><strong><em class="rmb-symbol">￥</em><em class="goods-price">' + d.goods_price.toFixed(2) + '</em></strong></li><li class="goods-data-count clearfix"><div class="cmt-box"><a href="javascript:;"><strong class="cmt-count">' + d.cmt_num + '</strong><span>累计评论</span></a></div><div class="sales-data"><a href="javascript:;"><strong class="sals-count">' + d.goods_sales + '</strong><span>交易成功</span></a></div></li></ul></div><div class="logistics"><div class="logistics-inner clearfix"><div class="line-name">配送</div><div class="logistics-info clearfix"><div class="area-info"><span class="from-address">广东深圳</span> 至 <span class="target-address">广东深圳宝安区</span></div></div></div></div><div class="purchase-box"><div class="purchase-inner"><div class="goods-amount clearfix"><div class="line-name">数量</div><div class="goods-num-box clearfix"><a href="javascript:;" class="tb-reduce-goods ban">-</a><input type="text" class="tb-goods-num" value="1"><a href="javascript:;" class="tb-add-goods">+</a></div><div class="goods-reserve">件(库存<em>' + d.goods_reserve + '</em>件)</div></div></div></div><div class="goods-action"><div class="goods-action-inner clearfix"><div class="tb-buy-wrap"><a href="javascript:;" class="buy-goods-btn">立即购买</a></div><div class="tb-add-wrap"><a href="javascript:;" class="add-goods-btn"><i class="iconfont icon-tianchongxing-"></i>加入购物车</a></div></div></div><div class="goods-service"><dl class="clearfix"><dt>承诺</dt><dd class="clearfix"><a href="javascript:;"><img src="./images/goods-service-icon1.png" alt="">15天退货</a><a href="javascript:;"><img src="./images/goods-service-icon2.png" alt="">公益宝贝</a></dd></dl><dl class="clearfix"><dt>支付</dt><dd class="clearfix"><a href="javascript:;"><img src="./images/goods-service-icon3.png" alt="">蚂蚁花呗</a><a href="javascript:;"><img src="./images/goods-service-icon4.png" alt="">信用卡支付</a></dd></dl><dl class="clearfix"><dt>支持</dt><dd class="clearfix">折旧变现，买新更省钱。<a href="javascript:;" style="float: none;display: inline;text-decoration: underline;">详情</a></dd></dl></div></div></div></div><div class="goods-info-right"><div class="shop-sidebar">' + shopStr + '<div class="shop-info"><div class="shop-info-inner"><div class="line line1 "><span class="shop-name">' + d.shop_name + '</span></div><div class="line line2 "><dl class="clearfix"><dt>信誉：</dt><dd class="shop-reputation clearfix">' + d.reputation + '</dd></dl></div><div class="line line3 "><dl class="clearfix"><dt>掌柜：</dt><dd class=" clearfix"><span class="shopkeeper">' + d.seller + '</span></dd></dl></div><div class="line line4 "><dl class="clearfix"><dt>联系：</dt><dd class=" clearfix"><a href="javascript:;" class="contact-me"></a></dd></dl></div><div class="line line5 "><dl class="clearfix"><dt>资质：</dt><dd class=" clearfix"><a href="javascript:;" class="qualification-icon"></a><a href="javascript:;" class="shop-bond"><span class="shop-bond-icon"></span><span class="shop-bond-num">' + parseInt(d.qualify) + '<span>元</span> </span></a></dd></dl></div><div class="shop-score clearfix"><dl><dt>描述</dt><dd><a href="javascript:;" class="shop-desc-score">' + d.grade_desc.toFixed(1) + '</a></dd></dl><dl><dt>服务</dt><dd><a href="javascript:;" class="shop-service-score">' + d.grade_service.toFixed(1) + '</a></dd></dl><dl><dt>物流</dt><dd><a href="javascript:;" class="shop-logistics-score">' + d.grade_logistics.toFixed(1) + '</a></dd></dl></div><div class="shop-info-ft clearfix"><a href="javascript:;" class="shop-link">进入店铺</a><a href="javascript:;" class="collect-shop">收藏店铺</a></div></div></div></div></div></div><div class="goods-content clearfix"><div class="goods-cont-inner clearfix"><div class="goods-cont-left"></div><div class="goods-cont-right"><div class="tab-bar"><ul class="tab-bar-list clearfix"><li class="activity"><a href="javascript:;">宝贝详情</a><div class="activity-line"></div></li><li><a href="javascript:;">累计评论</a></li><li><a href="javascript:;">专享服务</a></li></ul></div><div class="main-wrap"><div class="goods-params"><div class="goods-params-inner"><h3>产品参数</h3><ul class="goods-params-list clearfix">' + goodsParamsStr + '</ul></div></div><div class="goods-description"><div class="description-inner"><p>' + goodsImgStr + '</p></div></div></div></div></div></div>';

                //渲染页面
                goodsMain.innerHTML = goodsStr;

                //执行放大镜功能
                zoom();
                break;
            default:
                goodsMain.innerHTML = '<h2 style="padding:100px 0;text-align:center;font-size:60px;color:#f40;">请求商品数据失败，原因未知！</h2>';

                break;
        }

    },
    error: function(res) {
        return goodsMain.innerHTML = '<h2 style="padding:100px 0;text-align:center;font-size:60px;color:#f40;">请求商品数据失败，请检查网络设置！</h2>';
    }
});



//放大镜功能
function zoom() {
    var box = document.querySelector('.goods-pre-img');
    var mask = box.querySelector('.mask');
    var previewBox = box.querySelector('.preview-box');
    var bigImgBox = box.querySelector('.bigImg-box');
    var bigImg = box.querySelector('.bigImg-wrap');

    // 设置遮罩层的大小
    var w = previewBox.clientWidth * bigImgBox.clientWidth / bigImg.clientWidth;
    mask.style.width = w + 'px';
    mask.style.height = w + 'px';

    bigImgBox.style.display = 'none';

    // 鼠标移动遮罩层

    previewBox.onmouseenter = function() {
        mask.style.display = 'block';
        bigImgBox.style.display = 'block';
    };
    previewBox.onmouseleave = function() {
        mask.style.display = 'none';
        bigImgBox.style.display = 'none';
    };

    previewBox.onmousemove = function(e) {
        if (e.pageX - box.offsetLeft - box.clientLeft > mask.offsetWidth / 2) {
            mask.style.left = e.pageX - box.offsetLeft - box.clientLeft - mask.offsetWidth / 2 + 'px';
        } else {
            mask.style.left = '0px';
        }
        if (e.pageY - box.offsetTop - box.clientTop > mask.offsetHeight / 2) {
            mask.style.top = e.pageY - box.offsetTop - box.clientTop - mask.offsetHeight / 2 + 'px';
        } else {
            mask.style.top = '0px';
        }
        if ((box.clientWidth - (e.pageX - box.offsetLeft)) <= mask.offsetWidth / 2) {
            mask.style.left = (box.offsetWidth - Math.ceil(parseFloat(mask.style.width))) + 'px';
        }
        if ((box.clientHeight - (e.pageY - box.offsetTop)) <= mask.offsetHeight / 2) {
            mask.style.top = (box.offsetHeight - Math.ceil(parseFloat(mask.style.height))) + 'px';
        }
        bigImg.style.transform = 'translate(' + (-parseFloat(mask.style.left) * bigImg.offsetWidth / previewBox.clientWidth) + 'px,' + (-parseFloat(mask.style.top) * bigImg.offsetHeight / previewBox.clientHeight) + 'px)';
    };
}