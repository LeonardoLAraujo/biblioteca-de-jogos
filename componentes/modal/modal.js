import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
import { Imagem } from '../imagem/imagem.js';
import { Titulo } from '../titulo/titulo.js';
import '../botao/botao.js';
import '../titulo/paragrafo.js';

export class Modal extends LitElement{

    static get properties(){
        return{
            desaparecer: {type: Boolean}
        }
    }

    constructor(){
        super();
        this.imagem = new Imagem();
        this.titulo = new Titulo();
        this.desaparecer = false;
    }

    static get styles(){
        return css`
            #fade{
                position: absolute;
                z-index: 1;
                height: 100vh;        
                opacity: 1;
                backdrop-filter: blur(6px);
                background: #726f6fa6 0% 0% no-repeat padding-box;
                width: 100%;
                top: 0;
            }

            #fade[desaparecer]{
                display: none;
            }
        `;
    }

    render(){
        return html`
            <div id="fade" desaparecer=${this.desaparecer}>
                <div class="modal">
                    <my-titulo texto=${this.titulo.texto}></my-titulo>
                    <my-img localDaImagem=${this.imagem.localDaImagem}></my-img>
                    <my-p texto="Donec fermentum sit amet magna eget tristique. In sed libero sapien. Aenean elementum turpis vitae ligula volutpat, in consequat turpis ornare. Donec a facilisis diam. Sed varius risus vel magna pharetra, eget ullamcorper ligula placerat. Proin consequat hendrerit tortor sit amet interdum. Maecenas aliquet mauris leo, vel imperdiet nisi consectetur non."></my-p>
                    <my-botao texto="Baixar"></my-botao>
                </div>
            </div>
            
        `;
    }

    
}

customElements.define('my-modal', Modal);