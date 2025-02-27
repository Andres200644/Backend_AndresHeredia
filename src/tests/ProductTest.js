import request from "supertest";
import app from "../app.js";
import { expect } from "chai";

describe("Products API Tests", () => {
  it("Debe obtener la lista de productos", async () => {
    const res = await request(app).get("/api/products");
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });

  it("Debe agregar un producto (requiere autenticación)", async () => {
    const token = "TOKEN_DE_PRUEBA"; // Reemplazar con un token válido

    const res = await request(app)
      .post("/api/products")
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Producto de prueba",
        description: "Descripción del producto",
        price: 99.99,
        stock: 10,
        category: "Deportes",
      });

    expect(res.status).to.equal(201);
    expect(res.body).to.have.property("name");
  });
});
