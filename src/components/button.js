class form extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="index.css">
        <button class="boton">Log In</button>
        `
    }
}
customElements.define("button-container", form);
export default form;