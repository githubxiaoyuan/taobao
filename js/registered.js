// 执行区
window.onload = function() {
    //注册功能
    registered();
};


//注册验证
function registered() {
    var regForm = document.querySelector('.reg-form');
    var regUsername = regForm.querySelector('.reg-username');
    var regEmail = regForm.querySelector('.user-email');
    var regPassword = regForm.querySelector('.reg-password');
    var regRepeatPassword = regForm.querySelector('.reg-rep-password');
    var regSubmitBtn = document.getElementById('regSubmitBtn');

    //用户名正则,长度6-16位，可以为数字、字母、汉字和下划线组合
    var userReg = /^[\u4E00-\u9FA5A-Za-z0-9_]{6,16}$/;
    //密码正则,长度8-16位，必须同时包含字母和数字，可以有特殊符号
    var pwdReg = /(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,20}$/;
    //邮箱正则
    var emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;


    var userFlag = false;
    var emailFlag = false;
    var pwdFlag = false;
    var repPwdFlag = false;
    regSubmitBtn.onclick = function(e) {
        var e = e || window.event;
        e.preventDefault ? e.preventDefault() : returnValue = false;

        //验证用户名
        if (userReg.test(regUsername.value)) {
            regUsername.nextElementSibling.innerText = '恭喜你，该用户名可以被使用 √';
            regUsername.nextElementSibling.className = 'tip current';
            userFlag = true;
        } else {
            regUsername.nextElementSibling.innerText = '用户名只能是数字、字母、汉字和下划线组合，长度6-16位！';
            regUsername.nextElementSibling.className = 'tip error';
            userFlag = false;
            return regUsername.focus();
        }


        //验证邮箱
        if (userFlag) {
            if (emailReg.test(regEmail.value)) {
                regEmail.nextElementSibling.innerText = '恭喜你，该邮箱可以被使用 √';
                regEmail.nextElementSibling.className = 'tip current';
                emailFlag = true;
            } else {
                regEmail.nextElementSibling.innerText = '请输入正确的邮箱！';
                regEmail.nextElementSibling.className = 'tip error';
                emailFlag = false;
                return regEmail.focus();
            }
        }


        //验证密码
        if (userFlag && emailFlag) {
            if (pwdReg.test(regPassword.value)) {
                regPassword.nextElementSibling.innerText = '密码格式正确 √';
                regPassword.nextElementSibling.className = 'tip current';
                pwdFlag = true;
            } else {
                regPassword.nextElementSibling.innerText = '密码必须同时包含字母和数字，可以有特殊字符，长度8-16位！';
                regPassword.nextElementSibling.className = 'tip error';
                pwdFlag = false;
                return regPassword.focus();
            }
        }

        //确认密码
        if (userFlag && emailFlag && pwdFlag) {
            if (regPassword.value === regRepeatPassword.value) {
                regRepeatPassword.nextElementSibling.innerText = '两次输入密码一致 √';
                regRepeatPassword.nextElementSibling.className = 'tip current';
                repPwdFlag = true;
            } else {
                regRepeatPassword.nextElementSibling.innerText = '两次输入密码不一致 √';
                regRepeatPassword.nextElementSibling.className = 'tip error';
                repPwdFlag = false;
                return regRepeatPassword.focus();
            }
        }

        if (userFlag && emailFlag && pwdFlag && repPwdFlag) {
            alert('注册成功！');
        }


    };

    //验证用户名
    regUsername.onchange = function() {
        if (userReg.test(regUsername.value)) {
            regUsername.nextElementSibling.innerText = '恭喜你，该用户名可以被使用 √';
            regUsername.nextElementSibling.className = 'tip current';
            userFlag = true;
        } else {
            regUsername.nextElementSibling.innerText = '用户名只能是数字、字母、汉字和下划线组合，长度6-16位！';
            regUsername.nextElementSibling.className = 'tip error';
            userFlag = false;
        }


    };

    //验证邮箱
    regEmail.onchange = function() {
        if (emailReg.test(regEmail.value)) {
            regEmail.nextElementSibling.innerText = '恭喜你，该邮箱可以被使用 √';
            regEmail.nextElementSibling.className = 'tip current';
            emailFlag = true;
        } else {
            regEmail.nextElementSibling.innerText = '请输入正确的邮箱！';
            regEmail.nextElementSibling.className = 'tip error';
            emailFlag = false;
        }
    };

    //验证密码
    regPassword.onchange = function() {
        if (pwdReg.test(regPassword.value)) {
            regPassword.nextElementSibling.innerText = '密码格式正确 √';
            regPassword.nextElementSibling.className = 'tip current';
            pwdFlag = true;
        } else {
            regPassword.nextElementSibling.innerText = '密码必须同时包含字母和数字，可以有特殊字符，长度8-16位！';
            regPassword.nextElementSibling.className = 'tip error';
            pwdFlag = false;
        }
    };

    //确认密码
    regRepeatPassword.onchange = function() {
        if (regPassword.value === regRepeatPassword.value) {
            regRepeatPassword.nextElementSibling.innerText = '两次输入密码一致 √';
            regRepeatPassword.nextElementSibling.className = 'tip current';
            repPwdFlag = true;
        } else {
            regRepeatPassword.nextElementSibling.innerText = '两次输入密码不一致 √';
            regRepeatPassword.nextElementSibling.className = 'tip error';
            repPwdFlag = false;
        }
    };

    //事件委托
    regForm.oninput = function() {
        if (regUsername.value.trim() && regEmail.value.trim() && regPassword.value.trim() && regRepeatPassword.value.trim()) {
            regSubmitBtn.disabled = false;
            regSubmitBtn.style.opacity = '1';
        } else {
            regSubmitBtn.disabled = true;
            regSubmitBtn.style.opacity = '.5';
        }
    };

}