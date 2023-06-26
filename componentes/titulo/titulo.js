import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class Titulo extends LitElement{

    static get properties(){
        return{
            texto: {type: String},
        }
    }

    constructor(){
        super();
        this.texto = '';
    }

    static get styles(){
        return css`
        
        `;
    }

    render(){
        return html`
            <h1>${this.texto}</h1>
        `;
    }
}

customElements.define('my-titulo', Titulo);