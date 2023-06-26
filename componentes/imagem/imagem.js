import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class Imagem extends LitElement{

    static get properties(){
        return{
            localDaImagem: {type: String},
            titulo: {type: String},
            altura: {type: String},
            largura: {type: String},
            class: {type: String},
        }
    }

    constructor(){
        super();
        this.localDaImagem = "";
        this.titulo = "";
       
    }

    static get styles(){
        return css`
            .logo{
                border-radius: 50%;
                margin-top: 5px;
            }
        `;
    }

    render(){

        const estilo = `width: ${this.largura}; height: ${this.altura};`;

        return html`
            <img src=${this.localDaImagem} title=${this.titulo} style=${estilo} class=${this.class}>
        `;
    }
}

customElements.define('my-img', Imagem);