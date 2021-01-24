  /* main执行区 START */


  // 控制页面元素状态
  controlElements();
  // 右侧固定导航状态计算
  siderPosition();
  // 淘宝轮播图
  tbSwiperFn();
  // 天猫轮播图
  tmSwiperFn();
  // 触发网站导航
  displaySideNav();
  // 搜索tab栏切换
  searchTabsSwitch();
  // 触发侧边导航栏二级菜单
  asideNavSubMenu();
  // 渲染快捷功能精灵图
  rederConveSprite();
  // 公告栏切换
  noticeSwitch();
  // 便捷功能二级菜单模块
  conveSubCard();
  // 关闭二维码
  closeQRcode();


  /* main执行区 END */



  /* ------------------------------------------------ */


  /* 各功能模块区 START */


  // 控制页面元素状态
  function controlElements() {
      //获取底部背景块
      var sideBottomBlock1 = document.querySelector('.side-bottom-block-bg1');
      var sideBottomBlock2 = document.querySelector('.side-bottom-block-bg2');

      var content = document.getElementById('content');
      //获取网页宽度
      var htmlWidth = document.documentElement.offsetWidth;
      //获取版心宽度
      var mainWidth = document.getElementById('main').offsetWidth;
      //获取body
      var body = document.body;
      var main = document.getElementById('main');
      //获取背景块
      var sideTopBlock = document.querySelectorAll('.side-block-bg');
      // 获取右边固定导航栏
      var sideBarFixed = document.getElementById('fixedSiderBar');
      window.onresize = function() {
          //计算底部背景块left
          sideBottomBlock1.style.left = (content.offsetLeft - sideBottomBlock1.offsetWidth) + 'px';
          sideBottomBlock2.style.right = (content.offsetLeft - sideBottomBlock2.offsetWidth) + 'px';

          //计算右边固定导航栏位置
          sideBarFixed.style.left = (main.offsetLeft + main.offsetWidth + 10) + 'px';
          //控制背景块显示
          htmlWidth = document.documentElement.offsetWidth;
          if (htmlWidth >= mainWidth) {
              body.style.overflowX = 'hidden';
              sideTopBlock[0].style.display = 'block';
              sideTopBlock[1].style.display = 'block';
          } else {
              body.style.overflowX = 'auto';
              sideTopBlock[0].style.display = 'none';
              sideTopBlock[1].style.display = 'none';
          }


      }
      window.onload = function() {
          //计算底部背景块left
          sideBottomBlock1.style.left = (content.offsetLeft - sideBottomBlock1.offsetWidth) + 'px';
          sideBottomBlock2.style.right = (content.offsetLeft - sideBottomBlock2.offsetWidth) + 'px';

          //计算右边固定导航栏位置
          sideBarFixed.style.left = (main.offsetLeft + main.offsetWidth + 10) + 'px';

          //控制背景块显示
          htmlWidth = document.documentElement.offsetWidth;
          if (htmlWidth >= mainWidth) {
              body.style.overflowX = 'hidden';
              sideTopBlock[0].style.display = 'block';
              sideTopBlock[1].style.display = 'block';
          } else {
              body.style.overflowX = 'auto';
              sideTopBlock[0].style.display = 'none';
              sideTopBlock[1].style.display = 'none';
          }
      }
  }


  // 公告栏切换
  function noticeSwitch() {
      var noticeTabs = document.getElementsByClassName('notice-tab');
      var noticeList = document.getElementsByClassName('notice-list');
      //绑定鼠标划过切换公告栏事件
      for (var i = 0; i < noticeTabs.length; i++) {
          //添加自定义序列
          noticeTabs[i].setAttribute("data-index", i);
          //添加定时器
          var noticeTabTimer = null;

          noticeTabs[i].onmouseenter = function() {
              //获取触发对象的索引序列
              var noticeIndex = this.getAttribute('data-index');
              //延迟显示
              noticeTabTimer = setTimeout(function() {
                  //重置类名
                  for (var j = 0; j < noticeTabs.length; j++) {
                      noticeTabs[j].className = 'notice-tab';
                      noticeList[j].className = 'notice-list clearfix';
                  }
                  //将触发对象设为激活时样式
                  noticeTabs[noticeIndex].className = 'notice-tab notice-tab-select';
                  //显示对应公告内容
                  noticeList[noticeIndex].className = 'notice-list notice-list-visible clearfix';
                  //清除定时器
                  clearTimeout(noticeTabTimer);
              }, 350);
          };
          //当鼠标离开时不再执行定时器内容
          noticeTabs[i].onmouseleave = function() {
              clearTimeout(noticeTabTimer);
          };
      }
  }


  // 固定导航状态计算
  function siderPosition() {
      //返回顶部
      var returnTop = document.querySelector('.returnTop');
      var siderBar = document.querySelector('.sider-bar');
      var main = document.getElementById('main');
      var content = document.getElementById('content');
      var siderBarItems = document.getElementsByClassName('sider-bar-item');
      //顶部固定搜索栏
      var topFixedSearch = document.getElementById('fixedSearch');
      //品质好货
      var discoverGoods = document.getElementById('discoverGoods');
      //好店直播
      var tbLive = document.getElementById('tbLive');
      //实惠热卖
      var hotSales = document.getElementById('hotSales');
      //猜你喜欢
      var guessLike = document.getElementById('guessLike');
      //导航状态控制阀
      var flag = true;
      window.addEventListener('scroll', function() {

          // 控制顶部固定搜索栏显示
          if (document.documentElement.scrollTop >= 300) {
              topFixedSearch.style.display = 'block';
          } else {
              topFixedSearch.style.display = 'none';
          }

          //计算右侧导航位置
          if (document.documentElement.scrollTop >= 470) {
              siderBar.style.position = 'fixed';
              siderBar.style.top = '70px';
              //计算右边固定导航栏位置
              siderBar.style.left = (main.offsetLeft + main.offsetWidth + 10) + 'px';
          } else {
              //计算右边固定导航栏位置
              siderBar.style.left = (main.offsetLeft + main.offsetWidth + 10) + 'px';
              siderBar.style.position = 'absolute';
              siderBar.style.top = '500px';

          }

          //返回顶部显示
          if (document.documentElement.scrollTop >= 750) {
              returnTop.style.display = 'block';
          } else {
              returnTop.style.display = 'none';
          }

          //右侧导航显示对应滚动到的区域
          if (flag) {
              if (document.documentElement.scrollTop < (tbLive.offsetTop + content.offsetTop)) {
                  for (var i = 0; i < siderBarItems.length; i++) {
                      siderBarItems[i].className = 'sider-bar-item';
                  }
                  siderBarItems[0].className = 'nav-activity sider-bar-item';
              } else if (document.documentElement.scrollTop >= (tbLive.offsetTop + content.offsetTop) && document.documentElement.scrollTop < hotSales.offsetTop + content.offsetTop) {
                  for (var i = 0; i < siderBarItems.length; i++) {
                      siderBarItems[i].className = 'sider-bar-item';
                  }
                  siderBarItems[1].className = 'nav-activity sider-bar-item';
              } else if (document.documentElement.scrollTop >= (hotSales.offsetTop + content.offsetTop) && document.documentElement.scrollTop < guessLike.offsetTop + content.offsetTop) {
                  for (var i = 0; i < siderBarItems.length; i++) {
                      siderBarItems[i].className = 'sider-bar-item';
                  }
                  siderBarItems[2].className = 'nav-activity sider-bar-item';
              } else if (document.documentElement.scrollTop >= (guessLike.offsetTop + content.offsetTop + 2)) {
                  for (var i = 0; i < siderBarItems.length; i++) {
                      siderBarItems[i].className = 'sider-bar-item';
                  }
                  siderBarItems[3].className = 'nav-activity sider-bar-item';
              }
          }

      });

      // 返回顶部功能
      returnTop.addEventListener('click', function() {
          animate2(window, 0);
      });

      // 添加点击导航按钮跳转到对应模块
      siderBarItems[0].onclick = function() {
          flag = false;
          for (var i = 0; i < siderBarItems.length; i++) {
              siderBarItems[i].className = 'sider-bar-item';
          }
          siderBarItems[0].className = 'nav-activity sider-bar-item';
          animate2(window, discoverGoods.offsetTop + content.offsetTop, function() {
              flag = true;
          });
      };
      siderBarItems[1].onclick = function() {
          flag = false;
          for (var i = 0; i < siderBarItems.length; i++) {
              siderBarItems[i].className = 'sider-bar-item';
          }
          siderBarItems[1].className = 'nav-activity sider-bar-item';
          animate2(window, tbLive.offsetTop + content.offsetTop + 2, function() {
              flag = true;
          });
      };
      siderBarItems[2].onclick = function() {
          flag = false;
          for (var i = 0; i < siderBarItems.length; i++) {
              siderBarItems[i].className = 'sider-bar-item';
          }
          siderBarItems[2].className = 'nav-activity sider-bar-item';
          animate2(window, hotSales.offsetTop + content.offsetTop + 2, function() {
              flag = true;
          });
      };
      siderBarItems[3].onclick = function() {
          flag = false;
          for (var i = 0; i < siderBarItems.length; i++) {
              siderBarItems[i].className = 'sider-bar-item';
          }
          siderBarItems[3].className = 'nav-activity sider-bar-item';
          animate2(window, guessLike.offsetTop + content.offsetTop + 2, function() {
              flag = true;
          });
      };

  }

  // 网页滚动动画
  function animate2(obj, target, callback) {
      clearInterval(obj.timer);
      obj.timer = setInterval(function() {

          var step = (target - window.pageYOffset) / 10;
          step = step > 0 ? Math.ceil(step) : Math.floor(step);

          if (parseInt(window.pageYOffset) == target) {
              clearInterval(obj.timer);
              callback && callback();
          }
          window.scroll(0, window.pageYOffset + step);

      }, 15);
  }


  // 淘宝轮播图 
  function tbSwiperFn() {
      var tbBanner = document.getElementById('tbBanner');
      var tbSwiper = document.getElementById('tbSwiper');
      var tbSwiperItems = tbSwiper.children;
      var tbSwiperItemNum = tbSwiperItems.length;
      var tbSwiperFirstItem = tbSwiperItems[0].cloneNode(true);
      var tbSwiperLastItem = tbSwiperItems[tbSwiperItems.length - 1].cloneNode(true);
      var tbSwiperItemWidth = tbSwiperItems[0].offsetWidth;
      var tbSwiperTabs = document.getElementById('tbSwiperTabs');
      for (var i = 0; i < tbSwiperItems.length; i++) {
          var li = document.createElement('li');
          li.className = 'tb-banner-tab';
          tbSwiperTabs.appendChild(li);
      }
      var tbSwiperTabsItem = tbSwiperTabs.children;
      tbSwiper.appendChild(tbSwiperFirstItem);
      tbSwiper.insertBefore(tbSwiperLastItem, tbSwiperItems[0]);
      var tbSwiperItemsIndex = 0;
      tbSwiperTabsItem[tbSwiperItemsIndex].className = 'tb-banner-tab tab-activity';
      var tbSwiperTimer = setInterval(function() {
          tbSwiperBanner();
      }, 2000);
      tbSwiper.style.left = -tbSwiperItemWidth + 'px';

      function tbSwiperBanner() {
          if (tbSwiperItemsIndex == tbSwiperItemNum - 1) {
              tbSwiperTabsItem[tbSwiperItemsIndex].className = 'tb-banner-tab';
              tbSwiper.style.left = '0px';
              tbSwiperItemsIndex = 0;
              animate(tbSwiper, -tbSwiperItemWidth * (tbSwiperItemsIndex + 1));
              tbSwiperTabsItem[tbSwiperItemsIndex].className = 'tb-banner-tab tab-activity';
          } else {
              tbSwiperTabsItem[tbSwiperItemsIndex].className = 'tb-banner-tab';
              tbSwiperItemsIndex++;
              tbSwiperTabsItem[tbSwiperItemsIndex].className = 'tb-banner-tab tab-activity';
              animate(tbSwiper, -tbSwiperItemWidth * (tbSwiperItemsIndex + 1));
          }
      }
      //鼠标悬停暂停轮播
      tbBanner.onmouseover = function() {
          clearInterval(tbSwiperTimer);
      };
      tbBanner.onmouseout = function() {
          tbSwiperTimer = setInterval(function() {
              tbSwiperBanner();
          }, 2000);
      };
      //鼠标点击切换轮播
      var tbSwiperPreBtn = document.getElementById('tbSwiperPreBtn');
      var tbSwiperNextBtn = document.getElementById('tbSwiperNextBtn');
      //切换到上一张
      tbSwiperPreBtn.onclick = function() {
          if (tbSwiperItemsIndex == 0) {
              tbSwiperTabsItem[tbSwiperItemsIndex].className = 'tb-banner-tab';
              tbSwiperItemsIndex = tbSwiperItemNum - 1;
              tbSwiper.style.left = -tbSwiperItemWidth * (tbSwiperItemsIndex + 2) + 'px';
              tbSwiperTabsItem[tbSwiperItemsIndex].className = 'tb-banner-tab tab-activity';
              animate(tbSwiper, -tbSwiperItemWidth * (tbSwiperItemsIndex + 1));
          } else {
              tbSwiperTabsItem[tbSwiperItemsIndex].className = 'tb-banner-tab';
              tbSwiperItemsIndex--;
              tbSwiperTabsItem[tbSwiperItemsIndex].className = 'tb-banner-tab tab-activity';
              animate(tbSwiper, -tbSwiperItemWidth * (tbSwiperItemsIndex + 1));
          }
      };
      //切换到下一张
      tbSwiperNextBtn.onclick = function() {
          tbSwiperBanner();
      };
      //点击提示按钮进行切换
      for (var i = 0; i < tbSwiperTabsItem.length; i++) {
          tbSwiperTabsItem[i].setAttribute('data-index', i);
          tbSwiperTabsItem[i].onclick = function() {
              tbSwiperTabsItem[tbSwiperItemsIndex].className = 'tb-banner-tab';
              tbSwiperItemsIndex = parseInt(this.getAttribute('data-index'));
              tbSwiperTabsItem[tbSwiperItemsIndex].className = 'tb-banner-tab tab-activity';
              animate(tbSwiper, -tbSwiperItemWidth * (tbSwiperItemsIndex + 1));
          }
      }
  }


  // 天猫轮播图 
  function tmSwiperFn() {
      var tmBanner = document.getElementById('tmBanner');
      var tmSwiper = document.getElementById('tmSwiper');
      var tmSwiperItems = tmSwiper.children;
      var tmSwiperItemNum = tmSwiperItems.length;
      var tmSwiperFirstItem = tmSwiperItems[0].cloneNode(true);
      var tmSwiperLastItem = tmSwiperItems[tmSwiperItems.length - 1].cloneNode(true);
      var tmSwiperItemWidth = tmSwiperItems[0].offsetWidth;
      var tmSwiperTabs = document.getElementById('tmSwiperTabs');
      var tmSwiperProgressNum = document.getElementById('tmSwiperProgressNum');
      var tmSwiperTabsItem = tmSwiperTabs.children;
      tmSwiper.appendChild(tmSwiperFirstItem);
      tmSwiper.insertBefore(tmSwiperLastItem, tmSwiperItems[0]);
      var tmSwiperItemsIndex = 0;
      tmSwiperTabsItem[tmSwiperItemsIndex].className = 'tm-banner-progress-item progress-activity';
      tmSwiperProgressNum.innerText = tmSwiperItemsIndex + 1;
      var tmSwiperTimer = setInterval(function() {
          tmSwiperBanner();
      }, 3000);
      tmSwiper.style.left = -tmSwiperItemWidth + 'px';

      function tmSwiperBanner() {
          if (tmSwiperItemsIndex == tmSwiperItemNum - 1) {
              tmSwiperTabsItem[tmSwiperItemsIndex].className = 'tm-banner-progress-item';
              tmSwiper.style.left = '0px';
              tmSwiperItemsIndex = 0;
              tmSwiperProgressNum.innerText = tmSwiperItemsIndex + 1;
              animate(tmSwiper, -tmSwiperItemWidth * (tmSwiperItemsIndex + 1));
              tmSwiperTabsItem[tmSwiperItemsIndex].className = 'tm-banner-progress-item progress-activity';
          } else {
              tmSwiperTabsItem[tmSwiperItemsIndex].className = 'tm-banner-progress-item';
              tmSwiperItemsIndex++;
              tmSwiperProgressNum.innerText = tmSwiperItemsIndex + 1;
              tmSwiperTabsItem[tmSwiperItemsIndex].className = 'tm-banner-progress-item progress-activity';
              animate(tmSwiper, -tmSwiperItemWidth * (tmSwiperItemsIndex + 1));
          }
      }
      //鼠标悬停暂停轮播
      tmBanner.onmouseover = function() {
          clearInterval(tmSwiperTimer);
      };
      tmBanner.onmouseout = function() {
          tmSwiperTimer = setInterval(function() {
              tmSwiperBanner();
          }, 3000);
      };
      //鼠标点击切换轮播
      var tmSwiperPreBtn = document.getElementById('tmSwiperPreBtn');
      var tmSwiperNextBtn = document.getElementById('tmSwiperNextBtn');
      //切换到上一张
      tmSwiperPreBtn.onclick = function() {
          if (tmSwiperItemsIndex == 0) {
              tmSwiperTabsItem[tmSwiperItemsIndex].className = 'tm-banner-progress-item';
              tmSwiperItemsIndex = tmSwiperItemNum - 1;
              tmSwiperProgressNum.innerText = tmSwiperItemsIndex + 1;
              tmSwiper.style.left = -tmSwiperItemWidth * (tmSwiperItemsIndex + 2) + 'px';
              tmSwiperTabsItem[tmSwiperItemsIndex].className = 'tm-banner-progress-item progress-activity';
              animate(tmSwiper, -tmSwiperItemWidth * (tmSwiperItemsIndex + 1));
          } else {
              tmSwiperTabsItem[tmSwiperItemsIndex].className = 'tm-banner-progress-item';
              tmSwiperItemsIndex--;
              tmSwiperProgressNum.innerText = tmSwiperItemsIndex + 1;
              tmSwiperTabsItem[tmSwiperItemsIndex].className = 'tm-banner-progress-item progress-activity';
              animate(tmSwiper, -tmSwiperItemWidth * (tmSwiperItemsIndex + 1));
          }
      };
      //切换到下一张
      tmSwiperNextBtn.onclick = function() {
          tmSwiperBanner();
      };
      //点击按钮进行切换
      for (var i = 0; i < tmSwiperTabsItem.length; i++) {
          tmSwiperTabsItem[i].setAttribute('data-index', i);
          tmSwiperTabsItem[i].onclick = function() {
              tmSwiperTabsItem[tmSwiperItemsIndex].className = 'tm-banner-progress-item';
              tmSwiperItemsIndex = parseInt(this.getAttribute('data-index'));
              tmSwiperProgressNum.innerText = tmSwiperItemsIndex + 1;
              tmSwiperTabsItem[tmSwiperItemsIndex].className = 'tm-banner-progress-item progress-activity';
              animate(tmSwiper, -tmSwiperItemWidth * (tmSwiperItemsIndex + 1));
          }
      }
  }


  // 缓冲动画函数
  function animate(obj, target, callback) {
      clearInterval(obj.timer);
      obj.timer = setInterval(function() {
          var step = (target - obj.offsetLeft) / 10;
          step = step > 0 ? Math.ceil(step) : Math.floor(step);

          if (obj.offsetLeft == target) {
              clearInterval(obj.timer);

              if (callback) {
                  callback();
              }
          }

          obj.style.left = obj.offsetLeft + step + 'px';
      }, 10);
  }

  // 触发网站导航
  function displaySideNav() {
      var siteNavTrigger = document.getElementById('siteNavTrigger');
      var sideNavModule = document.getElementById('sideNavModule');
      siteNavTrigger.onmouseover = function() {
          sideNavModule.style.display = 'block';
          siteNavTrigger.style.backgroundColor = '#fff';
      };
      sideNavModule.onmouseover = function() {
          sideNavModule.style.display = 'block';
          siteNavTrigger.style.backgroundColor = '#fff';

      };
      siteNavTrigger.onmouseout = function() {
          sideNavModule.style.display = 'none';
          siteNavTrigger.style.backgroundColor = 'transparent';
      };
      sideNavModule.onmouseout = function() {
          sideNavModule.style.display = 'none';
          siteNavTrigger.style.backgroundColor = 'transparent';
      };
  }

  // 搜索tab栏切换
  function searchTabsSwitch() {
      var searchTabs = document.getElementById('searchTabsList').children;
      for (var i = 0; i < searchTabs.length; i++) {
          searchTabs[i].onclick = function() {
              for (var j = 0; j < searchTabs.length; j++) {
                  searchTabs[j].className = '';
              }
              this.className = 'search-tab-select';
          };
      }
  }

  // 渲染便捷功能的精灵图
  function rederConveSprite() {
      var conveItemIcons = document.getElementsByClassName('conve-item-icon');
      for (var i = 0; i < conveItemIcons.length; i++) {
          conveItemIcons[i].style.backgroundPosition = '0px ' + -i * 44 + 'px';
      }
  }

  // 点击关闭二维码
  function closeQRcode() {
      var closeQRCodeBox = document.getElementById('closeQRCodeBox');
      var qrcodeBox = document.getElementsByClassName('qrcode-box');
      //给关闭按钮绑定点击事件
      closeQRCodeBox.onclick = function() {
          qrcodeBox[0].style.display = 'none';
      };

  }

  // 侧边栏二级菜单显示
  function asideNavSubMenu() {
      var asideNavList = document.getElementById('asideNavList');
      var asideNavItems = document.getElementById('asideNavList').children;
      var asideFloatPannelList = document.getElementById('asideFloatPannelList');
      var asideFloatPannels = document.getElementById('asideFloatPannelList').children;

      asideNavList.onmouseover = function() {
          asideFloatPannelList.style.display = 'block';
      };

      asideNavList.onmouseout = function() {
          asideFloatPannelList.style.display = 'none';
      };
      //添加自定义序列
      for (var i = 0; i < asideNavItems.length; i++) {
          asideNavItems[i].setAttribute('data-index', i);
          asideFloatPannels[i].setAttribute('data-index', i);
          //绑定鼠标滑过显示二级菜单事件
          asideNavItems[i].onmouseover = function() {
              asideFloatPannels[this.getAttribute('data-index')].style.display = 'block';
              asideNavItems[this.getAttribute('data-index')].style.backgroundColor = '#ffe4dc';
          };
          asideFloatPannels[i].onmouseover = function() {
              asideFloatPannelList.style.display = 'block';
              asideFloatPannels[this.getAttribute('data-index')].style.display = 'block';
              asideNavItems[this.getAttribute('data-index')].style.backgroundColor = '#ffe4dc';
          };
          asideNavItems[i].onmouseout = function() {

              asideFloatPannels[this.getAttribute('data-index')].style.display = 'none';
              asideNavItems[this.getAttribute('data-index')].style.backgroundColor = 'transparent';
          };
          asideFloatPannels[i].onmouseout = function() {
              asideFloatPannelList.style.display = 'none';
              asideFloatPannels[this.getAttribute('data-index')].style.display = 'none';
              asideNavItems[this.getAttribute('data-index')].style.backgroundColor = 'transparent';
          };
      }
  }


  // 便捷功能二级菜单模块
  function conveSubCard() {
      //鼠标滑动显示对应的二级菜单
      var conveFloatItems = document.querySelector('.conve-list').querySelectorAll('.conve-float');
      var conveSubCards = document.querySelector('.conve-sub-card-list').querySelectorAll('.conve-sub-card');
      for (var i = 0; i < conveFloatItems.length; i++) {
          conveFloatItems[i].setAttribute('data-index', i);
          conveSubCards[i].setAttribute('data-index', i);
          conveFloatItems[i].onmouseenter = function() {
              for (var j = 0; j < conveFloatItems.length; j++) {
                  conveSubCards[j].style.display = 'none';
                  conveFloatItems[j].style.border = '1px solid #f4f4f4';
                  conveFloatItems[j].style.borderTopColor = 'transparent';
                  conveFloatItems[j].style.borderLeftColor = 'transparent';
                  conveFloatItems[j].style.zIndex = '1';
              }
              this.style.border = '1px solid #FF4400';
              this.style.borderBottom = 'none';
              this.style.zIndex = '11';
              conveSubCards[this.getAttribute('data-index')].style.display = 'block';
          }
      }

      //关闭二级菜单
      var closeSubCard = document.querySelector('.conve-sub-card-list').querySelectorAll('.close-conve-card');
      for (var k = 0; k < closeSubCard.length; k++) {
          closeSubCard[k].setAttribute('data-index', k);
          closeSubCard[k].onclick = function() {
              conveSubCards[this.getAttribute('data-index')].style.display = 'none';
              conveFloatItems[this.getAttribute('data-index')].style.border = '1px solid #f4f4f4';
              conveFloatItems[this.getAttribute('data-index')].style.borderTopColor = 'transparent';
              conveFloatItems[this.getAttribute('data-index')].style.borderLeftColor = 'transparent';
              conveFloatItems[this.getAttribute('data-index')].style.zIndex = '1';
          }
      }

      // 旅程切换
      var travelType1 = document.getElementById('travelType1');
      var travelType2 = document.getElementById('travelType2');
      var endTravelDate = document.querySelector('.end-travel-date');
      var conveTripGo = document.querySelector('.conve-trip-go');
      travelType1.onclick = function() {
          conveTripGo.style.backgroundPosition = '0 2px';
          endTravelDate.style.display = 'none';
      };
      travelType2.onclick = function() {
          conveTripGo.style.backgroundPosition = '0 -71px';
          endTravelDate.style.display = 'block';
      };
  }


  // 解决IE9以下getElementsByClassName兼容性问题
  function getElementsByClassName(node, className) {
      if (node.getElementsByClassName) {
          // 使用现有方法
          return node.getElementsByClassName(className);
      } else {
          // 循环遍历所有标签，返回带有相应类名的元素
          var results = [],
              elems = node.getElementsByTagName("*");
          for (var i = 0, len = elems.length; i < len; i++) {
              if (elems[i].className.indexOf(className) != -1) {
                  results[results.length] = elems[i];
              }
          }
          return results;
      }
  }


  /* 各功能模块区 END */