exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ratings")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ratings").insert([
        { id: 1, rating: 1 },
        { id: 2, rating: 2 },
        { id: 3, rating: 3 },
        { id: 4, rating: 4 },
        { id: 5, rating: 5 }
      ]);
    });
};
