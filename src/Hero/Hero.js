class HeroSection extends HTMLElement {
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
      <section class="hero-section">
      <div class="container">
          <div class="hero-heading">
              <h1 class="primary-heading">Reawaken Your <br />
                  Body’s Natural Energy<br />
                  with <span class="ph-highlight">Lean&Green</span></h1>
              <h3 class="subheading">A one-of-a-kind patent-pending<br />
                  formula with clinically validated<br />
                  ingredients and proven results!</h3>
          </div>
      </div>
      </section>
        `;
  }
}

customElements.define("hero-section", HeroSection);
