class IngredientList extends HTMLElement {
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
    
    <section class="ingredients-section">
        <div class="container">
            <div class="ingredients-wrapper">
                <div class="ingredients-heading">
                    <h2>12 Potent Super-Nutrient Ingredients</h2>
                    <h4>Selected to synergistically compound benefits and give you elite energy, focus, cognitive retention, and stress relief.</h4>
                </div>
                <div class="ingredients-list">
                    <div class="ingredient-card">
                        <div class="ingr-card-wrapper">
                            <div class="ingr-desc">
                                <h2 class="ingr-title">KSM-66® Ashwagandha</h2>
                                <img src="./images/ksm-66.png" alt="ksm-66" class="ingr-img-small">
                                <p class="ingr-para">A trademarked, pure version of the herb Ashwagandha. Backed by 22 “gold standard” human clinical trials, and a proprietary extraction process with over 14 years of research [16].</p>
                                <p class="ingr-para"> A February 2020 study from The Journal of Nutrients showed it can help supercharge your mitochondria’s ability to [17]:
                                </p>
                                <ul class="ingr-bullets">
                                    <li>Produce clean, new energy.</li>
                                    <li>Help to reduce stress and anxiety.</li>
                                    <li>Helps to improve learning, concentration and memory.</li>
                                </ul>
                            </div>
                            <img src="./images/ksm-66.png" alt="ksm-66" class="ingr-img-large">
                        </div>
                    </div>

                    <div class="ingredient-card">
                        <div class="ingr-card-wrapper">
                            <div class="ingr-desc">
                                <h2 class="ingr-title">Neurofactor®</h2>
                                <img src="./images/neurofactor.png" alt="ksm-66" class="ingr-img-small">
                                <p class="ingr-para">An all-natural, patented extract of the whole coffee arabica fruit. Inside the skin of this fruit is a rare nutrient that boosts levels of brain derived neurotrophic factor (BDNF). [5] BDNF nourishes your brain’s existing neurons, which leads to:</p>
                                <ul class="ingr-bullets">
                                    <li>Maximizes memory <span class="bullet-fw400"> - and gives you lightning-quick thinking.</span></li>
                                    <li>Encourages growth of neurons in the brain <span class="bullet-fw400">- at any age.</span> </li>
                                    <li>Increase BDNF <span class="bullet-fw400">levels by 143% naturally</span>
                                    </li>
                                </ul>
                            </div>
                            <img src="./images/neurofactor.png" alt="ksm-66" class="ingr-img-large">
                        </div>
                    </div>
                    <div class="ingredient-card">
                        <div class="ingr-card-wrapper">
                            <div class="ingr-desc">
                                <h2 class="ingr-title">Synapsa®</h2>
                                <img src="./images/synapsa.png" alt="ksm-66" class="ingr-img-small">
                                <p class="ingr-para">Synapsa® is a patented, standardized extract of a plant called Bacopa Monnieri. For thousands of years, Eastern healers called it The Herb of Grace for its astounding ability to “sharpen the intellect” at any age. </p>
                                <p class="ingr-para">Bacopa Monnieri acts as a shield to protect mitochondria from stress [6]. </p>
                                <ul class="ingr-bullets">
                                    <li>Energy levels remaining at their peak <span class="bullet-fw400">- and stress levels remain low.</span></li>
                                    <li>Improved memory and information retention.</li>
                                </ul>
                            </div>
                            <img src="./images/synapsa.png" alt="ksm-66" class="ingr-img-large">
                        </div>
                    </div>

                    <div class="ingredient-card">
                        <div class="ingr-card-wrapper">
                            <div class="ingr-desc">
                                <h2 class="ingr-title">CoffeeBerry®</h2>
                                <img src="./images/coffee-berry.png" alt="ksm-66" class="ingr-img-small">
                                <p class="ingr-para">CoffeeBerry® has less caffeine than a standard cup of coffee, yet provides the energy of several without the drawbacks. Its outer shell is packed with a unique blend of polyphenols. </p>
                                <p class="ingr-para">Polyphenols scavenge your mitochondria for harmful agents that drain its ability to turn the oxygen you breathe, into natural energy you can use [7]. Polyphenols help ensure caffeine doesn’t take you for a rollercoaster of a ride. With coffee fruit you get…</p>
                                <ul class="ingr-bullets">
                                    <li>A long-lasting clean energy <span class="bullet-fw400"> - without the crash.</span></li>
                                    <li>A gentle rise <span class="bullet-fw400">- that leaves you focused yet Zen-like.</span></li>
                                </ul>
                            </div>
                            <img src="./images/coffee-berry.png" alt="ksm-66" class="ingr-img-large">
                        </div>
                    </div>

                    <div class="ingredient-card">
                        <div class="ingr-card-wrapper">
                            <div class="ingr-desc">
                                <h2 class="ingr-title">ZumXR®</h2>
                                <img src="./images/zum-xr.png" alt="ksm-66" class="ingr-img-small">
                                <p class="ingr-para">ZumXR® is a patented, extended-release caffeine technology [8]. </p>
                                <p class="ingr-para">It’s dripped out and slowly released so you don’t get a shock to the system, but instead:</p>
                                <ul class="ingr-bullets">
                                    <li>A gradual increase in energy <span class="bullet-fw400">- that actually lasts for more than 6 hours! </span></li>
                                    <li>No-Spike, No Crash, and No Jitters.</li>
                                </ul>
                            </div>
                            <img src="./images/zum-xr.png" alt="ksm-66" class="ingr-img-large">
                        </div>
                    </div>

                    <div class="ingredient-card">
                        <div class="ingr-card-wrapper">
                            <div class="ingr-desc">
                                <h2 class="ingr-title">Suntheanine®</h2>
                                <img src="./images/suntheanine.png" alt="ksm-66" class="ingr-img-small">
                                <p class="ingr-para">L-theanine is a naturally-occurring amino acid found in the leaves of green tea grown in New Zealand. SuntheanineTM is its most powerful form. </p>
                                <p class="ingr-para">Suntheanine® is proven to be safe, effective, and is kept under the strictest of quality control [9]. The compounds inside Suntheanine® help:</p>
                                <ul class="ingr-bullets">
                                    <li>Amplify alpha brain waves <span class="bullet-fw400">- and keep your mind energized yet calm, rather than have it jump around from thought to thought.</span></li>
                                    <li>Get a sustainable, long-lasting surge in natural energy that keeps you engaged, centered, and feeling sharp <span class="bullet-fw400"> - without the negative effects of regular coffee.</span></li>
                                </ul>
                            </div>
                            <img src="./images/suntheanine.png" alt="ksm-66" class="ingr-img-large">
                        </div>
                    </div>

                    <div class="ingredient-card">
                        <div class="ingr-card-wrapper">
                            <div class="ingr-desc">
                                <h2 class="ingr-title">Schisandra extract</h2>
                                <img src="./images/schisandra.png" alt="ksm-66" class="ingr-img-small">
                                <p class="ingr-para">Schisandra is known for calming large spikes in emotion. That stomach drop and tsunami of stress that overtakes your system when something goes wrong? Yeah, it prevents that. </p>
                                <p class="ingr-para">In fact, a recent double-blind, placebo-controlled study showed even in the face of laboratory-grade stress, schisandra extract [10]: <span class="para-fw800">Boosted participant’s attention, concentration, and mental energy.</span></p>
                            </div>
                            <img src="./images/schisandra.png" alt="ksm-66" class="ingr-img-large">
                        </div>
                    </div>

                    <div class="ingredient-card">
                        <div class="ingr-card-wrapper">
                            <div class="ingr-desc">
                                <h2 class="ingr-title">Cordyceps</h2>
                                <img src="./images/cordyceps.png" alt="ksm-66" class="ingr-img-small">
                                <p class="ingr-para">Cordyceps have been used in traditional Chinese medicine for
                                    thousands of years to treat fatigue. All this time, we had zero idea of how they worked – just that they did. </p>
                                <p class="ingr-para">Today, a recent study from The Journal of Physical Fitness and Sports Medicine uncovered it can [11]:</p>
                                <ul class="ingr-bullets">
                                    <li>Directly enhance your energy levels unlike anything before it! </li>
                                    <li>Increase oxygen flow throughout the body.</li>
                                    <li>Reduce fatigue.</li>
                                </ul>
                            </div>
                            <img src="./images/cordyceps.png" alt="ksm-66" class="ingr-img-large">
                        </div>
                    </div>

                    <div class="ingredient-card">
                        <div class="ingr-card-wrapper">
                            <div class="ingr-desc">
                                <h2 class="ingr-title">Beet juice extract</h2>
                                <img src="./images/beet-juice.png" alt="ksm-66" class="ingr-img-small">
                                <p class="ingr-para">Beets are packed to the brim with compounds and nutrients that are incredibly healthy for your body in a variety of ways.</p>
                                <ul class="ingr-bullets">
                                    <li>Reduce inflammation naturally</li>
                                    <li>Improving energy and athletic performance</li>
                                    <li>Support healthy blood pressure and oxygen retention</li>
                                </ul>
                            </div>
                            <img src="./images/beet-juice.png" alt="ksm-66" class="ingr-img-large">
                        </div>
                    </div>

                    <div class="ingredient-card">
                        <div class="ingr-card-wrapper">
                            <div class="ingr-desc">
                                <h2 class="ingr-title">Grape seed extract</h2>
                                <img src="./images/grape-seed.png" alt="ksm-66" class="ingr-img-small">
                                <p class="ingr-para">Grape seeds contain a molecule called proanthocyanidins [13]. </p>
                                <p class="ingr-para">They’re important because as the recent research shows, they have the antioxidant power that’s 20X stronger than vitamin E and 50 times stronger than vitamin C [14]. </p>
                                <p class="ingr-para">All to help protect your mitochondria from the daily stress of life, and ensure they can produce: <span class="para-fw800">All the clean, natural energy you need.</span></p>
                            </div>
                            <img src="./images/grape-seed.png" alt="ksm-66" class="ingr-img-large">
                        </div>
                    </div>

                    <div class="ingredient-card">
                        <div class="ingr-card-wrapper">
                            <div class="ingr-desc">
                                <h2 class="ingr-title">Amla</h2>
                                <img src="./images/amla.png" alt="ksm-66" class="ingr-img-small">
                                <p class="ingr-para">Amla grows in the fertile jungles of Indonesia, and has been relied on by traditional healers for centuries to treat low energy. But as with most Eastern Medicine, our modern world is just now catching up.</p>
                                <p class="ingr-para">
                                    Also known as Indian Gooseberry, studies have found that Amla helps boost heart health, repair liver damage, and boost your immune system.</p>
                                <ul class="ingr-bullets">
                                    <li>Amla is the second richest natural source of vitamin C</li>
                                </ul>
                            </div>
                            <img src="./images/amla.png" alt="ksm-66" class="ingr-img-large">
                        </div>
                    </div>

                    <div class="ingredient-card">
                        <div class="ingr-card-wrapper">
                            <div class="ingr-desc">
                                <h2 class="ingr-title">S7™</h2>
                                <img src="./images/s7.png" alt="ksm-66" class="ingr-img-small">
                                <p class="ingr-para">A combination of unique compounds only found inside green coffee bean extract, green tea extract, turmeric, blueberry, broccoli, kale, and tart cherry. These 7 botanicals ramp up your body’s own nitric oxide production by 230% in as little as an hour.[4] </p>
                                <ul class="ingr-bullets">
                                    <li>Recover <span class="bullet-fw400">faster with increased Nitric Oxide production</span></li>
                                    <li>Acclimate <span class="bullet-fw400">to elevation quicker with faster oxygen delivery</span></li>
                                </ul>
                            </div>
                            <img src="./images/s7.png" alt="ksm-66" class="ingr-img-large">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>`;
  }
}

customElements.define("ingredient-list", IngredientList);
