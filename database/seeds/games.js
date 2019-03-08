exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("games")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("games").insert([
        { id: 1, title: "Monopoly", genre: "Money", releaseYear: "1935" },
        { id: 2, title: "Risk", genre: "Strategy", releaseYear: "1957" },
        { id: 3, title: "Scrabble", genre: "Word Game", releaseYear: "1938" }
      ]);
    });
};
