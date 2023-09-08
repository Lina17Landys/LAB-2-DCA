class BottomLine extends HTMLElement {
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
    <div class="abajo">
    <nav>
        <a class="nav-link">Conditions</a>
        <a class="nav-link">Privacy</a>
        <a class="nav-link">Jobs</a>
        <a class="nav-link">Help</a>
        <nav>
</div>
    `
   }
}
customElements.define("final-container", BottomLine)
export default BottomLine;