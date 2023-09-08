class LogoBig extends HTMLElement {

    static get observedAttributes() {
        return ["img/tumblr logo a.png"];
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
            <center><img class="big-logo" src="img/tumblr logo a.png"></center>
        `;
    }
}

customElements.define("logo-container", LogoBig);
export default LogoBig;