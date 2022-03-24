// 1

const calculateFunc = (param1, param2, param3) => {

return new Promise((resolve, reject) =>{
  if(typeof param1 !== 'number' || typeof param2 !== 'number' || typeof param3 !== 'number')
  reject('Informe apenas números')
  // --------- 
  const result = (param1 + param2) * param3;
  if(result < 50) {
    return reject('Valor muito baixo')
  }
  
  resolve(result)
})
} 

calculateFunc(10, 20, 30).then(resolve => console.log(resolve)).catch((err => console.log(err)))

calculateFunc(10, 20, 'a').then(resolve => console.log(resolve)).catch((err => console.log(err)))

calculateFunc(1, 3, 4).then(resolve => console.log(resolve)).catch((err => console.log(err)))

// * AO montar toda a função é necessário tratar a promise com o ".then" e o ".catch" para que então possa retornar o resultadoda forma correta.


// 2

const getRandomNumber = () => {
 return Math.floor(Math.random() * 100 + 1);
}

const callCalculateFunc = () => {
    /* Criamos um novo array de 3 posições
   * e utilizamos o `map` para gerar um número aleatório
   * para cada posição do Array
   */
 const randomNumbers = Array.from({length: 3 }).map(getRandomNumber)

  calculateFunc(...randomNumbers).then(result => console.log(result)).catch((err) => console.log(err))
  
}
callCalculateFunc()

// 3 

 const getRandomNumberTwo = () => {
  return Math.floor(Math.random() * 100 + 1);
 }
 
 const callCalculateFuncTwo = async() => {
   
  const randomNumbers = Array.from({length: 3 }).map(getRandomNumber)

    try{
   const result = await calculateFunc(...randomNumbers)
   console.log(`Resultado da funcTwo: ${result}`)
  } catch (err) {
    console.error(`Erro da funcTwo ${err}`)
  }
 }

 callCalculateFuncTwo()
 getRandomNumberTwo()
 

