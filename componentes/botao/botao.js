import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
import '../titulo/titulo.js';

export class Botao extends LitElement{

    static get properties(){
        return{
            texto: {type: String},
            funcao: {},
        }
    }

    constructor(){
        super();
        this.texto = '';
    }

    static get styles(){
        return css`
            .botao{
                display: block;
                width: 300px;
                padding: 4px;
                background: cadetblue;
                color: #fff;
                text-decoration: none;
                border-radius: 10px;
                border: none;
                font-family: 'Poppins', sans-serif;
                font-size: 16px;
                cursor: pointer;
            }
        `;
    }

    render(){
        return html`
            <button class="botao" >${this.texto}</button>

        `;
    }

}
customElements.define('my-botao', Botao);