$(document).ready(function(){
    $("#sideBar").load("sidebar.html");
    $("#debugSideBar").load("debugSidebar.html");
    $("span[contenteditable='true']").attr("spellcheck", "false");

    var isLogin = sessionStorage.getItem("isLoginTtwo");
    var localLoginFlag = localStorage.getItem("isLoginTtwo");
    if(isLogin) {
        $("#passwordBlock").hide();
    }

    if(localLoginFlag) {
        $("#passwordBlock").hide();
    }
});

$(document).on("click", "#submit", function(){
    checkPwd();
});

$(document).on("change", "#password", function(){
    checkPwd();
});

$(document).on("click", "img", function(){
    var getSrc = $(this).attr("src");
    $("#bigImg").attr("src", getSrc);
    $("#viewImg").modal('show');
});

function checkPwd() {
    var baseString = 'dDJ3ZUIxOTJteQ==';
    var enteredPwd = $("#password").val();
    var decodedString = window.btoa(enteredPwd);

    if(decodedString == baseString) {
        sessionStorage.setItem("isLoginTtwo", true);
        localStorage.setItem("isLoginTtwo", true);
        $("#passwordBlock").hide();
    }else{
        alert("Invalid Password");
    }
}