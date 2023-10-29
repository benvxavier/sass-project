console.log("Executing head.js");

class HeadComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    var href = this.dataset.href;
    this.innerHTML = `
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${this.dataset.title}</title>

    <!-- Favicons -->
    <link rel="icon" href="${href}assets/images/icons/favicon.svg">
    <link rel="mask-icon" href="${href}assets/images/icons/mask-icon.svg" color="#000000">
    <link rel="apple-touch-icon" href="${href}assets/images/icons/apple-touch-icon.png">
    <link rel="manifest" href="${href}manifest.json">

    <!-- Main CSS File -->
    <link rel="stylesheet" href="${href}assets/css/style.css">
    `;
  }
}

export function registerHeadComponent() {
  return customElements.define('custom-head', HeadComponent);
}
