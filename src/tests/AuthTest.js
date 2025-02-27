import request from "supertest";
import app from "../app.js";
import mongoose from "mongoose";
import { expect } from "chai";

describe("Auth API Tests", () => {
  before(async () => {
    await mongoose.connect(process.env.MONGO_URI);
  });

  after(async () => {
    await mongoose.connection.close();
  });

  it("Debe registrar un usuario", async () => {
    const res = await request(app).post("/api/auth/register").send({
      username: "testuser",
      email: "test@example.com",
      password: "password123",
    });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property("message");
  });

  it("Debe iniciar sesión con credenciales válidas", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: "test@example.com",
      password: "password123",
    });
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("token");
  });

  it("Debe rechazar credenciales incorrectas", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: "wrong@example.com",
      password: "wrongpass",
    });
    expect(res.status).to.equal(401);
  });
});
