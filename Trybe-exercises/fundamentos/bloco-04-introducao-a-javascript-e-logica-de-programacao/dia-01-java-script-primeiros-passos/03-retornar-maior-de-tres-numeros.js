/* 3- Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. */ 

const a = 10
const b = 120
const c = 80
​
if ((a > b) && (a > c)) { 
    console.log("o maior número é: " + a)
} else if ((b > a) && (b > c)) {
    console.log("o maior número é: " + b)
} else {
    console.log("o maior número é: " + c)
}
