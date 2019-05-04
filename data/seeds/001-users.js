exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "ben", password: "123", email: "123@gmail.com" },
        { id: 2, username: "nick", password: "123", email: "456@gmail.com" },
        { id: 3, username: "chipmunk", password: "123", email: "789@gmail.com" }
      ]);
    });
};
