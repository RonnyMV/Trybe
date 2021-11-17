const pizzas =[
    { flavor: 'Morango com Catupiry', price: 12.20},
    { flavor: 'Marguerita', price: 13.50},
    { flavor: 'Gratinada', price: 15.32},
    { flavor: 'Quatro queijos', price: 13.63},
];

//Retorne o nme da pizza juntamente com o nome e o valor da pizza.

pizzas.forEach(pizza => {
    console.log(`A pizza ${pizza.flavor} custa ${pizza.price}`)
});

// o parametro pizza representa representa cada objeto de pizzas.

const cachorroQuente =[
    { flavor: 'Dog com pure', price: 12.20},
    { flavor: 'Dog com batata palha', price: 13.50},
    { flavor: 'Dog so salsicha', price: 15.32},
    { flavor: 'Pão sem salsicha', price: 13.63},
];
cachorroQuente.forEach(hotDogObjects =>{
console.log(`O valor de ${hotDogObjects.flavor} custa ${hotDogObjects.price}`)
})

