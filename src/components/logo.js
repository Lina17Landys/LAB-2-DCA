class LogoBig extends HTMLElement {

    static get observedAttributes() {
        return ["img-src-tumblr-logo"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="index.css">
            <center> <img src="${this['img-src-tumblr-logo']}"</center>

        `;
    }
}

customElements.define("logo-container", LogoBig);
export default LogoBig;