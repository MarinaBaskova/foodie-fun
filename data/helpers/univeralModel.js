const Db = require("../dbConfig");
module.exports = tableName => {
  return {
    get: () => {
      return Db(tableName);
    },
    getById: id => {
      return Db(tableName)
        .where({ id })
        .first();
    },
    add: newItem => {
      return Db(tableName)
        .insert(newItem)
        .then(ids => getById(ids[0]));
    },
    edit: (id, changes) => {
      return Db(tableName)
        .where({ id })
        .update(changes)
        .then(count => getById(id));
    },
    remove: id => {
      return Db(tableName)
        .where({ id })
        .then(newItem =>
          Db(tableName)
            .where({ id })
            .del()
        );
    }
  };
};
