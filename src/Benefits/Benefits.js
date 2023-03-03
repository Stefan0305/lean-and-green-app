class Benefits extends HTMLElement {
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
    
    <section class="benefits-section">
    <div class="container">
        <div class="benefits-section-wrapper">
            <div class="benefits-heading">
                <h2>SAFE AND EFFECTIVE</h2>
            </div>

            <div class="cards-row">
                <div class="bnf-card">
                    <div class="card-icon"><img src="./assets/proven-benefits-icon.svg"></div>
                    <div class="card-body bnf-card-body">
                        <h6 class="card-title">Proven Benefits</h6>
                        <p class="card-text">We’ve done the research, so you don’t have to. Each of the active
                            ingredients in Green&Lean has clinically proven health benefits to support thriving
                            and lasting energy.</p>
                    </div>
                </div>
                <div class="bnf-card">
                    <div class="card-icon"><img src="./assets/proven-benefits-icon.svg"></div>
                    <div class="card-body bnf-card-body">
                        <h6 class="card-title">Professional Quality</h6>
                        <p class="card-text">Investing in your health should be worry free - which is why Green&Lean is lab tested, and GMP Quality Assured. So you know exactly what you’re getting in each packet - a safe and effective way to feel your best. </p>
                    </div>
                </div>
            </div>
            <div class="cards-row">
                <div class="bnf-card">
                    <div class="card-icon"><img src="./assets/clean-ingredients-icon.svg"></div>
                    <div class="card-body bnf-card-body">
                            <h6 class="card-title">Clean Ingredients</h6>
                            <p class="card-text">Green&Lean contains ingredients of the highest quality and
                                purity. Manufactured to be free of gluten, dairy, soy, tree nuts, and peanuts.
                                Not Genetically Engineered.</p>
                    </div>
                </div>
                <div class="bnf-card">
                    <div class="card-icon"><img src="./assets/effective-formula-icon.svg"></div>
                        <div class="card-body bnf-card-body">
                            <h6 class="card-title">Effective Formula</h6>
                            <p class="card-text">This comprehensive formula was carefully curated by a team of
                                clinical experts to naturally increase levels of peak energy and performance.
                            </p>
                    </div>
                </div>
            </div>
            <cta-component></cta-component>

        </div>
    </div>
</section>
    `;
  }
}

customElements.define("benefits-section", Benefits);
