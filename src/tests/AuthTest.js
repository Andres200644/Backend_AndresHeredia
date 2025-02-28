const request = require('supertest');
const app = require('../src/app'); // Ajusta la ruta según la estructura de tu proyecto

describe('Auth API Tests', () => {
  it('Debe registrar un usuario correctamente', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'testuser',
        password: 'password123',
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('message', 'Usuario registrado exitosamente');
  });

  it('Debe fallar al registrar un usuario con datos incompletos', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        username: '',
      });

    expect(res.statusCode).toBe(400);
  });
});
