const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.header('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Acceso denegado, token no proporcionado o formato incorrecto' });
    }

    const token = authHeader.split(' ')[1]; // Extrae el token después de "Bearer"

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified; // Agrega la información del usuario al request
        next(); // Continúa con la siguiente función middleware
    } catch (error) {
        res.status(403).json({ error: 'Token inválido o expirado' });
    }
};

module.exports = authenticateToken;
