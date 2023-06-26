import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class Link extends LitElement{

    static get properties(){
        return{
            endereco: {type: String},
            texto: {type: String},
            paddingAll: {type: String},
            marginAll: {type: String},

        }
    }

    constructor(){
        super();
        this.endereco = "#";
        this.texto = "meu link"
    }

    static get styles(){
        return css`
            .link{
                display: block;
                padding-right: 130px;
                padding-left: 130px;
                background: cadetblue;
                color: #fff;
                text-decoration: none;
                border-radius: 10px;
            }
        `;
    }

    render(){

        const estilo = `padding:${this.paddingAll}; margin: ${this.marginAll};`;

        return html`
            <a href=${this.endereco} class="link" funcao=${this.funcao}>${this.texto}</a>
        `;
    }

    funcao(){
        console.log("jiefbief");
    }

}

customElements.define('my-link', Link);