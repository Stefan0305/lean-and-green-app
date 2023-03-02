class Results extends HTMLElement {
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
    <section class="results-section">
    <div class="container">
        <div class="results-section-wrapper">
            <div class="results-cards">
                <div class="cards-row">
                    <div class="card card-1">
                        <div class="card-img"><img src="./images/card-img-energy.png" alt="card-image"></div>
                        <div class="card-body">
                            <div class="card-main">
                                <h4 class="card-title">ALL-DAY ENERGY</h4>
                                <p class="card-para">Feel a calm yet dominant energy surge throughout your body.
                                    <span style="font-weight: 700;">Green&Lean</span> is not
                                    just a quick rise and fall. The ingredients inside this blend assist you in
                                    experiencing energy throughout your entire day.
                                </p>
                            </div>
                            <div class="card-highlight">
                                <p class="highlight-para">Feel younger and more invincible.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card card-2">
                        <div class="card-img"><img src="images/card-img-focus.png" alt="card-img"></div>
                        <div class="card-body">
                            <div class="card-main">
                                <h4 class="card-title">SHARPER FOCUS</h4>
                                <p class="card-para"><span style="font-weight: 700;">Green&Lean</span> can boost
                                    attention, concentration, and mental
                                    clarity. It has an
                                    incredible power to give your brain a fresh, alert, and razor-sharp sense of
                                    focus all day long.</p>
                            </div>
                            <div class="card-highlight">
                                <p class="highlight-para">Tackle the to-do's you've been putting off or
                                    haven't wanted to
                                    do with new
                                    determination.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cards-row">
                    <div class="card card-3">
                        <div class="card-img"><img src="./images/card-img-calmness.png" alt="card-img"></div>
                        <div class="card-body">
                            <div class="card-main">
                                <h4 class="card-title">MAINTAIN CALMNESS</h4>
                                <p class="card-para"><span style="font-weight: 700;">Green&Lean</span> contains
                                    compounds that help amplify alpha brain
                                    waves. Feel locked-in
                                    on the task in front of you with inner stillness.
                                    <br /><br />
                                    Alpha brain waves keep your mind energized yet calm, focused and creative, while
                                    heightening memory retention. You get a sustainable, long-lasting surge in
                                    natural energy that keeps you engaged, centered, and in the zone.
                                </p>
                            </div>
                            <div class="card-highlight">
                                <p class="highlight-para">You're only a sip away from getting into the
                                    zone you've been
                                    waiting for.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card card-4">
                        <div class="card-img"><img src="./images/card-img-memory.png" alt="card-img"></div>
                        <div class="card-body">
                            <div class="card-main">
                                <h4 class="card-title">IMPROVED MEMORY</h4>
                                <p class="card-para">The ingredients inside <span
                                        style="font-weight: 700;">Green&Lean</span> increase Brain Derived
                                    Neurotrophic Factors
                                    (BDNF). This nourishes your brain’s neurons, maximizes memory, and accelerates
                                    thinking.
                                    <br /><br />
                                    It can encourage the production of neurons in the brain, and protects from
                                    embarrassing “mental hiccups” and forgettfullness.
                                </p>
                            </div>
                            <div class="card-highlight">
                                <p class="highlight-para">Feel whip-smart on a more consistent basis.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="results-cards-row"></div>
            </div>

            <div class="testimonials">
                <div class="testimonial-card">
                    <div class="tst-card-body">
                        <div class="tst-card-comment">
                            <p>"I am really satisfied with it. I'm good to go. It really saves me time and effort.
                                It's is exactly what my body has been lacking."</p>
                        </div>
                        <div class="tst-card-rating">
                            <p>S.J.</p>
                            <div class="rating-stars">
                                <img src="./assets/star.svg" alt="" class="rating-star">
                                <img src="./assets/star.svg" alt="" class="rating-star">
                                <img src="./assets/star.svg" alt="" class="rating-star">
                                <img src="./assets/star.svg" alt="" class="rating-star">
                                <img src="./assets/star.svg" alt="" class="rating-star">
                            </div>
                        </div>
                    </div>
                    <div class="quote-vector-container">
                        <img src="./assets/quote-vector.svg" alt="" class="quote-vector-bg">
                    </div>
                </div>
                <div class="testimonial-card">
                    <div class="tst-card-body">
                        <div class="tst-card-comment">
                            <p>"We're loving it. This is simply unbelievable! I like it more and more each day
                                because it makes my life a lot easier."</p>
                        </div>
                        <div class="tst-card-rating">
                            <p>E.J.</p>
                            <div class="rating-stars">
                                <img src="./assets/star.svg" alt="" class="rating-star">
                                <img src="./assets/star.svg" alt="" class="rating-star">
                                <img src="./assets/star.svg" alt="" class="rating-star">
                                <img src="./assets/star.svg" alt="" class="rating-star">
                                <img src="./assets/star.svg" alt="" class="rating-star">
                            </div>
                        </div>
                    </div>
                    <div class="quote-vector-container">
                        <img src="./assets/quote-vector.svg" alt="" class="quote-vector-bg">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`;
  }
}

customElements.define("results-section", Results);
