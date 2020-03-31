
    let myimage = document.getElementById("myimage");
    let originW = myimage.width;
    let nowScale = 2;

    function setImg(place){
        if(myimage.name != place) {
            myimage.src = "place/" + place + "2.png";
            myimage.name = place;
            nowScale = 2;
        }
    }

    if (myimage.addEventListener) {
        // IE9, Chrome, Safari, Opera
        myimage.addEventListener("mousewheel", MouseWheelHandler, false);
        // Firefox
        myimage.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
    }
    // IE 6/7/8
    else myimage.attachEvent("onmousewheel", MouseWheelHandler);

    function MouseWheelHandler(e) {
    // cross-browser wheel delta
        var e = window.event || e; // old IE support
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        // var t = originW*0.05*delta;
        myimage.style.width = Math.max(1500, Math.min(originW,  myimage.width + (100 * delta))) + "px";

        let nowImg = myimage.name;

        if(nowScale == 2 && myimage.width <= 1300){
            myimage.src = "place/" + nowImg +"1.png";
            myimage.style.width = "2880px";
            nowScale = 1;
        }else if(nowScale == 2 && myimage.width >= 2880){
           myimage.src = "place/" + nowImg +  "3.png";
            myimage.style.width = "1300px";
            nowScale = 3;
        }else if(nowScale == 3 && myimage.width <= 1300){
            myimage.src = "place/" + nowImg + "2.png";
            myimage.style.width = "2880px";
            nowScale = 2;
        }else if(nowScale == 1 && myimage.width >= 2880){
           myimage.src = "place/" + nowImg + "2.png";
            myimage.style.width = "1300px";
            nowScale = 2;
        }

        console.log(myimage.name);
        return false;
    }

    let placeBottom = document.getElementById('placeBottom');
    let placeContainer = document.getElementById('placeContainer');
    function often(){
        // console.log('test');
        placeBottom.style.visibility = 'visible';
        placeContainer.style.transition = '0.6s';
        placeContainer.style.right = '0vw';
    }
    function oftenBack(){
        placeBottom.style.visibility = 'hidden';
         placeContainer.style.transition = '0s';
        placeContainer.style.right = '-81vw';
    }


    let allPage = document.querySelector('#allPage');
    let app = document.querySelector('#app');
    let appBtn = document.querySelector('#appBtn');

    appBtn.onclick = function() {
      let appStyle = window.getComputedStyle(app).getPropertyValue('display');
      if (appStyle === 'none') {
        app.style.display = 'inline-block';

      } else {
        app.style.display = 'none';
      }
    }

    $(document).mouseup(function (e) {

        if(app.style.display !== 'none') {

            let container = $("#app");
            let btn = $("#appBtn");

            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0 && !btn.is(e.target)) {
                container.hide();
            }
        }
    });



