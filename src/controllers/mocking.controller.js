import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';
import User from '../models/user.model.js';
import Pet from '../models/pet.model.js';

/**
 * Genera usuarios simulados con datos aleatorios.
 * @param {number} count - Cantidad de usuarios a generar.
 * @returns {Array} - Lista de usuarios generados.
 */
const generateMockUsers = (count) => {
    const users = [];
    for (let i = 0; i < count; i++) {
        users.push({
            name: faker.person.firstName(),
            email: faker.internet.email(),
            password: bcrypt.hashSync('coder123', 10), // Contraseña encriptada
            role: faker.helpers.arrayElement(['user', 'admin']),
            pets: []
        });
    }
    return users;
};

/**
 * Genera mascotas simuladas con datos aleatorios.
 * @param {number} count - Cantidad de mascotas a generar.
 * @returns {Array} - Lista de mascotas generadas.
 */
const generateMockPets = (count) => {
    const pets = [];
    for (let i = 0; i < count; i++) {
        pets.push({
            name: faker.animal.cat(),
            species: faker.helpers.arrayElement(['dog', 'cat', 'bird', 'rabbit']),
            age: faker.number.int({ min: 1, max: 15 })
        });
    }
    return pets;
};

/**
 * Endpoint para generar y obtener usuarios simulados.
 * @param {Request} req
 * @param {Response} res
 */
export const getMockUsers = async (req, res) => {
    try {
        const users = generateMockUsers(50);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error al generar usuarios simulados', error });
    }
};

/**
 * Endpoint para generar y obtener mascotas simuladas.
 * @param {Request} req
 * @param {Response} res
 */
export const getMockPets = async (req, res) => {
    try {
        const pets = generateMockPets(50);
        res.status(200).json(pets);
    } catch (error) {
        res.status(500).json({ message: 'Error al generar mascotas simuladas', error });
    }
};

/**
 * Endpoint para generar e insertar datos simulados en la base de datos.
 * @param {Request} req
 * @param {Response} res
 */
export const generateAndSaveData = async (req, res) => {
    try {
        const { users, pets } = req.body;

        // Validar que los parámetros sean números positivos
        if (isNaN(users) || isNaN(pets) || users < 0 || pets < 0) {
            return res.status(400).json({ message: 'Los valores de users y pets deben ser números positivos' });
        }

        const mockUsers = generateMockUsers(parseInt(users, 10));
        const mockPets = generateMockPets(parseInt(pets, 10));

        await User.insertMany(mockUsers);
        await Pet.insertMany(mockPets);

        res.status(201).json({ message: 'Datos simulados insertados correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al generar e insertar datos simulados', error });
    }
};
