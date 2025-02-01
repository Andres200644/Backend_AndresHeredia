import bcrypt from 'bcrypt';
import User from '../models/user.model.js';

class AuthController {
  async register(req, res) {
    try {
      const { username, password, role } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, password: hashedPassword, role });
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Registration failed' });
    }
  }
}

export default new AuthController();
