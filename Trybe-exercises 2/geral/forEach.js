const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const multipliesFor2 = (element) => {
//   console.log(`${element} * 2: ${element * 2}`);
// };

// numbers.forEach(multipliesFor2);

// const multipliesFor22 = numbers.forEach(element => {
//     console.log(`${element} *2: ${element *2}`)
// });

// console.log(multipliesFor22)

const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];


const makeUpperCase = (name, index) => names[index] = name.toUpperCase();

names.forEach(makeUpperCase)
console.log(names)


//Use o método forEach chamando a callback showEmailList para apresentar os emails

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];

  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
  emailListInData.forEach(showEmailList)
  
  