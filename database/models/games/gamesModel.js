const db = require("../../db");

const insert = async games => {
  const [id] = await db("games").insert(game, "id");
  const newCohort = await db("games")
    .where({ id })
    .first();
  return newGame;
};

const getAll = async filter => {
  let games = [];
  if (filter) {
    games = await db("games").where(filter);
  } else {
    games = await db("games");
  }
  return games;
};

const getOne = async filter => {
  const game = await db("games")
    .where(filter)
    .first();
  return game;
};

const update = async (id, props) => {
  const update = await db("games")
    .where({ id })
    .update(props, "id");
  const updatedGame = await db("games")
    .where({ id })
    .first();
  return updatedGames;
};

const deleteById = async id => {
  const deleted = await db("games")
    .where({ id })
    .del();
  return deleted;
};

module.exports = {
  insert,
  getAll,
  getOne,
  update,
  deleteById
};
