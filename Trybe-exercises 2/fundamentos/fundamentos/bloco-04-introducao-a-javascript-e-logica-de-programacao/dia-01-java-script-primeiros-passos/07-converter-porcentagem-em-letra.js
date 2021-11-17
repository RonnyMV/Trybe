/* 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

let nota = 200;
if(nota < 0 || nota > 100) {
    return console.log("Nota inexistente")
}else if (nota >= 90) { 
  return console.log("A")
} else if(nota >= 80){ 
  return console.log("B")
}else if(nota >= 70){ 
    return console.log("C")
  }else if(nota >= 60){ 
    return console.log("D")
  }else if(nota >= 50){ 
    return console.log("E")
  }else if(nota <= 50){ 
    return console.log("F")
  }
  