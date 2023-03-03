class Features extends HTMLElement {
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
        
        <div class="features-section">
        <div class="features-section-wrapper">
            <div class="features-heading">
                <h2 class="features-primary-heading">Why Green&Lean?</h2>
                <h4 class="features-subheading">A powerful combination of synergistic ingredients formulated to fuel
                    your most vibrant energy.
                </h4>
            </div>
            <div class="features">
                <div class="features-left">
                    <div class="feature">
                        <p>Clinically Proven</p>
                        <img src="./assets/task_alt.svg" alt="" class="tick">
                    </div>
                    <div class="feature">
                        <p>Comprehensive Formulation</p>
                        <img src="./assets/task_alt.svg" alt="" class="tick">
                    </div>
                    <div class="feature">
                        <p>Third Party Tested</p>
                        <img src="./assets/task_alt.svg" alt="" class="tick">
                    </div>
                    <div class="feature">
                        <p>Extensively Researched Ingredients</p>
                        <img src="./assets/task_alt.svg" alt="" class="tick">
                    </div>
                    <div class="feature">
                        <p>Not Bioengineered</p>
                        <img src="./assets/task_alt.svg" alt="" class="tick">
                    </div>
                </div>

                <img class="features-img big-screen" src="./assets/product-1.svg">

                <div class="features-right">
                    <div class="feature">
                        <img src="./assets/task_alt.svg" alt="" class="tick">
                        <p class="feature">Physician Formulated</p>
                    </div>
                    <div class="feature">
                        <img src="./assets/task_alt.svg" alt="" class="tick">
                        <p class="feature">Safe & Effective</p>
                    </div>
                    <div class="feature">
                        <img src="./assets/task_alt.svg" alt="" class="tick">
                        <p class="feature">Allergen-Free</p>
                    </div>
                    <div class="feature">
                        <img src="./assets/task_alt.svg" alt="" class="tick">
                        <p class="feature">Professional Grade</p>
                    </div>
                    <div class="feature">
                        <img src="./assets/task_alt.svg" alt="" class="tick">
                        <p class="feature">Conveniently combines over $300 in ingredients.</p>
                    </div>
                    <div class="feature">
                        <img src="./assets/task_alt.svg" alt="" class="tick">
                        <p class="feature">Extremely convenient</p>
                    </div>
                </div>
            </div>
            <img class="features-img small-screen" src="./assets/product-1.svg"></img>
        </div>
        `;
  }
}

customElements.define("features-section", Features);
