const nomes = { 
nome1: 'Ronny velardez',
nome2: 'isabelly Nascimento'
}

const idade = { 
    idade1: '26',
    idade2: '21'
}

const juntar = {
    ...nomes,
    ...idade,
}
console.log(juntar);