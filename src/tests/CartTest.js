const request = require('supertest');
const app = require('../src/app');

describe('Cart API Tests', () => {
  it('Debe agregar un producto al carrito', async () => {
    const res = await request(app)
      .post('/api/cart')
      .send({ productId: '123', quantity: 2 });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Producto agregado al carrito');
  });

  it('Debe obtener el carrito', async () => {
    const res = await request(app).get('/api/cart');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
