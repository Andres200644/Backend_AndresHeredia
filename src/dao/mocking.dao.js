const { faker } = require("@faker-js/faker");

class MockingDAO {
    generateUsers() {
        return Array.from({ length: 5 }, () => ({
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        }));
    }

    generatePets() {
        return Array.from({ length: 5 }, () => ({
            name: faker.animal.dog(),
            breed: faker.animal.cat(),
            age: faker.number.int({ min: 1, max: 15 }),
        }));
    }
}

module.exports = new MockingDAO();
