import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

class Input extends LitElement{

    static get properties(){
        return{

        }
    }

    constructor(){
        super();
    }

    static get styles(){
        return css`
        
            input{
                width: 300px;
                border-radius: 10px;
                padding: 10px;
                margin: 10px;
                background-color: #fff;
                border-color: grey;
                box-shadow: none;
                font-family: 'Poppins', sans-serif;
            }
        `;
    }

    render(){
        return html`
            <input placeholder="Procurar Jogos">
        `;
    }

}

customElements.define('my-input', Input);