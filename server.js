const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = require("./app");
const connectDB = require("./src/config/db");

dotenv.config();

const PORT = process.env.PORT || 5000;

// Conectar a la base de datos
connectDB();

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(app);

server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});