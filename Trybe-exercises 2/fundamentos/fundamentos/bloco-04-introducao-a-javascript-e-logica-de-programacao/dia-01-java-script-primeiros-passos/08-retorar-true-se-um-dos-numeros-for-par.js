/* 8 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

Bonus: use somente um if . */


let const1 = 1
let const2 = 3
let const3 = 5
let condicao = false

if ( (const1 % 2 === 0 || const2 % 2 === 0 || const3 % 2 === 1) ) { 
    condicao = true
} 
console.log(condicao);