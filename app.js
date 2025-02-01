import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import exphbs from 'express-handlebars';
import mongoose from 'mongoose';
import path from 'path';
import authRoutes from './src/routes/auth.routes.js';
import productRoutes from './src/routes/product.routes.js';
import cartRoutes from './src/routes/cart.routes.js';
import mocksRoutes from './src/routes/mocks.router.js';

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de Handlebars
app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.resolve('public/views'));

// Archivos estáticos
app.use(express.static(path.resolve('public')));

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error al conectar a MongoDB:', err));

// Rutas
app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.use('/mocks', mocksRoutes);

// Ruta principal
app.get('/', (req, res) => {
  res.render('home');
});

export default app;
