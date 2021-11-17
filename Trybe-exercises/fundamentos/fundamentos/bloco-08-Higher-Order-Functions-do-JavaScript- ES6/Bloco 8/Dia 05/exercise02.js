// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maça', 'Uva', 'Pera'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Laranja', 'Abacaxi', 'Banana'];

const fruitSalad = (fruit, additional) => {
   return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));