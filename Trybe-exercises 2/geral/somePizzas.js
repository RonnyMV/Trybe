const pizzas =[
    { flavor: 'Morango com Catupiry', price: 12.20},
    { flavor: 'Marguerita', price: 13.50},
    { flavor: 'Gratinada', price: 15.32},
    { flavor: 'Quatro queijos', price: 13.63},
];

//Retorne verdadeiro para se houver menor que 13 ou false para que seja maior que 13.

const priceLessThen13 = pizzas.some((pizza) => 
{ return pizza.price < 13;
});

console.log(`Existe alguma pizza com valor menor que 13? Rposta: ${priceLessThen13}`)