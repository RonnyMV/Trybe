/*6- Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz. 
​
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais. */


let PecaXadrez = "peao";
​
switch (PecaXadrez.toLowerCase()) {
    case "rei":
        console.log("move-se para horizontal, vertical e diagonal") 
        break;
​
    case "rainha":
        console.log("move-se para horizontal, vertical e diagonais")
        break;
​
    case "bispo":
        console.log("move-se para a diagonal")
        break;
​
    case "cavalo":
            console.log("move-se em forma de L. Duas casas em sentido horizontal e mais uma na vertical ou vice-versa")
            break;
​
    case "torre":
            console.log("movimenta-se pela vertical ou horizontal")
            break;
    case "peao":
        console.log("movimenta-se apenas uma casa para frente")
        break;
​
        default:
            console.log ("Peça Inválida");
            break;
}