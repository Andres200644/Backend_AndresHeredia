import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import mocksRouter from "./routes/mocks.router.js";
import { config } from "dotenv";

// Cargar variables de entorno
config();

// Crear la aplicación Express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Configurar express-session con MongoStore
app.use(
  session({
    secret: process.env.SESSION_SECRET || "runwaystyle_secret",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      ttl: 60 * 60 * 24, // 1 día de duración
    }),
    cookie: { secure: false, httpOnly: true },
  })
);

// Swagger (Documentación de API)
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "RunwayStyle API",
      version: "1.0.0",
      description: "Documentación de la API para RunwayStyle",
    },
  },
  apis: ["./routes/*.js"],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/mocks", mocksRouter);

// Conectar a la base de datos
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("🟢 Conectado a MongoDB"))
  .catch((error) => console.error("🔴 Error al conectar a MongoDB:", error));

export default app;
