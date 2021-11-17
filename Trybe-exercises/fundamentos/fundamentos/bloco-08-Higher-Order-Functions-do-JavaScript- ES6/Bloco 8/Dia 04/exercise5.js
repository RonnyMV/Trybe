const names = [
    'Aan,emarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  // 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

  function containsA() {
    const letters = names.reduce((acc,current) => (acc + current),'').toLowerCase().split('')
    
   return letters.reduce((acc2,current2) => (current2 === 'a') ? acc2 + 1 : acc2,0)
   // ? = true e : false, se true retorne acc2+1, se false, permanece o acc2.

   //Outra opção seria utilizando o filter : 
   //return letters.filter((a) => a === 'a').length
  }
  console.log(containsA())

 