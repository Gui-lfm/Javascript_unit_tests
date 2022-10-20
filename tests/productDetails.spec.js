const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

const item1 = 

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
    expect(Array.isArray(productDetails('mascara', 'alcool gel'))).toBe(true);
    expect(productDetails('mascara', 'alcool gel').length).toBe(2);
    
    expect(typeof productDetails('mascara', 'alcool gel')[0]).toBe('object')
    expect(typeof productDetails('mascara', 'alcool gel')[1]).toBe('object')
    
    expect(productDetails('mascara', 'alcool gel')[0] !== productDetails('mascara', 'alcool gel')[1]).toBe(true);

    expect(productDetails('mascara', 'alcool gel')[0].details.productId).toMatch(/.123/)
    expect(productDetails('mascara', 'alcool gel')[1].details.productId).toMatch(/.123/)
  });
});
