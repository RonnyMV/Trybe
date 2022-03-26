const naturalNumbersFunc = (number) => {
  if(typeof number !== 'number' ) {
    return 'o valor deve ser um número'
  }else if(number > 0){
    return 'positivo'
  } else if (number < 0) {
    return 'negativo'
  } 
  return 'neutro'
}

module.exports = naturalNumbersFunc;
