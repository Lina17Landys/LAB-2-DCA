class register extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="index.css">
       <center> <input type="email" placeholder="E-mail" class="input-e">
<input type="password" placeholder="password" class="input">
<button type="button" class="button-2">Sign up</button> 
<div style="width:300px;margin:auto;">
<div class="linea"></div>
<div class="leyenda">Or</div>
<div class="linea"></div>
</div>
</center>
        `
    }

}

customElements.define("register-container", register);
export default register;