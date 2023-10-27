console.log('Executing header.js');

class HeaderComponent extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    // Dispatch the custom event
    this.dispatchHeaderRegisteredEvent();
  }

  dispatchHeaderRegisteredEvent() {
    const event = new Event('headerRegistered');
    document.dispatchEvent(event);
  }

  render() {
    this.innerHTML = `
    <header class="header" rel="js-header">
      <section class="container-xxl header__container">
        <div class="u-flex-center justify-content-between">
          <a href="/">
            <img class="header__logo-img" src="/assets/images/logo.png" alt="logo image">
          </a>
          <i class="icon icon-01 fa-regular fa-bars fa-lg header__hamb-menu-icon js-hamb-menu-icon"></i>
        </div>

        <nav class="nav">
          <div class="nav__body-overlay" rel="js-nav-body-overlay"></div>
          <div class="nav__menu js-nav-menu">
            <i class="icon icon-01 fa-light fa-xmark fa-xl close-icon" rel="js-close-nav-menu"></i>
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