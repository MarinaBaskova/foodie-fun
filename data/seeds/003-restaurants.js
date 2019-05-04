exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("restaurants")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("restaurants").insert([
        {
          id: 1,
          name: "chipotle",
          type: "mexican",
          location: "123 nowhere rd",
          phone: "111"
        },
        {
          id: 2,
          name: "starbucks",
          type: "coffee",
          location: "456 whatsup rd",
          phone: "222"
        },
        {
          id: 3,
          name: "taco bell",
          type: "mexican",
          location: "789 imhungry rd",
          phone: "333"
        }
      ]);
    });
};
