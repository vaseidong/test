function isPdAvailable(str) {
    var re = /^[a-zA-Z0-9]{6,12}$/;
    return re.test(str);
}

function check_email(str) {
    var re = /^([a-zA-Z0-9]+[_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
    return re.test(str);
}

function check() {
    if (reg.username.value == "") {
        alert("用户名不能为空！");
        return false;
    }
    if (!isPdAvailable(reg.password.value)) {
        alert("密码不符合要求！");
        return false;
    }
    if (reg.password.value != reg.confirm_passwd.value) {
        alert("两次密码不一致！");
        return false;
    }
    if (reg.nick_name.value == "") {
        alert("请输入昵称！");
        return false;
    }
    if (!check_email(reg.email.value)) {
        alert("请输入邮箱！");
        return false;
    } else {
        return true;
    }
}