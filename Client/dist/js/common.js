"use strict";function login(){$(".login-link").on("click",function(a){return a.preventDefault(),location.href="./login.html?source="+location.href})}function renderHeaderShopCart(){layui.use("layer",function(){localStorage.getItem("token")?$.ajax({url:"/shop/cartInfo",method:"POST",success:function(a){if(1!==a.status)return $(".shopping-cart-menu").html("<p>"+a.message+'<a href="./login.html" class="my-shopping-cart-link">重新登录</a></p>'),layer.msg(a.message);if($(".header-right-nav .shopping-cart .good-num").text(a.data.length),0<a.data.length){for(var e="",o=0;o<a.data.length&&!(3<=o);o++)e+='<div class="mini-item clearfix"><div class="mini-goods-img-wrap"><a href="./item.html?id='+a.data[o].goods_id+'"><img src="'+a.data[o].goods_img+'" alt="" title="'+a.data[o].goods_name+'"></a></div><div class="mini-goods-title"><h4><a href="./item.html?id='+a.data[o].goods_id+'" title="'+a.data[o].goods_name+'">'+a.data[o].goods_name+'</a></h4></div><div class="mini-goods-right"><div class="mini-goods-price"><em class="rmb-symbol">￥</em><em class="goods-price">'+parseFloat(a.data[o].goods_price).toFixed(2)+'</em></div><div class="goods-option"><a href="javascript:;" class="hd-mini-cart-delete">删除</a></div></div></div>';var t='<div class="mini-cart-hd"><h4>最近加入的宝贝：</h4></div><div class="mini-cart-goods">'+e+'</div><div class="mini-cart-ft clearfix"><h3>更多请查看完整版购物车→</h3><a href="./cart.html" class="my-shopping-cart-link">查看我的购物车</a></div>';$(".shopping-cart-menu").html(t)}else $(".shopping-cart-menu").html('<p>您购物车里还没有任何宝贝。<a href="./cart.html" class="my-shopping-cart-link">查看我的购物车</a></p>')},error:function(){return $(".shopping-cart-menu").html('<p>请检查网络设置，或者重新登陆。<a href="./login.html" class="my-shopping-cart-link">重新登录</a></p>'),layer.msg("请求购物车信息失败，请检查网络设置！")}}):$(".shopping-cart-menu").html('<p>您还未登录，请先登录。<a href="./login.html" class="my-shopping-cart-link">点我登录</a></p>')})}function loginout(){$("#loginout").on("click",function(){localStorage.removeItem("token"),location.reload()})}$(function(){var e=document.querySelector(".welcome-user");layui.use("layer",function(){var a=layui.layer;localStorage.getItem("token")?$.ajax({url:"/user/userInfo",method:"GET",success:function(a){e.innerHTML='欢迎你，<span style="color:#f40;">'+a.data.username+'</span><a href="javascript:;" id="loginout" style="color: #F40;margin-left:10px;">退出登录</a>',loginout()},error:function(){return e.innerHTML='<a href="./login.html" class="login-link">亲，请登录</a><a href="./registered.html" class="reg-link">免费注册</a>',a.msg("自动登录失败，请检查网络设置后重新登陆！")}}):(e.innerHTML='<a href="./login.html" class="login-link">亲，请登录</a><a href="./registered.html" class="reg-link">免费注册</a>',login())})}),renderHeaderShopCart(),function(){var a=document.getElementById("siteNavTrigger"),e=document.getElementById("sideNavModule");a.onmouseover=function(){e.style.display="block",a.style.backgroundColor="#fff"},e.onmouseover=function(){e.style.display="block",a.style.backgroundColor="#fff"},a.onmouseout=function(){e.style.display="none",a.style.backgroundColor="transparent"},e.onmouseout=function(){e.style.display="none",a.style.backgroundColor="transparent"}}();