import bcrypt from 'bcrypt';
import UserModel from '../models/user.model.js';
import { faker } from '@faker-js/faker';

class MockingDAO {
    static async generateMockingUsers(count) {
        const users = [];
        for (let i = 0; i < count; i++) {
            const hashedPassword = await bcrypt.hash('coder123', 10);
            users.push({
                name: faker.person.fullName(),
                email: faker.internet.email(),
                password: hashedPassword,
                role: Math.random() > 0.5 ? 'user' : 'admin',
                pets: []
            });
        }
        return await UserModel.insertMany(users);
    }
}

export default MockingDAO;