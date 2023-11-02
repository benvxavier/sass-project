console.log('Executing header.js');

class HeaderComponent extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header class="header" data-header>
      <section class="container-xxl header__container">
        <div class="u-flex-center justify-content-between">
          <a href="${this.dataset.href}">
            <img class="header__logo-img" src="${this.dataset.href}/assets/images/logo.png" alt="logo image">
          </a>
          <i class="icon icon-01 fa-regular fa-bars fa-lg header__hamb-menu-icon"
          data-icon="hamb-menu-icon"></i>
        </div>

        <nav class="nav">
          <div class="nav__body-overlay" data-nav-body-overlay></div>
          <div class="nav__menu" data-nav-menu>
            <button class="btn btn-light btn-lg close" aria-label="close button" data-close-nav-menu>
              <i class="icon icon-01 fa-regular fa-xmark"></i>
            </button>
            <a href="#">Link-01</a>
          </div>
        </nav>
      </section>
    </header>
    `;
  }
}

export function registerHeaderComponent() {
  customElements.define('custom-header', HeaderComponent);
}