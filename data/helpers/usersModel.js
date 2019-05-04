const Db = require("../data/dbConfig");
module.exports = {
  getUserPosts
};

function getUserPosts(id) {
  return Db("posts").where({ user_id: id });
}
