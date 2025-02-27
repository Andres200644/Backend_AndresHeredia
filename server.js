const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth.routes');
const authenticateToken = require('./middlewares/auth.middleware');

dotenv.config(); // Carga las variables de entorno

const app = express();
const PORT = process.env.PORT || 8080; // Usa 8080 por defecto si no hay un puerto en el .env

// Middleware para analizar JSON
app.use(express.json());

// Rutas de autenticación
app.use('/api/auth', authRoutes);

// Ruta protegida de prueba (requiere autenticación)
app.get('/api/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Acceso permitido', user: req.user });
});

// Conexión a la base de datos
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('🟢 Conectado a MongoDB');
    app.listen(PORT, () => {
        console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
})
.catch(err => {
    console.error('🔴 Error al conectar a MongoDB:', err);
});
