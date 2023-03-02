class CTAComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
    <link rel="stylesheet" href="../../style.css">

    <div class="cta-component">
        <div class="cta-button-wrapper">
            <button class="cta-button">BUY NOW</button>
        </div>
        <div class="money-back-wrapper">
            <img src="./assets/mbg-90days-sticker.svg" alt="" class="money-back-badge">
            <div class="money-back-text">
                <p>90-Day Money Back Guarantee | All transactions secured and encrypted</p>
            </div>
        </div>
    </div>`;
  }
}

customElements.define("cta-component", CTAComponent);
