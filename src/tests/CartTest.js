import request from "supertest";
import app from "../app.js";
import { expect } from "chai";

describe("Cart API Tests", () => {
  it("Debe obtener el carrito del usuario", async () => {
    const token = "TOKEN_DE_PRUEBA";

    const res = await request(app)
      .get("/api/cart")
      .set("Authorization", `Bearer ${token}`);

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("items");
  });

  it("Debe agregar un producto al carrito", async () => {
    const token = "TOKEN_DE_PRUEBA";
    const res = await request(app)
      .post("/api/cart")
      .set("Authorization", `Bearer ${token}`)
      .send({
        productId: "PRODUCT_ID_DE_PRUEBA",
        quantity: 2,
      });

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("message");
  });
});
