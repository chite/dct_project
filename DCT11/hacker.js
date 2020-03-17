//------------------------------------------date------------------------------------------//
var today = new Date();
document.getElementsByClassName("date").innerHTML = today;
//------------------------------------------password------------------------------------------//
var passwordTxt = "password:";
var passwordCtr = 0;
setInterval(function showPasswordTag() {
  if (passwordCtr < passwordTxt.length) {
    document.getElementById("passwordTag").innerHTML += passwordTxt.charAt(
      passwordCtr
    );
    passwordCtr++;
    setTimeout(showPasswordTag, speed);
  }
}, 0);

var password = "********";
var pwdCtr = 0;
var tmp;
window.addEventListener("keyup", function() {
  //addText
  if (pwdCtr >= 0 && pwdCtr <= 8) {
    if (event.keyCode <= 57 && event.keyCode >= 48) {
      //number 0:48-9:57
      document.getElementById("passwordTag").innerHTML += password.charAt(
        pwdCtr
      );
      pwdCtr++;
    } else if (event.keyCode <= 90 && event.keyCode >= 65) {
      //english a:65-z:90
      document.getElementById("passwordTag").innerHTML += password.charAt(
        pwdCtr
      );
      pwdCtr++;
    }
    if (event.which == 13) {
      showAllDiv();
      document.getElementById("AccessDenied").style.display = "block";
    }
  }
});
