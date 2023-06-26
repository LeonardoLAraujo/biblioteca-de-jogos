import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

class Paragrafo extends LitElement{

    static get properties(){
        return{
            texto: {type: String},
        }
    }

    constructor(){
        super();
    }

    static get styles(){
        return css``;
    }

    render(){
        return html`
            <p>${this.texto}</p>
        `;
    }

}

customElements.define('my-p', Paragrafo);