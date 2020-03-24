//time
timer();
function timer() {
  var today = new Date();

  document.getElementById("time").innerHTML =
    "Last login:" + today.toString().slice(0, 24);
}
setInterval("timer()", 1000);
//hack
var passwords = ["Voyeur"];
var indexOld;
var index = Math.floor(Math.random() * passwords.length);
var password = passwords[index];
var characters = [];
var counter = 0;

var interval = setInterval(function() {
  for (i = 0; i < counter; i++) {
    characters[i] = password.charAt(i);
  }
  for (i = counter; i < password.length; i++) {
    characters[i] = Math.random()
      .toString(36)
      .charAt(2);
  }
  $(".password").text(characters.join(""));
}, 25);

function hack() {
  counter++;
  if (counter == password.length) {
    $(".granted").removeClass("hidden");
    setInterval(openModal, 2800);
    setInterval(function goDesktop() {
      window.location.href = "desktop.html";
    }, 7000);
  }
}
$(window).on("keydown", hack);
$(".password").on("click", hack);

//keyboard events won't fire if the iframe isn't selected first in Full Page view
$(".start").on("click", function() {
  $(this).addClass("hidden");
  $(".info p:last-child, .password").removeClass("hidden");
});

//rain of text
function FontRain(op) {
  this.oCan = document.getElementById("canvas");
  this.oCan.width = 1200 || window.outerWidth;
  this.oCan.height = 800 || window.outerHeight;
  this.oCtx = this.oCan.getContext("2d");
  this.reset(op);
  this.aFont = ["0", "1", "0", "1"];
  this.list = [];
  //this.fontArr = ["20px", "12px", "5px"];
  this.fontArr = ["14px"];
  this.fontW = 30;
  this.color = ["#f66", "#f96", "#ff6", "#6f6", "#66f", "#69f", "#f69"];

  this.init(op);
}
FontRain.prototype.init = function(op) {
  this.setOption();
  var _this = this;
  clearInterval(this.timer);
  this.timer = setInterval(function() {
    _this.draw.call(_this);
  }, 80);
};
FontRain.prototype.setOption = function() {
  for (var i = 0, l = Math.floor(this.oCan.width / this.fontW); i < l; i++) {
    this.list[i] = {};
    this.list[i].de = Math.round(Math.random() * 1000) - 1000;
    this.list[i].va = 0;
  }
};

FontRain.prototype.draw = function() {
  this.oCtx.fillStyle = "#0f0";
  for (var i = 0, l = this.list.length; i < l; i++) {
    //this.oCtx.fillStyle = this.color[Math.floor(Math.random()*this.color.length)];
    this.oCtx.font =
      "" +
      this.fontArr[Math.round(Math.random() * this.fontArr.length - 1)] +
      " 宋体";
    if (this.list[i].va > this.oCan.height + 150) {
      this.list[i].va = this.list[i].de;
    }
    this.oCtx.fillText(
      this.randomFont(this.aFont),
      10 + i * this.fontW,
      this.list[i].va
    );
    this.list[i].va += 25;
  }
  this.oCtx.fillStyle = "rgba(0,0,0,.1)";
  this.oCtx.fillRect(0, 0, this.oCan.width, this.oCan.height);
};
FontRain.prototype.reset = function(op, isClear) {
  if (isClear) {
    this.oCtx.clearRect(0, 0, this.oCan.width, this.oCan.height);
  }
  this.oCtx.textBaseline = "top";
  this.oCtx.textAlign = "center";
  this.oCtx.strokeStyle = this.oCtx.fillStyle = "#000";
  this.oCtx.lineWidth = 1.0;
  this.oCtx.globalCompositeOperation = "source-over";
  this.oCtx.globalAlpha = "1";
  this.oCtx.lineJoin = this.oCtx.lineCap = "round";
};
FontRain.prototype.randomFont = function(arr) {
  return arr[Math.round(Math.random() * (arr.length - 1))];
};

new FontRain();

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}
