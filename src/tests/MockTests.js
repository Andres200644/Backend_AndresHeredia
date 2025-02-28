const request = require('supertest');
const app = require('../src/app');

describe('Mock API Tests', () => {
  it('Debe devolver datos de prueba', async () => {
    const res = await request(app).get('/api/mocks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
