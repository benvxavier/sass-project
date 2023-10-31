console.log('Executing card.js');

class CardComponent extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="card position-relative">
            <img src="./assets/images/card-1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title mb-2">Card title ${this.dataset.id}</h5>
              <p class="card-subtitle small text-muted">${this.dataset.id} de Jun, 2023</p>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the title and make up the bulk of the
                card's content.</p>
                <!-- 'stretched-link', make card component clickable -->
              <a href="#" class="small stretched-link">Go somewhere</a>
            </div>
      </div>
    `;
  }
}

export function registerCardComponent() {
  customElements.define('custom-card', CardComponent);
}