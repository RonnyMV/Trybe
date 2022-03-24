const { readFile, rename } = require('fs')

// 4.1
const fs = require('fs').promises

fs.readFile('./simpsons.json', 'utf-8').then((content) =>{
  return JSON.parse(content)
}).then((simpson) => {
  return simpson.map(({id, name}) => `${id} - ${name}`)})
  .then((result) => {
    result.forEach((result) => console.log(result))
  })

  
  // Utilizamos o Readfile para ler o arquivo JSON. Depois convertemos ele para string. Depois realizamos o map nas strings, retornando somente o id e o nome. Depois mostramos cada uma delas no console.log
// 4.2
 const getSimpsonId = async (id) => {
   const simpsons = await fs.readFile('./simpsons.json', 'utf-8').then((content) => JSON.parse(content))

   console.log(simpsons)

   const verifySimpsonId = simpsons.find((simpson) => Number(simpson.id) === Number(id))
   if(!verifySimpsonId) {
     throw new Error('id não encontrado')
      }
      return console.log(verifySimpsonId.name)
  }

  getSimpsonId(1)


// Primeiro passo foi criar uma função para realizar a consulta do arquivo JSON e retornar o objeto de strings. Utilizamos o async await, pois precisamos que primeiro execute a primeira fução para que depois sej chamado a 2° função. Foi necessáiro realizar a conversão para number, para que seja lido com id como número e não como string.

// Segundo passo, criamos função para verificar se o id pasado como parametro exite dentro do OBJETO.

// 4.3

const removePersonagem = async (id, id2, id3, id4) => {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8').then((content) => JSON.parse(content))
  if (id2 === null ) id2 = null
  if (id3 === null ) id3 = null
  if (id4 === null ) id4 = null
  const filterArr = simpsons.filter(simpson => Number(simpson.id)!== Number(id) && Number(simpson.id) !== Number(id2));
  fs.writeFile('./simpson.json', JSON.stringify(filterArr))
}

removePersonagem(6, 3)

// Fiz uma função geral que serve para remover qualquer id passado por parametro. Primeiro utilizei o readFile para ler o arquivo e converter para objeto. Depois ciriei função para filtrar todos os ids que não são igual ao passado no parametro, utilizei o writeFile para criar outra JSON com todos que sobraram.

// 4.4

const createNewSimpsonFamilly = async () => {
  const simpsons = await fs.readFile ('./simpsons.json', 'utf-8').then((content)=> JSON.parse(content))
  
  const filterId = simpsons.filter(simpson => ['1','2','3','4'].includes(simpson.id) )

  fs.writeFile('./simpsonFamilly.json', JSON.stringify(filterId))
}
createNewSimpsonFamilly()


// 4.5 


const addNelsonToFamily = async () => {

  const simpsonsFamily = await fs
  .readFile('./simpsonsFamily.json', 'utf-8')
  .then((fileContent) => JSON.parse(fileContent));

  simpsonsFamily.push({ "id": "8","name": "Nelson Muntz" });

  await fs.writeFile('./simpsonsFamily.json', simpsonsFamily);
}


addNelsonToFamily()

//4.6

const replaceNelson = () => {
  // Realizamos a leitura do arquivo
  return fs.readFile('./simpsons.json', 'utf-8')
    // Interpretamos o conteúdo como JSON
    .then((fileContent) => JSON.parse(fileContent))
    // Filtramos o array para remover o personagem Nelson
    .then((simpsons) => simpsons.filter((simpson) => simpson.id !== '8'))
    // Criamos um novo Array contendo a personagem Maggie
    .then((simpsonsWithoutNelson) => simpsonsWithoutNelson
      .concat([{ id: '8', name: 'Maggie Simpson' }]))
    // Escrevemos o novo array no arquivo
    .then((simpsonsWithMaggie) =>
      fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie)));
}

replaceNelson()

// 5 

const arrayToFile = async () => {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']

  const createFilePromises = strings.map((string, index) => fs.writeFile(`./file${index + 1}.txt`, string))

  await Promise.all(createFilePromises);

  const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];

  const fileContents = await Promise.all(
    fileNames.map((fileName) => fs.readFile(fileName, 'utf-8'))
  );

   const newFileContent = fileContents.join(' ');

  await fs.writeFile('./fileAll.txt', newFileContent);
}

arrayToFile();

// 6 

