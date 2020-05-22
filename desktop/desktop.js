$(document).ready(function () {
  // Desktop
  $(".icon.win").on("click", function () {
    var target = $(this).attr("data-target");
    $(target).toggleClass("open");
    $(".all-icons, .volume").removeClass("open");
  });

  $(".icon.top.bars").on("click", function () {
    $(".startmenu .col.icons").toggleClass("open");
  });

  $(".desktop, .app, .program, .icon.application, .modal").on(
    "click",
    function () {
      $(".startmenu, .icons, .icon.win, .all-icons, .volume").removeClass(
        "open"
      );
    }
  );

  $(".tray .peek").on("mouseenter", function () {
    $("body").addClass("peek");
  });

  $(".tray .peek").on("mouseleave", function () {
    $("body").removeClass("peek");
  });

  $(".tray .more-icons").on("click", function () {
    $(".all-icons").toggleClass("open");
    $(".speaker").removeClass("open");
  });
  $(".tray .volume").on("click", function () {
    $(".speaker").toggleClass("open");
    $(".all-icons").removeClass("open");
  });

  $(".taskbar .icon.application").on("click", function () {
    var target = $(this).attr("data-target");
    $(target).toggleClass("open minimized");
    $(this).toggleClass("open");
  });

  // App Preview
  $(".icon.edge").on("mouseenter", function () {
    var $browserWindow = $(".id-edge iframe").clone();
    var $previewWindow = $(".app-preview.preview-edge .content");
    $previewWindow.html("");
    $previewWindow.html($browserWindow);
  });

  // Apps
  $(".app").draggable({ handle: ".draggable" });
  $(".app").resizable();
});

// Setup Clock / Date
var d = new Date(),
  day = d.getDate(),
  month = d.getMonth() + 1,
  year = d.getFullYear();

function format_time() {
  // formats a javascript Date object into a 12h AM/PM time string
  var dt = new Date();
  var hour = dt.getHours();
  var minute = dt.getMinutes();
  var seconds = dt.getSeconds();
  var amPM = hour > 11 ? " PM" : " AM";
  if (hour > 12) {
    hour -= 12;
  } else if (hour == 0) {
    hour = "12";
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  $(".clock").text(hour + ":" + minute + amPM);
}

function clock() {
  setInterval(format_time, 1000);
  setInterval(countDown, 1000);
  /*
  //for test
  setTimeout(function openWhoRU() {
    window.open("whoRU.html");
  }, 5000);
  */

  //15mins
  setTimeout(function openWhoRU() {
    window.open("whoRU2.html");
  }, 900000);
}

clock();
$(".date").text(month + "/" + day + "/" + year);

//Draggable
$(function () {
  $(".drag").draggable();
});

//closeAlert
var timer = 0;
function countDown() {
  timer++;
  if (timer < 900) {
    window.onbeforeunload = function (event) {
      event.returnValue = "Write something clever here..";
    };
  } else {
  }
}

//photo Modal
// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  console.log("close");
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
