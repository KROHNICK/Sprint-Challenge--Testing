const express = require("express");
const server = express();
const cors = require("cors");
const helmet = require("helmet");
const Games = require("../database/models/games/gamesModel");

server.use(express.json());
server.use(cors());
server.use(helmet());

server.get("/", (req, res) => {
  res.send("Server running.");
});

server.get("/games", async (req, res) => {
  try {
    const games = await Games.getAll();
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ error: "Internal error." });
  }
});

server.post("/games", async (req, res) => {
  const { title, genre, releaseYear } = req.body;
  if (!title || !genre || !releaseYear)
    return res
      .status(422)
      .json({ error: "You must provide a valid game's properties." });

  const foundGame = await Games.getOne({ title });
  if (foundGame) {
    return res
      .status(405)
      .json({ error: "A game with that title already exists." });
  }

  try {
    const newGame = await Games.create(req.body);
    res.status(201).json(newGame);
  } catch (error) {
    res.status(500).json({ error: "Internal error." });
  }
});

module.exports = server;
