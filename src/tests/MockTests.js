import request from "supertest";
import app from "../app.js";
import { expect } from "chai";

describe("Mocks API Tests", () => {
  it("Debe obtener productos simulados", async () => {
    const res = await request(app).get("/api/mocks");
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });

  it("Debe obtener una cantidad específica de productos simulados", async () => {
    const res = await request(app).get("/api/mocks?count=5");
    expect(res.status).to.equal(200);
    expect(res.body.length).to.equal(5);
  });
});
