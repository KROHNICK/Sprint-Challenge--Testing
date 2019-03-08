const request = require("supertest");
const server = require("./server");
const Games = require("../database/models/games/gamesModel");

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

  describe("server.js", () => {
    it("testing env", () => {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });

  describe("GET /games", () => {
    it("responds with 200 OK status", async () => {
      const res = await request(server).get("/games");
      expect(res.status).toBe(200);
    });

    it("responds with an array of all games in our database", async () => {
      const cohorts = await Games.getAll();
      const res = await request(server).get("/games");
      expect(res.body).toHaveLength(games.length);
    });
  });
});
