import User from '../models/user.model.js';
import Pet from '../models/pet.model.js';
import { faker } from '@faker-js/faker';

export const generateMockUsers = (req, res) => {
  const users = Array.from({ length: 10 }).map(() => ({
    name: faker.name.fullName(),
    email: faker.internet.email(),
  }));
  res.json(users); // No guarda en la base de datos
};

export const generateMockPets = (req, res) => {
  const pets = Array.from({ length: 10 }).map(() => ({
    name: faker.animal.dog(),
    breed: faker.animal.cat(),
  }));
  res.json(pets); // No guarda en la base de datos
};

export const generateAndSaveData = async (req, res) => {
  const users = Array.from({ length: 5 }).map(() => ({
    name: faker.name.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  }));

  await User.insertMany(users);
  res.json({ message: 'Datos generados y guardados en la base de datos' });
};
