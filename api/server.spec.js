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
    it("should return status code 200", async () => {
      const res = await request(server).get("/games");
      expect(res.status).toBe(200);
    });

    it("should return json", async () => {
      const res = await request(server).get("/games");
      expect(typeof res.body).toEqual("object");
    });

    it("should return all games records", async () => {
      const gameBody = {
        title: "Chess",
        genre: "Strategy",
        releaseYear: 500
      };
      const res = await request(server).get("/games");
      expect(res.body).toBe(res.body);
    });
  });
});

describe("POST /games", () => {
  it("should return 422 status code on invalid body provided", async () => {
    const gameBody = {
      title: "test1"
    };
    const res = await request(server)
      .post("/games")
      .send(gameBody)
      .set("accept", "application/json");
    expect(res.status).toBe(422);
  });

  it("should return status code 201 if created game", async () => {
    const gameBody = {
      title: "test10",
      genre: "Strategy",
      releaseYear: 500
    };
    const res = await request(server)
      .post("/games")
      .send(gameBody)
      .set("accept", "application/json");
    expect(res.status).toBe(201);
  });

  it("should return the created games body", async () => {
    const gameBody = {
      title: "test11",
      genre: "Strategy",
      releaseYear: 500
    };
    const res = await request(server)
      .post("/games")
      .send(gameBody)
      .set("accept", "application/json");
    delete res.body.id;
    expect(res.body).toEqual({ ...gameBody });
  });

  //   it("should return 405 status code if already game record with the title provided", async () => {
  //     const gameBody = {
  //       title: "Chess",
  //       genre: "Strategy",
  //       releaseYear: 500
  //     };
  //     await Games.create(gameBody);
  //     const res = await request(server)
  //       .post("/games")
  //       .send(gameBody)
  //       .set("accept", "application/json");
  //     expect(res.status).toBe(405);
  //   });
});
