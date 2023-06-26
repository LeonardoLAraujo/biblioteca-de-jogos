import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

class Card extends LitElement{

    static get properties(){
        return{
            titulo: {type: String},
            localDaImagem: {type: String},
            desaparecer: {type: Boolean},
        }
    }

    constructor(){
        super();
        this.desaparecer = false;
        console.log('constr');
    }

    static get styles(){
        return css`
            .card{
                box-shadow: 2px 4px 48px 11px rgba(0,0,0,0.2);
                width: 300px;
                display: flex;
                flex-direction: column;
                padding: 6px;
                border-radius: 10px;
                align-items: center;
                height: 100%;
            }

            .card:hover{
                box-shadow: 2px 4px 48px 11px #4184e1;
            }

            .fade{
                position: absolute;
                z-index: 1;
                height: 100vh;        
                opacity: 1;
                backdrop-filter: blur(6px);
                background: #726f6fa6 0% 0% no-repeat padding-box;
                width: 100%;
                top: 0;
            }

            .fade[desaparecer]{
                display: none;
            }
        `;
    }

    firstUpdated(){
        console.log("first");
        this.fadeAparecer = this.shadowRoot?.querySelector(".fade");
        
        if(this.desaparecer === true){
            this.fadeAparecer.removeAttribute("desaparecer"); 
        }else{
            this.fadeAparecer.setAttribute("desaparecer", "desaparecer");
        }

    }

    render(){
        
        return html`
            <div class="card" >
                <slot name="cabecalho">
                    <my-titulo slot="cabecalho" texto=${this.titulo}></my-titulo>
                </slot>
                <slot name="corpo">
                    <my-img slot="corpo" localDaImagem=${this.localDaImagem} largura="100%"></my-img>
                </slot>
                <slot name="rodape" class="rodape">
                    <my-botao slot="rodape" texto="Abrir" @click=${() => this.abrir()}></my-botao>
                </slot>
            </div>


            <div class="fade" desaparecer>
                <div class="modal">
                    <my-titulo texto=${this.titulo}></my-titulo>
                    <my-img localDaImagem=${this.localDaImagem}></my-img>
                    <my-p texto="Donec fermentum sit amet magna eget tristique. In sed libero sapien. Aenean elementum turpis vitae ligula volutpat, in consequat turpis ornare. Donec a facilisis diam. Sed varius risus vel magna pharetra, eget ullamcorper ligula placerat. Proin consequat hendrerit tortor sit amet interdum. Maecenas aliquet mauris leo, vel imperdiet nisi consectetur non."></my-p>
                    <my-botao texto="Baixar"></my-botao>
                </div>
            </div>
            
        `;
    }

    abrir(){
       this.desaparecer = true;
    }

}

customElements.define('my-card', Card);