
    let tlImage = document.getElementById("tlImage");
    let tlTitle = document.getElementById("tlTitle");
    function timelineOn(){
        tlImage.src = "icon/Time line b.png";
        tlTitle.style.color = "dodgerblue";
    }
    function timelineOff(){
        tlImage.src = "icon/Time line g.png";
        tlTitle.style.color = "#4d4d4d";
    }

   let myimage = document.getElementById("myimage");

   if (myimage.addEventListener) {
       // IE9, Chrome, Safari, Opera
       myimage.addEventListener("mousewheel", MouseWheelHandler, false);
       // Firefox
       myimage.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
   }
   // IE 6/7/8
   else myimage.attachEvent("onmousewheel", MouseWheelHandler);

   let originW = myimage.width;
   let nowScale = 2;
   // console.log(myimage.width);

   function MouseWheelHandler(e) {
   // cross-browser wheel delta
       var e = window.event || e; // old IE support
       var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
       // var t = originW*0.05*delta;
       myimage.style.width = Math.max(1350, Math.min(originW,  myimage.width + (100 * delta))) + "px";

       if(nowScale == 2 && myimage.width <= 1048){
           myimage.src = "place/商院1.png";
           myimage.style.width = "2880px";
           nowScale = 1;
       }else if(nowScale == 2 && myimage.width >= 2880){
          myimage.src = "place/商院3.png";
           myimage.style.width = "1048px";
           nowScale = 3;
       }else if(nowScale == 3 && myimage.width <= 1048){
           myimage.src = "place/商院2.png";
           myimage.style.width = "2880px";
           nowScale = 2;
       }else if(nowScale == 1 && myimage.width >= 2880){
          myimage.src = "place/商院2.png";
           myimage.style.width = "1048px";
           nowScale = 2;
       }

       console.log(myimage.width);
       return false;
   }


    let allPage = document.getElementById('allPage');
    let itemsLeft = document.getElementById('itemsLeft');
    let items = document.getElementById('items');
    let layer = document.getElementById("layer");

    function listBack() {
        let listStyle = window.getComputedStyle(itemsLeft).getPropertyValue('left').replace('px','');
        if(listStyle > -1) {
                layer.style.visibility = 'hidden';
                itemsLeft.style.left = '-30vw';

        }
    }

    items.onclick = function() {
        let listStyle = window.getComputedStyle(itemsLeft).getPropertyValue('left').replace('px','');

        itemsLeft.style.left = '0';
        layer.style.visibility = 'visible';

        console.log(listStyle);
    }


    // let allPage = document.querySelector('#allPage');
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


