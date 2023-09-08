class loginButtons extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

   render(){
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="index.css">
    <center> 
<button type="button" class="button-3">Log in with Google</button> 
<button type="button" class="button-3">Log in with Apple</button> 
<p class="bottom-text">Discover the topics of the moment</p>

</center>
    `
   }
}

customElements.define("login-container", loginButtons);
export default loginButtons;