class FAQ extends HTMLElement {
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
        
        <section class="faq-section section-padding">
        <div class="container">
            <div class="faq-section-wrapper">
                <div class="faq-heading">
                    <h2>Frequently asked questions</h2>
                </div>
                <div class="faq" id="faq">
                    <div class="faq-question-wrapper">
                        <div class="faq-title">
                            <h4>What are the ingredients in GREEN&LEAN?</h4>
                            <div class="toggle-arrow"><img src="./assets/keyboard_arrow_down.svg" alt="[Open/Close]">
                            </div>
                        </div>
                        <div class="faq-body">
                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                consequuntur
                                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                                dolorem
                                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.
                                <br />
                                <br />
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                    <div class="faq-question-wrapper">
                        <div class="faq-title">
                            <h4>What are the ingredients in GREEN&LEAN?</h4>
                            <div class="toggle-arrow"><img src="./assets/keyboard_arrow_down.svg" alt="[Open/Close]">
                            </div>
                        </div>
                        <div class="faq-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, temporibus ea
                                molestiae
                                dolorem asperiores praesentium iste natus eaque blanditiis delectus officiis hic modi
                                magnam
                                placeat aliquam nesciunt, a laudantium quas.</p>
                        </div>
                    </div>
                    <div class="faq-question-wrapper">
                        <div class="faq-title">
                            <h4>How many servings per pouch?</h4>
                            <div class="toggle-arrow"><img src="./assets/keyboard_arrow_down.svg" alt="[Open/Close]">
                            </div>
                        </div>
                        <div class="faq-body">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit minus debitis quaerat
                                omnis
                                modi
                                tempore maxime ducimus, itaque numquam. At laudantium quasi odio molestias quod
                                consectetur
                                repellendus esse veniam dolores dignissimos debitis dolor possimus iusto, veritatis
                                voluptatibus
                                tempore libero, unde temporibus neque dicta quis? Veniam ipsum sunt hic recusandae aut?
                            </p>
                        </div>
                    </div>
                    <div class="faq-question-wrapper">
                        <div class="faq-title">
                            <h4>Is there any dairy, gluten, or soy?</h4>
                            <div class="toggle-arrow"><img src="./assets/keyboard_arrow_down.svg" alt="[Open/Close]">
                            </div>
                        </div>
                        <div class="faq-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, ipsa dolores harum quis et
                                perspiciatis aliquam nam nisi ullam odio facilis perferendis laudantium esse possimus
                                mollitia
                                vel rerum quisquam hic nesciunt vero repellat fugit adipisci consequuntur!
                                Necessitatibus
                                porro
                                at quae.</p>
                        </div>
                    </div>
                    <div class="faq-question-wrapper">
                        <div class="faq-title">
                            <h4>Will GREEN&LEAN upset my stomach?</h4>
                            <div class="toggle-arrow"><img src="./assets/keyboard_arrow_down.svg" alt="[Open/Close]">
                            </div>
                        </div>
                        <div class="faq-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum repellendus ab aperiam
                                pariatur, ad
                                omnis quo ea. Harum at tenetur deleniti obcaecati voluptas quos provident architecto
                                distinctio
                                amet corrupti commodi perferendis iusto inventore illo quaerat totam ullam similique
                                explicabo
                                facilis tempore, quia accusantium. Deleniti eos voluptatum eius expedita dolorum beatae
                                blanditiis ratione quam rerum adipisci assumenda debitis fugit a recusandae aspernatur
                                saepe
                                quibusdam autem, optio minus incidunt quae. Pariatur eum iure doloribus, perferendis
                                fuga
                                consequatur impedit tempora exercitationem, repudiandae quasi commodi officiis sequi
                                nostrum
                                porro quisquam aliquam velit veniam dolorem temporibus veritatis, in deserunt repellat
                                delectus
                                magni! Facere, modi quis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
  }
}

customElements.define("faq-section", FAQ);
