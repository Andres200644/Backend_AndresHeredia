import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import mocksRouter from './routes/mocks.router.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Rutas
app.use('/api/mocks', mocksRouter);

export default app;