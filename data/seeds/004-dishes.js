exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("dishes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("dishes").insert([
        { id: 1, name: "burrito", price: 5, rating_id: 3, restaurant_id: 1 },
        { id: 2, name: "mocha", price: 5, rating_id: 4, restaurant_id: 2 },
        { id: 3, name: "taco", price: 5, rating_id: 5, restaurant_id: 3 }
      ]);
    });
};
