/* 5- Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro */

const anguloA = 60;
const anguloB = -600;
const anguloC =60;
​
const somatotal = anguloA + anguloB + anguloC;
​
const angulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;
​
if (angulosPositivos) {
​
    if (somatotal == 180) {
        console.log("Positive");
    } else { 
        console.log("Negative");
    } 
} else {
    console.log ("Erro: ângulo inválido");
    } 