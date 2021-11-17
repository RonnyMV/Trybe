const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  //Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.
  //SE TODOS NASCEREM EM ANOS DIFERENTES RETORNA TRUE. AO CONTRARIO FALSE.
//every para ter dois indicies percorrer e comparar
//utilizei dois every para comparar os dois elementos
  // DENTRE TODOS OS AUTORES DOS LIVROS ALGUM(SOME) NASCEU NO MESMO ANO QUE O OUTRO

  
  const expectedResult = false;

  function authorUnique() {
  for (let index = 0; index < books.length; index += 1) {
    for (let jindex = 0; jindex < books.length; jindex += 1) {
     if (books[index].author.birthYear === books[jindex].author.birthYear  
      && books[index].author.name !== books[jindex].author.name) {
       return false //retorna true, mas a qeustao pede falso.
     }
    }
  }
  return true 
  }
console.log(authorUnique())  


