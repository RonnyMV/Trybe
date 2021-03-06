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

  return emailListInData.forEach(showEmailList);

  //Para cada elemento que o emailListInData tiver, execute a função showEmailList.


  // Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:

  const numbers = [19, 21, 30, 3, 45, 22, 15];

  const findDivisibleBy3And5 = () => {
      return numbers.find((number) => number % 3 === 0 && number % 5 === 0);
  }
  
  console.log(findDivisibleBy3And5())
  //number é equivalente a posição do index de numbers, ou seja, numbers[0],numbers[1]....

//Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

  const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
    return names.find(letter => letter.length === 5)
  
}
//Letter é equivalente a cada elemento da array. Utilizei o length para dizer o tamanho do name na posicao [0] - [n] igual a 5 letras.
console.log(findNameWithFiveLetters());

// - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
    return musicas.find(musica => musica.id === id).title
  }
  
  console.log(findMusic('31031685'))


  //musica é equivalente a posicao de cada objeto., ou seja musica[0], musica[1], musica[2].

  //O exemplo abaixo usa o some para verificar se possui algum nome que começa com a letra desejada:

  const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];
  const findLetterName = (letter) =>{ 
    return listNames.some((search) => (search[0].toLowerCase()) === (letter.toLowerCase()) )}

    const allWord = (letter2) => {
      return listNames.every(name => (name[0].toLowerCase()) === letter2)
    }
  
  console.log(findLetterName('m'))
  console.log(allWord('j'));

  //search é equivalente ao nome na posição 0, ou seja, primeira letra.


  