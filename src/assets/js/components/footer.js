console.log('Executing footer.js');

class FooterComponent extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="footer" rel="js-footer">
      <section class="container-xxl footer__container">
        <p class="small">Footer</p>
      </section>
    </footer>
    `;
  }
}

export function registerFooterComponent() {
  customElements.define('custom-footer', FooterComponent);
}