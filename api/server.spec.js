const request = require("supertest");
const server = require("./server");

describe("server.js", () => {
  describe("GET /", () => {
    it("responds with 200 OK status", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });

    it("responds with 'Server running.' ", async () => {
      const res = await request(server).get("/");
      expect(res.text).toBe("Server running.");
    });
  });
});
