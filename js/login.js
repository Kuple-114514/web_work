document.addEventListener("DOMContentLoaded",function(){
    var loginButton = document.getElementById("loginButton");

    if(loginButton) {
        loginButton.addEventListener("click",function(){
            var usernameInput = document.getElementById("username");
            var passwordInput = document.getElementById("password");

            if(usernameInput && passwordInput){
                var username = usernameInput.value;
                var password = passwordInput.value;

                //验证用户名和密码
                if(username === "周远航" && password ==="12305090422") {
                    window.location.href = "index-1.html";
                } else {
                    //验证失败，提示用户
                    alert("用户名或密码输入错误，请重新输入！");
                }
            } else {
                alert("无法找到用户名货密码输入框！");
            }
        })
    } else {
        alert("无法找到登录按钮！");
    }
});