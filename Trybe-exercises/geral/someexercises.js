const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];


const VerifyLetter = (letter, name) => name.some((name) => name[0].toLowerCase() === letter)

console.log(VerifyLetter('m', listNames))


const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };

  const checkGrades = (studentGrades)=> (Object.values(studentGrades).every(grade => grade === 'Aprovado'))

  console.log(checkGrades(grades))

  const grades2 = {
    Aprovado: 0,
    Aprovado: 0,
    Aprovado: 0,
  };

  const check2 = (studentGrades2) => Object.keys(studentGrades2).every((grade => grade === 'Aprovado'))

  console.log(check2(grades2))


  //Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;


  const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

  const hasName = (arr, name) => {
   return arr.some(currentName => currentName === name)
  }
  
  console.log(hasName(names, 'Ana'))


// Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every ;

  const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
   return arr.every(index => index.age >= minimumAge)
  }
  
  console.log(verifyAges(people, 18));

