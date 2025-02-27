import { faker } from "@faker-js/faker";

// Generar productos falsos
const generateMockProducts = (count = 10) => {
  return Array.from({ length: count }, () => ({
    id: faker.database.mongodbObjectId(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price({ min: 10, max: 500, dec: 2 }),
    category: faker.commerce.department(),
    stock: faker.number.int({ min: 0, max: 100 }),
    image: faker.image.urlPicsumPhotos(),
  }));
};

// Controlador para obtener productos mock
export const getMockProducts = (req, res) => {
  const { count } = req.query;
  const products = generateMockProducts(count ? parseInt(count, 10) : 10);
  res.json(products);
};
