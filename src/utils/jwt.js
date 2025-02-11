import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET || 'defaultSecretKey';

// Generar un token
export const generateToken = (payload, expiresIn = '1h') => {
  return jwt.sign(payload, secretKey, { expiresIn });
};

// Verificar un token
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    throw new Error('Token inválido o expirado');
  }
};

