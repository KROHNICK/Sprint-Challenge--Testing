const express = require("express");
const server = express();
const cors = require("cors");
const helmet = require("helmet");
const Cohorts = require("../database/models/games/gamesModel");

server.use(express.json());
server.use(cors());
server.use(helmet());

server.get("/", (req, res) => {
  res.send("Server running.");
});

server.get("/games", async (req, res) => {
  try {
    const games = await Games.getAll();
    return res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ error: "Internal error..." });
  }
});

module.exports = server;
