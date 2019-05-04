exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("posts")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("posts").insert([
        {
          id: 1,
          content: "blahblahblob",
          wait_time: 10,
          time_of_day_visited: "afternoon",
          user_id: 1,
          dish_id: 1
        },
        {
          id: 2,
          content: "blahblahblob",
          wait_time: 10,
          time_of_day_visited: "afternoon",
          user_id: 2,
          dish_id: 2
        },
        {
          id: 3,
          content: "blahblahblob",
          wait_time: 10,
          time_of_day_visited: "afternoon",
          user_id: 3,
          dish_id: 3
        }
      ]);
    });
};
