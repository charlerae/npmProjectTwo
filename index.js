const faker = require('faker');


for (let i = 0; i < 10; i++) {
    console.log(faker.fake('{{name.firstName}} {{name.lastName}}'));
}
