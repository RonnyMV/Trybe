const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs')

const writeFile = require('../functions/writeFile')

describe('Executa a função writeFile', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  })
  
  after(() => {
    fs.writeFileSync.restore()
  })
  describe('a resposta', () => {
    it('sempre será uma string', () => {
      const resposta = writeFile('arquivo.txt', 'VQV TDD')
      expect(resposta).to.be.a('string');  
    })

    it('é igual a "ok"', () => {
      const resposta = writeFile('arquivo.txt', '#vqv conteúdo');

      expect(resposta).to.be.equals('ok');
    }) 
  })
})