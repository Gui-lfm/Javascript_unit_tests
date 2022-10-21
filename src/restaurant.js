/* eslint-disable complexity */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable max-len */

/*
    meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` armazenando um array de strings. Cada string é a chave de um pedido.
    Exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` armazenando uma função. Essa função recebe uma string como parâmetro e essa string deve ser adicionada à lista armazenada em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função. Essa função faz a soma do preço de todos os pedidos, retornando essa soma de preços com acréscimo de 10%.

  Comportamento:
    const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} })

    meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

    meuRestaurante.order('coxinha') // Retorno: undefined

    meuRestaurante.consumption // Retorno: ['coxinha']

    meuRestaurante.pay() // Retorno: 4.29

  IMPORTANTE - FAÇA OS TESTES E PASSOS DE ACORDO COM A SEQUÊNCIA INDICADA NO README DO PROJETO!

  BOAS PRÁTICAS TDD: COMECE PELO TESTE 1 DO ARQUIVO `tests/restaurant.spec.js` E VOLTE A ESTE ARQUIVO QUANDO FOR INDICADO!

*/

const createMenu = (object) => {
  const menuReceived = {
    fetchMenu: () => object,
    consumption: [],
    order: (request) => menuReceived.consumption.push(request),
    pay: () => {
      const itens = Object.values(object);
      let valorTotal = 0;

      for (let i = 0; i < itens.length; i += 1) {
        const element = Object.keys(itens[i]);
        const price = Object.values(itens[i]);

        for (let j = 0; j < element.length; j += 1) {
          let itemAtual = element[j];
          const consumed = menuReceived.consumption;
          for (let k = 0; k < consumed.length; k += 1) {
            if (itemAtual === consumed[k]) {
              valorTotal += price[j];
            }
          }
        }
      }

      return parseFloat((valorTotal * 1.1).toFixed(2));
    },
  };

  return menuReceived;
};

const meuRestaurante = createMenu({
  food: { coxinha: 3.9, sopa: 9.9 },
  drink: { agua: 3.9, cerveja: 6.9 },
});
meuRestaurante.order('coxinha');
meuRestaurante.order('agua');
meuRestaurante.order('coxinha');

console.log(typeof meuRestaurante.pay());

module.exports = createMenu;
