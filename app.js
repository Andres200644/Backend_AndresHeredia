import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { engine } from 'express-handlebars'; // Importar el motor de Handlebars 

// Importar rutas
import authRoutes from './src/routes/auth.routes.js';
import productRoutes from './src/routes/product.routes.js';
import cartRoutes from './src/routes/cart.routes.js';
import mockRoutes from './src/routes/mocks.router.js'; // Nueva ruta

// Configuración del entorno
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de Handlebars
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

// Configurar las rutas de las vistas
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('views', path.join(__dirname, 'public/views'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('✅ Conectado a MongoDB'))
.catch(err => console.error('❌ Error al conectar a MongoDB:', err));

// Configuración de rutas
app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.use('/api/mocks', mockRoutes);  // Ruta para mock data

// Ruta principal
app.get('/', (req, res) => {
    res.render('home');
});

// Ruta para generar usuarios y mascotas con cantidad dinámica
app.get('/api/mocks/users', (req, res) => {
    const count = parseInt(req.query.count) || 50;  // Número de usuarios a generar
    const users = Array.from({ length: count }).map(() => ({
        name: faker.name.fullName(),
        email: faker.internet.email(),
    }));
    res.json(users);
});

app.get('/api/mocks/pets', (req, res) => {
    const count = parseInt(req.query.count) || 50;  // Número de mascotas a generar
    const pets = Array.from({ length: count }).map(() => ({
        name: faker.animal.dog(),
        breed: faker.animal.cat(),
    }));
    res.json(pets);
});

export default app;
