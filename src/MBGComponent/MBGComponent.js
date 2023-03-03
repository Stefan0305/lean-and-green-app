class MBGComponent extends HTMLElement {
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
      
      <div class="mbg-component">
      <div class="container">
          <div class="mbg-component-wrapper">
              <img src="./assets/symbol-beige.svg" alt="" class="mbg-bg-symbol">

              <div class="mbg-heading">
                  <h2>RISK FREE 90 DAY MONEY BACK GUARANTEE </h2>
              </div>
              <div class="mbg-body-upper">
                  <div class="mbg-img">
                      <img src="./assets/mbg-product.svg" alt="">
                  </div>
                  <div class="mbg-body-text">
                      <p>Go ahead and take <span style="font-weight: 700;">Green&Lean</span> for a well-deserved
                          “test
                          drive” over the next 10, 20, even 30 days – as
                          long as you’d like over the next six months.
                          <br /><br />
                          If you don’t feel a dramatic improvement in your energy, focus, and mood... if you don’t
                          tackle your day with a newfound sense of confidence, concentration, and an unshakable
                          optimism... and if you feel even a single jitter from our energizing formula...
                          <br /><br />
                          You don’t pay a dime.
                          <br /><br />
                          Simply shoot us a quick email at <span
                              style="font-weight: 800; word-break: break-all;">customerservice@greenandlean.com</span>
                          and I’ll personally
                          see you get a full refund, down to the last penny.
                          <br /><br />
                          No questions. No hoops. No weird qualifications or fine print.
                      </p>
                  </div>

              </div>
              <div class="mbg-body-lower">
                  <p>You risk nothing other than living a life where you’re just surviving...
                      <br /><br />
                      When you should be thriving.
                      <br /><br />
                      So click the button below now to give yourself a well-deserved shot at booming, natural
                      energy
                      levels with Green&Lean.
                  </p>
              </div>
          </div>
      </div>
  </div>
      `;
  }
}

customElements.define("mbg-component", MBGComponent);
