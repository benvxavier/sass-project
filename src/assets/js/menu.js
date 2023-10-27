import { isInPage } from "./utils.js";

console.log("Executing menu.js");

// Isso garante que este código seja executado após o componente 
// 'header' ser registrado
document.addEventListener('headerRegistered', function () {
  let navMenu = document.querySelector('.js-nav-menu'),
    hambMenuIcon = document.querySelector('.js-hamb-menu-icon'),
    navBodyOverlay = document.querySelector("[rel='js-nav-body-overlay']"),
    closeNavMenu = document.querySelector("[rel='js-close-nav-menu']");

  if (isInPage(navMenu) && isInPage(hambMenuIcon) && isInPage(navBodyOverlay) && isInPage(closeNavMenu)) {
    const startQueries = () => {
      // Cria uma condição para dispositivos com tela menor que 1200px
      let newQuery = window.matchMedia('(max-width: 1200px )');

      const queryListenChanges = query => {
        if (query.matches) { // Phone until tablet landscape
          //document.body.style.backgroundColor = "pink";
          hambMenuIcon.style.display = "block";
          closeNavMenu.style.display = "block";

        } else { // Desktop up
          //document.body.style.backgroundColor = "blue";
          hambMenuIcon.style.display = "none";
          closeNavMenu.style.display = "none";
        }
      };
      newQuery.addEventListener("change", queryListenChanges);
      queryListenChanges(newQuery);
    };

    startQueries();

    // Eventons

    hambMenuIcon.addEventListener("click", () => {
      if (!navMenu.classList.contains("active")) {
        navMenu.classList.add("active");
        navBodyOverlay.style.display = "block";
      }
    });

    closeNavMenu.onclick = function (e) {
      // console.log("0:menu:js.closeNavMenu()");
      navMenu.classList.remove("active");
      navBodyOverlay.style.display = "none";
    };

    // Closing nav menu by clicking outside
    document.onclick = function (e) {
      if (!navMenu.contains(e.target) && !e.target.classList.contains("js-hamb-menu-icon")) {
        navBodyOverlay.style.display = "none";
        navMenu.classList.remove("active");
      }
    };
  }
});


