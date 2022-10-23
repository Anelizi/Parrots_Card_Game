let numeCartas;


const arrayJogo = [
    "./gifs/bobrossparrot.gif",
    "./gifs/explodyparrot.gif",
    "./gifs/fiestaparrot.gif",
    "./gifs/metalparrot.gif",
    "./gifs/revertitparrot.gif",
    "./gifs/tripletsparrot.gif",
    "./gifs/unicornparrot.gif",
    "./gifs/bobrossparrot.gif",
    "./gifs/explodyparrot.gif",
    "./gifs/fiestaparrot.gif",
    "./gifs/metalparrot.gif",
    "./gifs/revertitparrot.gif",
    "./gifs/tripletsparrot.gif",
    "./gifs/unicornparrot.gif"
]

//função de jogo
function Jogo(){
    
    //função para o jogador escolher o numero de cartas
    function cartasJogador(){
        numeCartas = parseInt(prompt("Com quantas cartas quer jogar?"));
    }
    cartasJogador();

    while ((numeCartas %2 !== 0) || (numeCartas <= 3) || (numeCartas >= 15)){
        cartasJogador();
    }

    if ((numeCartas %2 == 0) && (numeCartas >= 4) && (numeCartas <= 14)){
        alert("Bora Jogaar");
    }

    //distribuição aleatória
    function comparar(){
        return Math.random() - 0.5;
    }

    let aleatorio = arrayJogo.slice(0, (numeCartas));
    aleatorio.sort(comparar);

    //colocar as cartas no HTML
    for (let index = 0; index < numeCartas; index++) {
        let cartasHTML = document.querySelector('main');
        cartasHTML.innerHTML += `
            <div class="cartas" onclick="clickCarta(this.querySelector('.tras'), this.querySelector('.frente'),this)">
                <div class="face tras">
                    <img src="./img/back.png">
                </div>
                <div class="face frente">
                    <img src=${arrayJogo[index]}>
                </div>
            </div>
        `
    }
}
Jogo();

function clickCarta(carta) {
    carta.classList.add('virar');
}