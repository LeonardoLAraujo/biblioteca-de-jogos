import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
import './componentes/card/card.js';
import './componentes/imagem/imagem.js';
import './componentes/link/link.js';
import './componentes/titulo/titulo.js';
import './componentes/botao/botao.js';
import '../componentes/input/input.js';

class App extends LitElement{

    static get properties(){
        return{

        }
    }

    constructor(){
        super();
    }

    static get styles(){
        return css`
            .galeria{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-evenly;
                gap: 40px;
                margin-top: 20px;
            }

            .pesquisarJogo{
                display: flex;
                align-items: center;
                justify-content: space-around;
                flex-wrap: wrap;
                border-bottom: 1px solid #000;
                padding-bottom: 10px
            }
        `;
    }

    render(){
        return html`
        <div class="pesquisarJogo">
            <my-img class="logo" localDaImagem="https://thypix.com/wp-content/uploads/2021/10/grey-anime-profile-picture-thypix-45-700x700.jpg" altura="80px" largura="80px"></my-img>
            <my-input></my-input>
            <my-botao texto="Pesquisar"></my-botao>
        </div>

        <div class="galeria">
            <my-card titulo="Naruto Shippuden - Ultimate Ninja 5" localDaImagem="https://cache.downloadroms.io/static/41aa5d01e64dfcf4874480e2f69a502a0efc12eb/image.jpg"></my-card>   
            <my-card titulo="Dragon Ball Z - Budokai 3" localDaImagem="https://cache.downloadroms.io/static/67d971a330ecaca3236842eedbb50aa78e06a163/image.jpg"></my-card>  
            <my-card titulo="Legend of Zelda, The: Skyward Sword" localDaImagem="https://cache.downloadroms.io/static/af3cd9a46dfa4dd94d2aee4e4e4898747f4f40d9/image.jpeg"></my-card>  
            <my-card titulo="Inazuma Eleven" localDaImagem="https://cache.downloadroms.io/static/7e65ec60f13300be596a0684bd8114e8cb5caca3/image.jpg"></my-card>  
            <my-card titulo="Forza Motorsport 4" localDaImagem="https://romsfun.com/wp-content/uploads/2023/03/Forza-Motorsport-4-300x426.jpg"></my-card>  
            <my-card titulo="Naruto Shippuden - Ultimate Ninja 5" localDaImagem="https://cache.downloadroms.io/static/41aa5d01e64dfcf4874480e2f69a502a0efc12eb/image.jpg"></my-card>   
            <my-card titulo="Dragon Ball Z - Budokai 3" localDaImagem="https://cache.downloadroms.io/static/67d971a330ecaca3236842eedbb50aa78e06a163/image.jpg"></my-card>  
            <my-card titulo="Legend of Zelda, The: Skyward Sword" localDaImagem="https://cache.downloadroms.io/static/af3cd9a46dfa4dd94d2aee4e4e4898747f4f40d9/image.jpeg"></my-card>  
            <my-card titulo="Inazuma Eleven" localDaImagem="https://cache.downloadroms.io/static/7e65ec60f13300be596a0684bd8114e8cb5caca3/image.jpg"></my-card>  
            <my-card titulo="Forza Motorsport 4" localDaImagem="https://romsfun.com/wp-content/uploads/2023/03/Forza-Motorsport-4-300x426.jpg"></my-card>
            <my-card titulo="Naruto Shippuden - Ultimate Ninja 5" localDaImagem="https://cache.downloadroms.io/static/41aa5d01e64dfcf4874480e2f69a502a0efc12eb/image.jpg"></my-card>   
            <my-card titulo="Dragon Ball Z - Budokai 3" localDaImagem="https://cache.downloadroms.io/static/67d971a330ecaca3236842eedbb50aa78e06a163/image.jpg"></my-card>  
            <my-card titulo="Legend of Zelda, The: Skyward Sword" localDaImagem="https://cache.downloadroms.io/static/af3cd9a46dfa4dd94d2aee4e4e4898747f4f40d9/image.jpeg"></my-card>  
            <my-card titulo="Inazuma Eleven" localDaImagem="https://cache.downloadroms.io/static/7e65ec60f13300be596a0684bd8114e8cb5caca3/image.jpg"></my-card>  
            <my-card titulo="Forza Motorsport 4" localDaImagem="https://romsfun.com/wp-content/uploads/2023/03/Forza-Motorsport-4-300x426.jpg"></my-card>
            <my-card titulo="Naruto Shippuden - Ultimate Ninja 5" localDaImagem="https://cache.downloadroms.io/static/41aa5d01e64dfcf4874480e2f69a502a0efc12eb/image.jpg"></my-card>   
            <my-card titulo="Dragon Ball Z - Budokai 3" localDaImagem="https://cache.downloadroms.io/static/67d971a330ecaca3236842eedbb50aa78e06a163/image.jpg"></my-card>  
            <my-card titulo="Legend of Zelda, The: Skyward Sword" localDaImagem="https://cache.downloadroms.io/static/af3cd9a46dfa4dd94d2aee4e4e4898747f4f40d9/image.jpeg"></my-card>  
            <my-card titulo="Inazuma Eleven" localDaImagem="https://cache.downloadroms.io/static/7e65ec60f13300be596a0684bd8114e8cb5caca3/image.jpg"></my-card>  
            <my-card titulo="Forza Motorsport 4" localDaImagem="https://romsfun.com/wp-content/uploads/2023/03/Forza-Motorsport-4-300x426.jpg"></my-card>
        </div>      
        `;
    }

}

customElements.define('my-app', App);