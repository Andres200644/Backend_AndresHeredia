const { faker } = require("@faker-js/faker");

const generateMockData = (req, res) => {
    const mockUsers = Array.from({ length: 5 }, () => ({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    }));

    const mockPets = Array.from({ length: 5 }, () => ({
        name: faker.animal.dog(),
        breed: faker.animal.cat(),
        age: faker.number.int({ min: 1, max: 15 }),
    }));

    res.json({ users: mockUsers, pets: mockPets });
};

module.exports = { generateMockData };
