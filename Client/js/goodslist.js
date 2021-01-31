//筛选模块
filterSubMenu();



//筛选模块功能
function filterSubMenu() {
    //筛选条件二级菜单显示
    var filterItems = document.querySelectorAll('.filter-items');
    var filterSubItems = document.querySelectorAll('.filter-sub-item');
    for (var i = 0; i < filterItems.length; i++) {
        filterItems[i].setAttribute('data-index', i);
        filterSubItems[i].setAttribute('data-index', i);
        filterItems[i].onmouseover = function() {
            for (var j = 0; j < filterSubItems.length; j++) {
                filterSubItems[j].style.display = 'none';
                filterItems[j].style.backgroundColor = '#fff';
                filterItems[j].querySelector('.icon-ai-arrow-down').style.display = 'inline-block';
                filterItems[j].querySelector('.icon-jiantoushang-copy').style.display = 'none';
            }
            this.style.backgroundColor = '#E2E2E2';
            this.querySelector('.icon-ai-arrow-down').style.display = 'none';
            this.querySelector('.icon-jiantoushang-copy').style.display = 'inline-block';
            filterSubItems[this.getAttribute('data-index')].style.display = 'block';
        };
        filterItems[i].onmouseout = function() {
            this.style.backgroundColor = '#fff';
            this.querySelector('.icon-ai-arrow-down').style.display = 'inline-block';
            this.querySelector('.icon-jiantoushang-copy').style.display = 'none';
            filterSubItems[this.getAttribute('data-index')].style.display = 'none';
        };
        filterSubItems[i].onmouseover = function() {
            this.style.display = 'block';
            this.parentNode.parentNode.querySelectorAll('.icon-ai-arrow-down')[this.getAttribute('data-index')].style.display = 'none';
            this.parentNode.parentNode.querySelectorAll('.icon-jiantoushang-copy')[this.getAttribute('data-index')].style.display = 'inline-block';
            filterItems[this.getAttribute('data-index')].style.backgroundColor = '#E2E2E2';

        };
        filterSubItems[i].onmouseout = function() {
            this.style.display = 'none';
            this.parentNode.parentNode.querySelectorAll('.icon-ai-arrow-down')[this.getAttribute('data-index')].style.display = 'inline-block';
            this.parentNode.parentNode.querySelectorAll('.icon-jiantoushang-copy')[this.getAttribute('data-index')].style.display = 'none';
            filterItems[this.getAttribute('data-index')].style.backgroundColor = '#fff';
        };
    }

    //多选框显示
    var multiSelects = document.querySelectorAll('.multi-select');
    for (var i = 0; i < multiSelects.length; i++) {
        multiSelects[i].onclick = function() {
            var allSelect = document.querySelector('.main-nav-groups').querySelectorAll('.select');
            var selects = this.parentNode.parentNode.querySelectorAll('.select');
            var navRow = this.parentNode.parentNode;
            var navRows = document.querySelector('.main-nav-groups').querySelectorAll('.nav-row');
            if (this.getAttribute('data-flag') == '0') {
                //重置所有容器高度
                for (var z = 0; z < navRows.length - 1; z++) {
                    navRows[z].className = 'nav-row';
                    multiSelects[z].setAttribute('data-flag', '0');
                    navRows[z].querySelector('.nav-body-items').scrollTop = 0;
                }
                //隐藏所有子选项框
                for (var k = 0; k < allSelect.length; k++) {
                    allSelect[k].style.display = 'none';
                }

                //改变对应容器高度
                navRow.className = 'nav-row expand-mode';
                for (var j = 0; j < selects.length; j++) {
                    //显示对应容器中每个子项选中框
                    selects[j].style.display = 'inline-block';
                }
                this.setAttribute('data-flag', '1');
            } else {
                //恢复容器高度
                navRow.className = 'nav-row';
                for (var j = 0; j < selects.length; j++) {
                    //隐藏每个子项选中框
                    selects[j].style.display = 'none';
                }
                this.setAttribute('data-flag', '0');
            }

        };
    }

    //取消筛选扩展
    var cancelBtns = document.querySelector('.main-nav-groups').querySelectorAll('.cancel-multi-select');
    for (var i = 0; i < cancelBtns.length; i++) {
        cancelBtns[i].onclick = function() {
            var thisRow = this;
            while (thisRow.className.indexOf('nav-row') === -1) {
                thisRow = thisRow.parentNode;
            }
            thisRow.className = 'nav-row';
            thisRow.querySelector('.multi-select').setAttribute('data-flag', '0');
            thisRow.querySelector('.nav-body-items').scrollTop = 0;
            var thisSelects = thisRow.querySelectorAll('.select');
            for (var i = 0; i < thisSelects.length; i++) {
                thisSelects[i].style.display = 'none';
            }

        };
    }

    //选中筛选框
    var items = document.querySelector('.main-nav-groups').getElementsByClassName('item');
    //绑定点击改变选项框状态事件
    for (var i = 0; i < items.length; i++) {
        items[i].onclick = function() {
            if (this.querySelector('.text')) {
                var thisMultiselect = this;
                while (thisMultiselect.className.indexOf('nav-row') === -1) {
                    thisMultiselect = thisMultiselect.parentNode;
                }
                thisMultiselect = thisMultiselect.querySelector('.multi-select');
                if (thisMultiselect.getAttribute('data-flag') == '1') {
                    if (this.querySelector('.text').getAttribute('select-flag') == '0') {
                        this.querySelector('.select').style.backgroundPosition = '-69px -423px';
                        this.querySelector('.text').setAttribute('select-flag', '1');
                    } else {
                        this.querySelector('.select').style.backgroundPosition = '-48px -423px';
                        this.querySelector('.text').setAttribute('select-flag', '0');
                    }
                }
            }
        };
    }


    //价格排序的二级菜单
    var priceSort = document.querySelector('.price-sort');
    priceSort.onmouseover = function() {
        // priceSort.querySelector('.sort-sub-list').style.display
    }
}

//商品分页功能
(function() {

    layui.use('laypage', function() {
        var laypage = layui.laypage;

        var goodsItemsBox = document.getElementById('goodsItemsBox');
        var hotGoodsBox = document.getElementById('hotGoodsBox');

        //请求商品数据
        var goodsData = [];

        $.ajax({
            url: 'http://127.0.0.1/api/goodslist',
            method: 'GET',
            success: function(res) {
                if (res.status !== 1) {
                    return console.log(res.message);
                }
                goodsData = res.data;
                //渲染分页器
                laypage.render({
                    elem: 'goodsPage',
                    count: res.total,
                    limit: res.limit,
                    layout: ['prev', 'page', 'next', 'skip'],
                    jump: function(obj, first) {
                        //渲染对应页的商品数目
                        var data = goodsData.slice((obj.curr - 1) * 48, obj.curr * 48);
                        var goodsArr = [];
                        var goodsStr = '';
                        for (var i = 0; i < data.length; i++) {
                            var serviceStr = '';
                            if (data[i].shop_service) {
                                var s = data[i].shop_service;
                                if (s.indexOf('icon-service-tianmao') !== -1) {
                                    serviceStr += '<li class="tm-icon"><a href="#"></a></li>';
                                }
                                if (s.indexOf('icon-service-jinpaimaijia') !== -1) {
                                    serviceStr += '<li class="gold-seller"><a href="#"></a></li>';
                                }
                                if (s.indexOf('icon-service-xinpin') !== -1) {
                                    serviceStr += '<li class="new-goods-icon"><a href="#"></a></li>';
                                }
                                if (s.indexOf('icon-service-fuwu') !== -1) {
                                    serviceStr += '<li class="service"><a href="#"></a></li>';
                                }
                                if (s.indexOf('icon-fest-gongyibaobei') !== -1) {
                                    serviceStr += '<li class="public-welfare"><a href="#"></a></li>';
                                }
                            }
                            //商品模板
                            goodsStr = '<div class="goods-item"><div class="goods-pic-wrap"><a href="#"><img src="' + data[i].goods_img + '" alt=""></a></div><div class="goods-info"><div class="line line1 clearfix"><div class="goods-price-box"><span>￥</span><strong class="goods-price">' + data[i].goods_price + '</strong></div><div class="pay-number">' + data[i].pay_num + '</div><div class="goods-service-icon"></div></div><div class="line line2 clearfix"><a href="#" class="goods-title-dec">' + data[i].goods_title + '</a></div><div class="line line3 clearfix"><div class="goods-shop"><a href="#" class="shop-link"><span class="shop-icon"></span><span class="shop-name">' + data[i].shop_name + '</span></a></div><div class="location">' + data[i].shop_location + '</div></div><div class="line line4 clearfix"><div class="shop-honors"><ul class="clearfix">' + serviceStr + '</ul></div><div class="wangwang-icon"><a href="#"></a></div></div></div></div>';
                            goodsArr.push(goodsStr);
                        }
                        goodsItemsBox.innerHTML = goodsArr.join('');

                        //渲染掌柜热卖
                        var hotArr = [];
                        var hotGoods = [];
                        var hotStr = '';
                        for (var i = 0; i < 16; i++) {
                            var random = getRandom(0, goodsData.length - 1);
                            while (hotArr.indexOf(random) !== -1) {
                                random = getRandom(0, goodsData.length - 1);
                            }
                            hotArr.push(random);
                            hotStr = ' <li><div class="hot-goods-img-wrap"><a href="#"><img src="' + goodsData[random].goods_img + '" alt=""></a></div><div class="hot-goods-info clearfix"><div class="hot-goods-price"><a href="#"><em>¥</em><strong>' + goodsData[random].goods_price + '</strong></a></div><div class="hot-goods-sales"><a href="#">销量：<span>' + goodsData[random].pay_num.replace('.0万', '0000') + '</span></a></div></div><div class="hot-goods-title-mask"><a href="#"><h3 class="title">' + goodsData[random].goods_title + '</h3></a></div></li>';
                            hotGoods.push(hotStr);
                        }
                        hotGoodsBox.innerHTML = hotGoods.join('');

                    }
                });

                //显示总页数文本
                var pageTextDom = document.querySelector('.goods-page').querySelector('.layui-laypage-skip');
                var totalPageText = document.createTextNode('共 ' + Math.ceil(res.total / res.limit) + ' 页，');
                pageTextDom.insertBefore(totalPageText, pageTextDom.childNodes[0]);

            }
        });



    });


})();

//掌柜热卖随机渲染
(function() {

})();


//获取指定范围的随机整数函数
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}