$(document).ready(function(){
    $("#sideBar").load("sidebar.html");

    var isLogin = sessionStorage.getItem("isLoginTtwo");
    if(isLogin) {
        $("#passwordBlock").hide();
    }
});

$(document).on("click", "#submit", function(){
    checkPwd();
});

$(document).on("change", "#password", function(){
    checkPwd();
});

function checkPwd() {
    var baseString = 'dDJ3ZUIxOTJteQ==';
    var enteredPwd = $("#password").val();
    var decodedString = window.btoa(enteredPwd);

    if(decodedString == baseString) {
        sessionStorage.setItem("isLoginTtwo", true);
        $("#passwordBlock").hide();
    }else{
        alert("Invalid Password");
    }
}