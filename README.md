# 阶段项目-仿淘宝电商网站开发

## 一、项目说明

本项目旨在打造一个仿淘宝的电商网站，参考网址：www.taobao.com

初步计划共分为六大模块：

- 首页
- 登录页
- 注册页
- 商品列表页
- 商品详情页
- 购物车结算页



本项目github地址：https://github.com/githubxiaoyuan/taobao



### 1.1 首页

**预计样式：**

![](D:\QF-H5\taobao\images\index-img1.png)

**主要实现功能：**

- 头部区域下拉菜单、购物车提示

  ![](D:\QF-H5\taobao\doc\header1.png)

  ![](D:\QF-H5\taobao\doc\header2.png)

- 搜索商品功能

- 左侧商品分类二级面板

  ![](D:\QF-H5\taobao\doc\sub-side.png)

- 中间2个轮播图

- 右侧用户信息模块、便捷功能导航

- 窗口固定右侧的电梯导航

- 从服务端渲染推荐商品

  ![](D:\QF-H5\taobao\doc\content1.png)

  ![content2](D:\QF-H5\taobao\doc\content2.png)



### 1.2 登录页

样式：

![](D:\QF-H5\taobao\doc\login.png)

功能说明：通过数据库验证，实现用户登录功能

方案一：

​	通过手机号短信验证进行登录

方案二：

​	通过传统账号密码形式进行登录



### 1.3 注册页

样式：

![](D:\QF-H5\taobao\doc\reg.png)

功能说明：实现用户注册功能，注册成功后添加到数据库用户表中，并保证唯一性，后续不能再注册相同账号

方案一：

​	通过手机号进行注册，调用真实短信验证平台或模拟验证码

方案二：

​	通过传统的用户名、邮箱、密码等形式进行注册，用户名格式为6-16位，可以为中文、数字、字母组合，具备唯一性；密码格式为8-16位，必须同时包含字母、数字，可以包含特殊符号；邮箱作为修改密码和找回密码的依据，具备唯一性。



### 1.4 商品列表页

样式：

![](D:\QF-H5\taobao\doc\goods-list.png)

功能说明：展现商品分类下的商品，并进行分页显示，可以通过各种条件进行筛选、排序等



### 1.5 商品详情页

样式：

![](D:\QF-H5\taobao\doc\goods-detail.png)

功能说明：显示商品的具体信息、商品图片放大镜功能，购买商品、加入购物车功能（必须先进行登录）



### 1.6 购物车结算页

样式：

![](D:\QF-H5\taobao\doc\shop-cart.png)

功能说明：显示用户添加到购物车中的商品，实现全选商品、删除选中商品、增减商品数量、计算商品金额、计算选中商品总价、购物车结算等功能。







## 二、项目开发进度



### 2021.1.24

- 完成了首页的静态页面和动态交互效果的整体制作

- 使用git初始化项目，并将项目推送到了github仓库中，https://github.com/githubxiaoyuan/taobao

- 完成登录的前端页面制作