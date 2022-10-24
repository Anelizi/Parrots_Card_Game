let numeCartas;

let mover = 0;
let cartaMov = 0;

let combinar = 0;

const arrayJogo = [
    "./gifs/bobrossparrot.gif",
    "./gifs/bobrossparrot.gif",
    "./gifs/explodyparrot.gif",
    "./gifs/explodyparrot.gif",
    "./gifs/fiestaparrot.gif",
    "./gifs/fiestaparrot.gif",
    "./gifs/metalparrot.gif",
    "./gifs/metalparrot.gif",
    "./gifs/revertitparrot.gif",
    "./gifs/revertitparrot.gif",
    "./gifs/tripletsparrot.gif",
    "./gifs/tripletsparrot.gif",
    "./gifs/unicornparrot.gif",
    "./gifs/unicornparrot.gif"
]

//função de jogo
function Jogo(){
    
    //função para o jogador escolher o numero de cartas
    function cartasJogador(){
        numeCartas = parseInt(prompt("Com quantas cartas quer jogar?"));
    }
    cartasJogador();

    while ((numeCartas %2 !== 0) || (numeCartas < 4) || (numeCartas > 14)){
        cartasJogador();
    }

    if ((numeCartas %2 === 0) && (numeCartas >= 4) && (numeCartas <= 14)){
        alert("Bora Jogaar");
    }

    //distribuição aleatória
    function comparar(){
        return Math.random() - 0.5;
    }

    let aleatorio = arrayJogo.slice(0,(numeCartas));
    aleatorio.sort(comparar);

    //colocar as cartas no HTML
    for (let index = 0; index < numeCartas; index++) {
        let cartasHTML = document.querySelector('main');
        cartasHTML.innerHTML += `<div class="cartas" onclick="clickCarta(this.querySelector('.tras'),this.querySelector('.frente'),this)">
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
// Aqui acaba a função jogo

// Aqui começa a função das cartas, virar e desvirar
function clickCarta(tras, frente, carta) {

    if (carta.classList.contains("seleciona") || carta.classList.contains("combina")) {
        return;
    }
    
    mover++;
    cartaMov++;
    
    carta.classList.add("seleciona");

    tras.classList.remove("tras");
    tras.classList.add("frente");

    frente.classList.remove("frente");
    frente.classList.add("tras");

    //verificando se as duas cartas escolidas são iguais
    if(cartaMov == 2){
        let click = document.querySelector(".clickCartaTrue");
        click.classList.remove("clickCartaTrue");
        click.classList.add("clickCartaFalse");

        let selecionarCartas = document.querySelectorAll(".seleciona");
        let carta1 = selecionarCartas[0];
        let carta2 = selecionarCartas[1];

        if (carta1.innerHTML === carta2.innerHTML) {
            carta1.classList.add("combina");
            carta2.classList.add("combina");

            cartaMov = 0;
            
            carta1.classList.remove("seleciona");
            carta2.classList.remove("seleciona");

            click.classList.toggle("clickCartaTrue");
            click.classList.toggle("clickCartaFalse");

            combinar++;

            setTimeout(i,2000);

            return;
        }

        cartaMov = 0;
    
        duasCartas();
        duasCartas();

        setTimeout(function () {
            click.classList.toggle("clickCartaTrue");
            click.classList.toggle("clickCartaFalse");
        }, 1000)

    }

}

function duasCartas(){

    let trasC = document.querySelector(".seleciona .tras");
    let frenteC = document.querySelector(".seleciona .frente");
    let carta = document.querySelector(".seleciona");
    carta.classList.remove("seleciona");

    setTimeout(function(){

        trasC.classList.add("frente");
        trasC.classList.remove("tras");

        frenteC.classList.add("tras");
        frenteC.classList.remove("frente");
    }, 1000)
}


function vidoria(){

}

Jogo();