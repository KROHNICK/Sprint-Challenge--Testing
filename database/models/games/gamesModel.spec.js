const db = require("../../db");
const Games = require("./gamesModel");

describe("Games Model", () => {
  afterEach(async () => {
    await db("games").truncate();
  });
  describe("create()", () => {
    it("Creates a Game record in the games table based on object provided, and returns it.", async () => {
      const newGame = {
        title: "Chess",
        genre: "Strategy",
        releaseYear: 500
      };
      const created = await Games.create(newGame);
      expect(created.title).toBe("Chess");
      expect(created.genre).toBe("Strategy");
      expect(created.releaseYear).toBe(500);
    });
  });

  describe("getAll()", () => {
    it("Returns all records in games table", async () => {
      const newGame = {
        title: "Chess",
        genre: "Strategy",
        releaseYear: 500
      };
      const created = await Games.create(newGame);
      const allGames = await Games.getAll();
      expect(allGames).toHaveLength(1);
    });
  });

  describe("getOne()", async () => {
    it("Returns game record based on provider filter", async () => {
      const newGame = {
        title: "Chess",
        genre: "Strategy",
        releaseYear: 500
      };
      const created = await Games.create(newGame);
      const found = await Games.getOne({ title: created.title });
      expect(typeof found).toEqual("object");
      expect(found).toEqual(created);
    });

    it("returns null if game record is not found", async () => {
      const found = await Games.getOne({ id: 0 });
      expect(found).toBe(null);
    });
  });

  describe("deleteOne()", async () => {
    it("Returns 1 if successfully deleted record", async () => {
      const newGame = {
        title: "Chess",
        genre: "Strategy",
        releaseYear: 500
      };
      const created = await Games.create(newGame);
      const deleted = await Games.deleteOne({ id: created.id });
      expect(deleted).toBe(1);
    });
  });
});
