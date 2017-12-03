
$(document).ready(function () {
  $("#theForm").on("submit", function (event) {
    var name = $("#username").val(),
        auth = $('#password').val() === 'admin' && name === 'admin',
        msgBox = $("#welcome"),
        origMsg = msgBox.html(),
        newMsg = 'Welcome. <span>' + name +'.' +'</span>',
        message = name !== '' && auth ? newMsg : origMsg;
  
    msgBox.html(message);
    if (auth) {
        location.href="admin/admin_card.html";
    }else {
        location.href="main.html";
       // alert("userid or password error");
    }
  
    event.preventDefault();
  });
  
});
