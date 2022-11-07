const {executarNoBanco} = require('../connection');
const {faker} = require('@faker-js/faker/locale/pt_BR');

let query = 'INSERT INTO produto (nome, categoria, tamanho, valor) VALUES';

for (let i = 1; i <= 50 ; i++) {
    query += `(
        '${faker.commerce.product()}',
        '${faker.commerce.department()}',
        '${faker.random.numeric(1)}',
        '${faker.commerce.price(100, 200)}'
        ),
    `;

    console.log('Inserindo no banco a linha '+1);
}

query = query.substring(0, query.length -1);

executarNoBanco(query);