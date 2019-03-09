const db = require("../../db");

const create = async newGame => {
  const [id] = await db("games").insert(newGame, "id");
  const createdGame = await db("games")
    .where({ id })
    .first();
  return createdGame;
};

const getAll = async () => {
  const allGames = await db("games");
  return allGames;
};

const getOne = async filter => {
  const foundGame = await db("games")
    .where(filter)
    .first();
  if (!foundGame) return null;
  return foundGame;
};

const deleteOne = async filter => {
  const deleteGame = await db("games")
    .where(filter)
    .del();
  return deleteGame;
};

module.exports = {
  create,
  getAll,
  getOne,
  deleteOne
};
