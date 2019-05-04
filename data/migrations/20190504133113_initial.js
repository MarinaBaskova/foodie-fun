exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("users", field => {
      field.increments();
      field.text("username", 50);
      field.text("password", 50);
      field.text("email", 50);
    })
    .createTable("restaurants", field => {
      field.increments();
      field.text("name", 50);
      field.text("type", 50);
      field.text("location", 100);
      field.integer("phone", 20);
    })
    .createTable("ratings", field => {
      field.increments();
      field.integer("rating");
    })

    .createTable("dishes", field => {
      field.increments();
      field.text("name", 50);
      field.integer("price");
      field
        .text("photo", 128)
        .defaultTo(
          "https://www.adorama.com/alc/wp-content/uploads/2018/02/BBBURGER8-1024x683-825x465.jpg"
        );
      field
        .integer("rating_id")
        .references("id")
        .inTable("ratings")
        .unsigned()
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      field
        .integer("restaurant_id")
        .references("id")
        .inTable("restaurants")
        .unsigned()
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("posts", field => {
      field.increments();
      field.text("content", 500);
      field.timestamps(true, true);
      field.integer("wait_time");
      field.text("time_of_day_visited", 32);
      field
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      field
        .integer("dish_id")
        .unsigned()
        .references("id")
        .inTable("dishes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("posts")
    .dropTableIfExists("dishes")
    .dropTableIfExists("ratings")
    .dropTableIfExists("restaurants")
    .dropTableIfExists("users");
};
