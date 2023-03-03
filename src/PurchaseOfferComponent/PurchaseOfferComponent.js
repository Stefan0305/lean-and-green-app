class PurchaseOfferComponent extends HTMLElement {
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
    
    <div class="purchase-offer-component">
        <div class="offer-wrapper">
            <div class="plan-card plan1">
                <h4 class="plan-heading">One Time Purchase</h4>
                <div class="plan-body">
                    <div class="product-frame">
                        <p class="quantity">3 Pouches</p>
                        <div class="product">
                            <img src="./assets/product-3.png" alt="" class="product3-img">
                        </div>
                    </div>
                    <div class="offer-frame">
                        <div class="price">
                            <p class="save-text">Save 37.50%</p>
                            <p class="price-text">$149.95</p>
                        </div>
                        <div class="cta-frame">
                            <div class="btn-and-price">
                                <!-- cta button here -->
                                <div class="cta-button-small">
                                    <p>BUY NOW</p>
                                    <p class="cta-button-subtitle">$5 Ground shipping</p>
                                </div>
                                <div class="regular-price">
                                    Regular Price: <span style="text-decoration: line-through;">$239.85</span>
                                </div>
                            </div>
                            <div class="securities">
                                <img src="./assets/securities.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="plan-card plan2">
                <h4 class="plan-heading">Subscribe & Save</h4>
                <div class="plan-body">
                    <div class="product-frame">
                        <p class="quantity">Buy 4 Get 1 FREE</p>
                        <div class="product">
                            <img src="./assets/product-5.png" alt="" class="product5-img">
                        </div>
                    </div>
                    <div class="offer-frame">
                        <div class="price">
                            <p class="save-text">Save 50%</p>
                            <p class="price-text">$199.95</p>
                        </div>
                        <div class="cta-frame">
                            <div class="btn-and-price">
                                <!-- cta button here -->
                                <div class="cta-button-small">
                                    <p>BUY NOW</p>
                                    <p class="cta-button-subtitle">FREE shipping</p>
                                </div>
                                <div class="regular-price">
                                    Regular Price: <span style="text-decoration: line-through;">$399.75</span>
                                </div>
                            </div>
                            <div class="securities">
                                <img src="./assets/securities.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="money-back-wrapper">
            <img src="./assets/mbg-90days-sticker.svg" alt="" class="money-back-badge">
            <div class="money-back-text">
                <p>90-Day Money Back Guarantee | All transactions secured and encrypted<br />Cancel your subscription at
                    any time</p>
            </div>
        </div>
    </div>
    `;
  }
}

customElements.define("purchase-offer-component", PurchaseOfferComponent);
