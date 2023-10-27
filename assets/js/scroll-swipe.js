import {
  isInPage,
  getNextElement,
  getNextElementAttr,
  getPreviousElement,
  getPreviousElementAttr
} from "./utils.js";

console.log("Executing scroll-swipe.js");

// Add buttom shadow to the 'header' when scrolldown
function headerBottomShadowOnScroll() {
  const header = document.querySelector("[rel='js-header']");

  if (isInPage(header)) {
    let headerScrollHeight = header.scrollHeight;

    window.addEventListener('scroll', function () {
      var scroll = this.scrollY;
      //console.log("0:scroll.js.scrollShadow()" + scroll);
      //console.log("0:scroll.js.headerScrollHeight:" + headerScrollHeight);
      if (scroll > headerScrollHeight) {
        header.classList.add("box-shadow-bottom");
      } else {
        header.classList.remove("box-shadow-bottom");
      }
    });
  }
}
window.addEventListener('resize', headerBottomShadowOnScroll);
window.addEventListener('DOMContentLoaded', headerBottomShadowOnScroll);

//
// Scroll Logic 
//

function scrollContainer() {
  const scrollLeftBtn = document.querySelectorAll("[rel='js-scroll-left-btn']"),
    scrollRightBtn = document.querySelectorAll("[rel='js-scroll-right-btn']"), scrollContainer = document.querySelectorAll(".scroll-container");

  if (isInPage(scrollLeftBtn, true) && isInPage(scrollRightBtn, true)
    && isInPage(scrollContainer, true)) {
    // Funções aninhadas
    function checkScroll(scrollContainer, direction) {
      const currentScroll = scrollContainer.scrollLeft,
        scrollLength = scrollContainer.scrollWidth - scrollContainer.clientWidth;

      var leftBtn = getPreviousElement(scrollContainer);
      var rightBtn = getNextElement(scrollContainer);

      //console.log('0:checkScroll():scrollContainer:' + scrollContainer);
      //console.log('1:checkScroll():scrollLength:' + scrollLength);
      //console.log('3:checkScroll():currentScroll:' + currentScroll);

      // Right/Left Scroll End
      if (((currentScroll === scrollLength) || (currentScroll === scrollLength - 1)) && (direction === "right")) {
        //console.log("4:checkScroll().if->Right Scroll End");
        leftBtn.removeAttribute("disabled");
        leftBtn.style = "visibility:visible";

        rightBtn.setAttribute("disabled", "true");
        rightBtn.style = "visibility:hidden";

      }
      else if (currentScroll === 0 && direction === "left") {
        // 'direction = left' avoid issues, when left scroll end =0, and scroll right current action = 0.
        // console.log("5:checkScroll().if->Left Scroll End");
        rightBtn.removeAttribute("disabled");
        rightBtn.style = "visibility:visible";

        leftBtn.setAttribute("disabled", "true");
        leftBtn.style = "visibility:hidden";
      }
      else {
        //console.log("6:checkScroll().if->Left/Right Scroll in action");
        leftBtn.removeAttribute("disabled");
        leftBtn.style = "visibility:visible";

        rightBtn.removeAttribute("disabled");
        rightBtn.style = "visibility:visible";
      }
    }

    // Eventos

    scrollLeftBtn.forEach(function (e) {
      e.setAttribute("disabled", "true");
      e.style = "visibility:hidden";
    });

    scrollLeftBtn.forEach((e) => {

      e.addEventListener('click', (e) => {

        let scrollContainerIdAtrrValue = getNextElementAttr(e.currentTarget, "id");

        let scrollContainer = document.getElementById(scrollContainerIdAtrrValue);

        checkScroll(scrollContainer, "left");

        scrollContainer.scrollBy({
          left: -200,
          behavior: "smooth"
        });

      });
    });

    scrollRightBtn.forEach((e) => {

      e.addEventListener('click', (e) => {

        let scrollContainerIdAtrrValue = getPreviousElementAttr(e.currentTarget, "id");

        let scrollContainer = document.getElementById(scrollContainerIdAtrrValue);

        checkScroll(scrollContainer, "right");

        scrollContainer.scrollBy({
          left: 200,
          behavior: "smooth"
        });

      });
    });
  }
}
scrollContainer();

//
// Swipe Logic 
//

// Detect left-right, top-down swipe on touch-devices
function detectSwipe() {
  (function (d) {
    var
      ce = function (e, n) {
        var a = new CustomEvent(n, { bubbles: true, cancelable: true, detail: e.target });
        e.target.dispatchEvent(a);
        a = null;
        return false;
      },
      nm = true,
      sp = {
        x: 0,
        y: 0
      },
      ep = {
        x: 0,
        y: 0
      },
      touch = {
        touchstart: function (e) {
          sp = {
            x: e.touches[0].pageX,
            y: e.touches[0].pageY
          };
        },
        touchmove: function (e) {
          nm = false;
          ep = {
            x: e.touches[0].pageX,
            y: e.touches[0].pageY
          };
        },
        touchend: function (e) {
          if (nm) {
            ce(e, 'fc');
          } else {
            var x = ep.x - sp.x,
              xr = Math.abs(x),
              y = ep.y - sp.y,
              yr = Math.abs(y);
            if (Math.max(xr, yr) > 20) {
              ce(e, (xr > yr ? (x < 0 ? 'swl' : 'swr') : (y < 0 ? 'swu' : 'swd')));
            }
          }
          nm = true;
        },
        touchcancel: function (e) {
          nm = false;
        }
      };
    for (var a in touch) {
      d.addEventListener(a, touch[a], false);
    }
  })(document);
}
detectSwipe();

// SwipeContainer
function SwipeContainer() {
  const scrollLeftBtn = document.querySelectorAll("[rel='js-scroll-left-btn']"),
    swipeContainer = document.querySelectorAll(".scroll-container");

  if (isInPage(scrollLeftBtn, true) && isInPage(swipeContainer, true)) {

    // Funções aninhadas
    function checkSwipe(swipeContainer) {
      const currentSwipe = swipeContainer.scrollLeft,
        swipeLength = swipeContainer.scrollWidth - swipeContainer.clientWidth;

      var leftBtn = getPreviousElement(swipeContainer);
      var rightBtn = getNextElement(swipeContainer);

      //console.log('0:checkScroll():swipeContainer:' + swipeContainer);
      //console.log('1:checkScroll():swipeLength:' + swipeLength);
      //console.log('3:checkScroll():currentSwipe:' + currentSwipe);

      // Left/Right Swipe End
      if ((currentSwipe === swipeLength) || (currentSwipe === swipeLength - 1)) {
        //console.log("4:checkScroll().if->Left Swipe End");

        leftBtn.removeAttribute("disabled");
        leftBtn.style = "visibility:visible";

        rightBtn.setAttribute("disabled", "true");
        rightBtn.style = "visibility:hidden";
      }
      else if (currentSwipe === 0) {
        //console.log("5:checkScroll().if->Right Swipe End");
        rightBtn.removeAttribute("disabled");
        rightBtn.style = "visibility:visible";

        leftBtn.setAttribute("disabled", "true");
        leftBtn.style = "visibility:hidden";

      }
      else {
        //console.log("6:checkScroll().if->Left/Right Swipe in action");
        leftBtn.removeAttribute("disabled");
        leftBtn.style = "visibility:visible";

        rightBtn.removeAttribute("disabled");
        rightBtn.style = "visibility:visible";
      }
    };

    // Eventos

    swipeContainer.forEach(function (e1) {
      // swipe
      var swipe = function (e2) {
        if (e2.type === "swl") {
          //console.log("0:swl:" + e2.type);
          checkSwipe(document.getElementById(e1.id));
        }
        else {
          //console.log("1:swr:" + e2.type);
          checkSwipe(document.getElementById(e1.id));
        }
      };

      window.addEventListener("swr", swipe, false);
      window.addEventListener("swl", swipe, false);

    });
  }
}
SwipeContainer();