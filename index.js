import * as components from "./exports.js"

class App extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="index.css">
        <link rel="stylesheet" type="text/css"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<div>
        <img class="tiny-logo" src="img/tumblr logo b.png">
        <div class="searchBar">
        <div class="box">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input id="searchBar" onkeyup="searchItem()" type="text" name="search" placeholder="Search in tumblr">
          </div>
          </div>

<div>
<logo-container></logo-container>
</div>



<div>
<register-container></register-container>
</div>

<div>
<login-container></login-container>
</div>
<div>
<button-container></button-container>
</div>

<div>
<final-container></final-container>
</div>
        `;
    }
}

customElements.define("app-container", App);


