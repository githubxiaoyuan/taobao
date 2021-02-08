//渲染用户信息
// renderUserInfo();
// 触发网站导航
displaySideNav();



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

//渲染用户信息
$(function() {
    var welcome = document.querySelector('.welcome-user');
    //判断是否存在token
    if (localStorage.getItem('token')) {
        $.ajax({
            url: '/user/userInfo',
            method: 'GET',
            success: function(res) {
                welcome.innerHTML = '欢迎你，<span style="color:#f40;">' + res.data.username + '</span>';
                return;
            }
        });
    } else {
        welcome.innerHTML = '<a href="./login.html" class="login-link">亲，请登录</a><a href="./registered.html" class="reg-link">免费注册</a>';
        return;
    }
});