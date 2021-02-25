"use strict";function filterSubMenu(){for(var t=document.querySelectorAll(".filter-items"),s=document.querySelectorAll(".filter-sub-item"),e=0;e<t.length;e++)t[e].setAttribute("data-index",e),s[e].setAttribute("data-index",e),t[e].onmouseover=function(){for(var e=0;e<s.length;e++)s[e].style.display="none",t[e].style.backgroundColor="#fff",t[e].querySelector(".icon-ai-arrow-down").style.display="inline-block",t[e].querySelector(".icon-jiantoushang-copy").style.display="none";this.style.backgroundColor="#E2E2E2",this.querySelector(".icon-ai-arrow-down").style.display="none",this.querySelector(".icon-jiantoushang-copy").style.display="inline-block",s[this.getAttribute("data-index")].style.display="block"},t[e].onmouseout=function(){this.style.backgroundColor="#fff",this.querySelector(".icon-ai-arrow-down").style.display="inline-block",this.querySelector(".icon-jiantoushang-copy").style.display="none",s[this.getAttribute("data-index")].style.display="none"},s[e].onmouseover=function(){this.style.display="block",this.parentNode.parentNode.querySelectorAll(".icon-ai-arrow-down")[this.getAttribute("data-index")].style.display="none",this.parentNode.parentNode.querySelectorAll(".icon-jiantoushang-copy")[this.getAttribute("data-index")].style.display="inline-block",t[this.getAttribute("data-index")].style.backgroundColor="#E2E2E2"},s[e].onmouseout=function(){this.style.display="none",this.parentNode.parentNode.querySelectorAll(".icon-ai-arrow-down")[this.getAttribute("data-index")].style.display="inline-block",this.parentNode.parentNode.querySelectorAll(".icon-jiantoushang-copy")[this.getAttribute("data-index")].style.display="none",t[this.getAttribute("data-index")].style.backgroundColor="#fff"};for(var r=document.querySelectorAll(".multi-select"),e=0;e<r.length;e++)r[e].onclick=function(){var e=document.querySelector(".main-nav-groups").querySelectorAll(".select"),t=this.parentNode.parentNode.querySelectorAll(".select"),s=this.parentNode.parentNode,o=document.querySelector(".main-nav-groups").querySelectorAll(".nav-row");if("0"==this.getAttribute("data-flag")){for(var i=0;i<o.length-1;i++)o[i].className="nav-row",r[i].setAttribute("data-flag","0"),o[i].querySelector(".nav-body-items").scrollTop=0;for(var a=0;a<e.length;a++)e[a].style.display="none";s.className="nav-row expand-mode";for(var l=0;l<t.length;l++)t[l].style.display="inline-block";this.setAttribute("data-flag","1")}else{s.className="nav-row";for(l=0;l<t.length;l++)t[l].style.display="none";this.setAttribute("data-flag","0")}};for(var o=document.querySelector(".main-nav-groups").querySelectorAll(".cancel-multi-select"),e=0;e<o.length;e++)o[e].onclick=function(){for(var e=this;-1===e.className.indexOf("nav-row");)e=e.parentNode;e.className="nav-row",e.querySelector(".multi-select").setAttribute("data-flag","0"),e.querySelector(".nav-body-items").scrollTop=0;for(var t=e.querySelectorAll(".select"),s=0;s<t.length;s++)t[s].style.display="none"};for(var i=document.querySelector(".main-nav-groups").getElementsByClassName("item"),e=0;e<i.length;e++)i[e].onclick=function(){if(this.querySelector(".text")){for(var e=this;-1===e.className.indexOf("nav-row");)e=e.parentNode;"1"==(e=e.querySelector(".multi-select")).getAttribute("data-flag")&&("0"==this.querySelector(".text").getAttribute("select-flag")?(this.querySelector(".select").style.backgroundPosition="-69px -423px",this.querySelector(".text").setAttribute("select-flag","1")):(this.querySelector(".select").style.backgroundPosition="-48px -423px",this.querySelector(".text").setAttribute("select-flag","0")))}};document.querySelector(".price-sort").onmouseover=function(){}}function getRandom(e,t){return Math.floor(Math.random()*(t-e+1))+e}filterSubMenu(),layui.use(["laypage","layer"],function(){var o=layui.laypage,s=layui.layer,u=document.getElementById("goodsItemsBox"),g=document.getElementById("hotGoodsBox"),p=[];function i(e,t){o.render({elem:"goodsPage",count:e,limit:t,layout:["prev","page","next","skip"],jump:function(e,t){for(var s,o,i=p.slice(48*(e.curr-1),48*e.curr),a=[],l=0;l<i.length;l++)-1!==i[l].goods_title.indexOf(i[l].category)&&(o=new RegExp(i[l].category,"gi"),o=i[l].goods_title.replace(o,'<span class="s-keyword">'+i[l].category+"</span>")),s='<div class="goods-item"><div class="goods-pic-wrap"><a href="./item.html?id='+i[l].id+'" target="_blank"><img src="'+i[l].goods_img+'" alt=""></a></div><div class="goods-info"><div class="line line1 clearfix"><div class="goods-price-box"><span>￥</span><strong class="goods-price">'+i[l].goods_price.toFixed(2)+'</strong></div><div class="pay-number">'+i[l].goods_sales+'人付款</div><div class="goods-service-icon"></div></div><div class="line line2 clearfix"><a href="./item.html?id='+i[l].id+'" class="goods-title-dec" target="_blank">'+o+'</a></div><div class="line line3 clearfix"><div class="goods-shop"><a href="./item.html?id='+i[l].id+'" class="shop-link" target="_blank"><span class="shop-icon"></span><span class="shop-name">'+i[l].shop_name+'</span></a></div><div class="location">广东 深圳</div></div><div class="line line4 clearfix"><div class="shop-honors"><ul class="clearfix"></ul></div><div class="wangwang-icon"><a href="javascript:;"></a></div></div></div></div>',a.push(s);u.innerHTML=a.join("");for(var r,n=[],c=[],l=0;l<16;l++){for(var d=getRandom(0,p.length-1);-1!==n.indexOf(d);)d=getRandom(0,p.length-1);n.push(d),r=' <li><div class="hot-goods-img-wrap"><a href="./item.html?id='+p[d].id+'" target="_blank"><img src="'+p[d].goods_img+'" alt=""></a></div><div class="hot-goods-info clearfix"><div class="hot-goods-price"><a href="./item.html?id='+p[d].id+'" target="_blank"><em>¥</em><strong>'+p[d].goods_price.toFixed(2)+'</strong></a></div><div class="hot-goods-sales"><a href="./item.html?id='+p[d].id+'" target="_blank">销量：<span>'+p[d].goods_sales+'</span></a></div></div><div class="hot-goods-title-mask"><a href="./item.html?id='+p[d].id+'" target="_blank"><h3 class="title">'+p[d].goods_title+"</h3></a></div></li>",c.push(r)}g.innerHTML=c.join("")}});var s=document.querySelector(".goods-page").querySelector(".layui-laypage-skip"),t=document.createTextNode("共 "+Math.ceil(e/t)+" 页，");s.insertBefore(t,s.childNodes[0])}$.ajax({url:"/api/goodslist",method:"GET",success:function(e){if(1!==e.status)return console.log(e.message);p=e.data,i(e.total,e.limit)}}),$(".sort-module .sort-btn").on("click",function(){$.each($(".sort-module .sort-btn"),function(e,t){$(t).removeClass("activity")}),$(".sort-module .sort-price").removeClass("activity"),$(this).addClass("activity"),$(this).hasClass("sort-default-btn")&&$.ajax({url:"/api/goodslist",method:"GET",success:function(e){if(1!==e.status)return console.log(e.message);p=e.data,i(e.total,e.limit)}}),$(this).hasClass("sort-sales-btn")&&$.ajax({url:"/api/goodslist/sales",method:"GET",success:function(e){if(1!==e.status)return console.log(e.message);p=e.data,i(e.total,e.limit)}}),$(this).hasClass("sort-credit-btn")&&$.ajax({url:"/api/goodslist/credit",method:"GET",success:function(e){if(1!==e.status)return console.log(e.message);p=e.data,i(e.total,e.limit)}}),$(this).hasClass("sort-price-asc")&&($(".sort-module .sort-price").html($(this).text()+'<i class="iconfont icon-ai-arrow-down"></i>').addClass("activity"),$.ajax({url:"/api/goodslist/price_asc",method:"GET",success:function(e){if(1!==e.status)return console.log(e.message);p=e.data,i(e.total,e.limit)}})),$(this).hasClass("sort-price-desc")&&($(".sort-module .sort-price").html($(this).text()+'<i class="iconfont icon-ai-arrow-down"></i>').addClass("activity"),$.ajax({url:"/api/goodslist/price_desc",method:"GET",success:function(e){if(1!==e.status)return console.log(e.message);p=e.data,i(e.total,e.limit)}}))}),$(".sort-module .price-submit-btn").on("click",function(){var e=parseFloat($(".sort-module .input-price-filter1").val().trim()),t=parseFloat($(".sort-module .input-price-filter2").val().trim());if(!e||!t||t<e)return s.msg("请输入正确的价格区间！");$.ajax({url:"/api/goodslist/price_range",method:"GET",data:{price1:e,price2:t},success:function(e){return 1!==e.status?console.log(e.message):0<e.data.length?(p=e.data,void i(e.total,e.limit)):s.msg("没有查询到相应结果！")}})})});