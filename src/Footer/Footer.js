class Footer extends HTMLElement {
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
    
    <footer class="footer-section">
        <div class="container">
            <div class="footer-wrapper">
                <div class="footer-links">
                    <div class="policy-links">
                        <div class="link-container"><a href="#">TERMS & CONDITIONS</a></div>
                        <div class="link-container"><a href="#">SHIPPING POLICY</a></div>
                        <div class="link-container"><a href="#">PRIVACY POLICY</a></div>
                        <div class="link-container"><a href="#">RETURNS</a></div>
                    </div>
                    <div class="line-div"></div>
                    <div class="support-links">
                        <div class="link-container">
                            <p>For Product Support, please contact the seller <a href="#" class="span-link">HERE</a>.
                            </p>
                        </div>
                        <div class="link-container">
                            <p>For Order Support, please contact the support team <a href="#"
                                    class="span-link">HERE</a>.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="footer-para">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu fermentum augue, sit amet
                        convallis augue. Integer eu iaculis sem, sed euismod eros. Nulla facilisi. Proin luctus odio
                        nunc,
                        sed laoreet est bibendum vitae. Sed a eleifend ex. Integer varius rhoncus euismod. Aliquam ac
                        ultricies turpis, vitae eleifend ligula. Aliquam faucibus erat ut tincidunt cursus. </p>
                </div>
                <div class="footer-para">
                    <p>Cras et ullamcorper velit. In hac habitasse platea dictumst. Nunc vitae dui quis risus elementum
                        auctor.</p>
                </div>
            </div>
        </div>
    </footer>

    `;
  }
}

customElements.define("footer-component", Footer);
