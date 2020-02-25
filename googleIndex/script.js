$(document).ready(function() {
  // var gsearch = function() {
  //   var url = 'http://www.google.com/search?q=' + document.getElementById('searchme').value;
  //   window.open(url, 'google');
  // };
  // var glucky = function() {
  //   var url = 'http://www.google.com/search?q=' + document.getElementById('searchme').value + '&btnI';
  //   window.open(url, 'google');
  // };

  // $(".left").click(gsearch);
  // $(".right").click(glucky);

  // $("#searchme").keypress(function(e) {
  //   if (e.which == 13) {
  //     gsearch();
  //   }
  // });

let allPage = document.querySelector('.allPage');
let app = document.querySelector('.app');
let appBtn = document.querySelector('.appBtn');

appBtn.onclick = function() {
  let appStyle = window.getComputedStyle(app).getPropertyValue('display');
  if (appStyle === 'none') {
    app.style.display = 'inline-block';

  } else {
    app.style.display = 'none';
  }
  // console.log(app.style.display);
}

$(document).mouseup(function (e) {

    if(app.style.display !== 'none') {

        let container = $(".app");
        let btn = $(".appBtn");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0 && !btn.is(e.target)) {
            container.hide();
        }
    }
});



});