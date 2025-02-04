// src/controllers/mocking.controller.js
import faker from 'faker';

export const generateMockProducts = (req, res) => {
    try {
        const mockProducts = Array.from({ length: 10 }).map(() => ({
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            description: faker.lorem.sentence(),
            category: faker.commerce.department(),
            stock: faker.datatype.number({ min: 1, max: 100 }),
            image: faker.image.imageUrl()
        }));
        
        res.json(mockProducts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate mock products' });
    }
};
