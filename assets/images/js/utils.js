console.log("Executing utils.js");

// Fix Flash of Unstyled Content(FOUC) problem 
window.onload = function () {
  document.body.style.visibility = `visible`;
  // need add 'style="visibility:hidden"' to 'body'
};

// Fills browser full-width 
function breakoutSetWidth() {
  var body = document.querySelector('body');
  var bodywidth = body.clientWidth;
  var breakoutElements = document.querySelectorAll('.u-full-width');

  breakoutElements.forEach(function (element) {
    element.setAttribute('style', 'width:' + bodywidth + 'px; ');
  });
}
breakoutSetWidth();
window.addEventListener('load', breakoutSetWidth);
window.addEventListener('resize', breakoutSetWidth);

//
// Functions to export
//

// Check if element is present on DOM 
export function isInPage(node, nodeList = false) {
  if (nodeList === false) {
    return (node !== null) ? true : false;
  } else {
    return (node.length > 0) ? true : false;
  }
}

// HTML DOM, get next/previous element

export function getNextElement(e) {
  return e.nextElementSibling;
}

export function getPreviousElement(e) {
  return e.previousElementSibling;
}

export function getNextElementAttr(e, attr) {
  var el;
  switch (attr) {
    case "id":
      el = getNextElement(e).id;
      break;
    case "rel":
      el = getNextElement(e).getAttribute('rel');
      break;
  }
  return el;
}

export function getPreviousElementAttr(e, attr) {
  var el;
  switch (attr) {
    case "id":
      el = getPreviousElement(e).id;
      break;
    case "rel":
      el = getPreviousElement(e).getAttribute('rel');
      break;
    default:
  }
  return el;
}

// Page Refresh 
export function isPageRefresh() {
  const entries = window.performance.getEntriesByType('navigation');
  const refreshed = entries.length > 0 ? entries[entries.length - 1].type === 'reload' : false;
  console.log(refreshed ? 'Page was reloaded.' : 'Page was initially loaded or navigated.');
  return refreshed;
}
