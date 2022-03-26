const { expect } = require('chai');
const naturalNumbersFunc = require('../functions/naturalNumbersFunc');

const naturalNumbers = require('../functions/naturalNumbersFunc');

describe('Quando o número for maior que 0', () => {
  it('a resposta é uma "string"', () => {
    const resposta = naturalNumbers(1)
    expect(resposta).to.be.a('string')
  })

  it('maior que 0, retorne "positivo"', () => {
    const resposta = naturalNumbers(1)
    expect(resposta).to.be.equals('positivo')
  })
})

describe('Quando o número for menor que 0', () => {
  it('a resposta é uma "string"', () => {
    const resposta = naturalNumbers(-1)
    expect(resposta).to.be.a('string')
  })

  it('retorna "negativo"', () => {
    const resposta = naturalNumbers(-1)
    expect(resposta).to.be.equals('negativo')
  })
})

describe('Quando o número for igual a 0', () => {
  it('a resposta é uma "string"', () => {
    const resposta = naturalNumbers(0)
    expect(resposta).to.be.a('string')
  })

  it('retorna "negativo"', () => {
    const resposta = naturalNumbers(0)
    expect(resposta).to.be.equals('neutro')
  })
})

describe('Se tipo inserido não for:', () => {

  it('a resposta deve sempre ser uma "string"', () => {
    const resposta = naturalNumbers(-1)
    expect(resposta).to.be.a('string')
  })

  it('um número, retorne "o valor deve ser um número"', () => {
    const resposta = naturalNumbersFunc('a')
    expect(resposta).to.be.equal('o valor deve ser um número')
  })
})
