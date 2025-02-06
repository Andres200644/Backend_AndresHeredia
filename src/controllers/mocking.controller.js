import User from '../models/user.model.js';
import Pet from '../models/pet.model.js';
import { faker } from '@faker-js/faker';

export const generateMockUsers = (req, res) => {
  const count = parseInt(req.query.count) || 50;  // Número de usuarios a generar (por defecto 50)
  const users = Array.from({ length: count }).map(() => ({
    name: faker.name.fullName(),
    email: faker.internet.email(),
  }));
  res.json(users);  // No guarda en la base de datos
};

export const generateMockPets = (req, res) => {
  const count = parseInt(req.query.count) || 50;  // Número de mascotas a generar (por defecto 50)
  const pets = Array.from({ length: count }).map(() => ({
    name: faker.animal.dog(),
    breed: faker.animal.cat(),
  }));
  res.json(pets);  // No guarda en la base de datos
};

export const generateAndSaveData = async (req, res) => {
  const count = parseInt(req.query.count) || 50;  // Número de usuarios a guardar en la base de datos (por defecto 50)
  const users = Array.from({ length: count }).map(() => ({
    name: faker.name.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  }));

  try {
    await User.insertMany(users);
    res.json({ message: `${count} usuarios generados y guardados en la base de datos` });
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar los datos' });
  }
};
