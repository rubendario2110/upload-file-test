"use strict";

const request = require("supertest");
const app = require("../app");

describe("test enpoints", () => {
  it("upload", async () => {
    const res = await request(app).post("/upload").send({});
    expect(res.statusCode).toEqual(200);
  });
});
