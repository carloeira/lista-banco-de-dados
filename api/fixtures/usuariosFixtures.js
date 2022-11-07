const {executarNoBanco} = require('../connection');
const {faker} = require('@faker-js/faker/locale/pt_BR');

for (let i = 1; i <= 10 ; i++) {
    let query = `
    INSERT INTO usuarios (nome, cidade, idade)
    VALUES ('${faker.name.fullName()}', '${faker.address.cityName()}', '${faker.random.numeric(2)}')
    `;

    executarNoBanco(query);
    console.log('Inserindo no banco a linha '+1);
}