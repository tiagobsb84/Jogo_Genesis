let order = [];
let clickOrder = [];
let score = [];

// 0 - verde;
// 1 - vermelho;
// 2 - amarelo;
// 3 - azul;

const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");

//Criar order aleatoria de cores.
let sortearOrder = () => {
    //ele vai arredondar a ordem sorteada, e vezes 4 valores.
    let colorOrder = Math.floor(Math.random() * 4);
    //Aqui vamos atribuir o indice que nos escolher a o indice que foi sorteado.
    order[order.length] = colorOrder;
    clickOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        //esse metodo e para que a cor pecorra a proxima cor.
        lightColor(elementColor, Number(i) + 1);
    }
}

//Ativar a proxima cor.
let lightColor = (element, number) => {
    number = number * 500;
    //esse setTimeOut ele e para acrecentar o opacity por um determinado tempo.
    setTimeout(() => {
        element.classList.add("select");
    }, number - 250);

    setTimeout(() => {
        element.classList.remove("select");
    });
}

//Essa função e para checar a order do indice das cores e a ordem do indice do click;
let checkOrder = () => {
    for(let i in clickOrder){
        if(clickOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//Função para o cliqque do usuário.
let click = (color) => {
    //Para que o click seja o mesmo da ordem da cor clicado.
    clickOrder[clickOrder.length] = color;
    createColorElement(color).classList.add("select");

    setTimeout(() => {
        createColorElement(color).classList.remove("select");
        checkOrder();
    }, 250);
}

//essa função para retorna a cor.
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1){
        return red;
    } else if(color == 2) {
        return yellow;
    } else if(color == 3) {
        return blue;
    }
}

//Função para proximo level do jogo.
let nextLevel = () => {
    score++;  
    sortearOrder();
}

//Função para fim de jogo.
let gameOver = (() => {
    alert(`Pontuação: ${score}! \nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo.`);
    order = [];
    clickOrder = [];

    playGame();
})

//Iniciar o jogo.
let playGame = (() => {
    alert(`Bem vindo ao Gênises! Iniciando novo jogo.!`);
    score = 0;

    nextLevel();
})

//evento de clique para as cores.
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//inicio do jogo
playGame();