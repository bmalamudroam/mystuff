const { client } = require('./index.js');

module.exports = {
  addTodo: (task, callback) => {
    client.query('INSERT INTO todos(task) VALUES ($1) RETURNING *', [task], (err, result) => {
      if (err) {
        console.log(`Error adding todo to database: ${err}`);
        return;
      }
      callback(err, result);
    });
  },

  getTodos: (callback) => {
    client.query('SELECT * FROM todos', (err, result) => {
      if (err) {
        console.log(`Error getting todos from database: ${err}`);
        return;
      }
      callback(err, result);
    });
  },

  removeTodo: (id, callback) => {
    client.query('DELETE FROM todos WHERE id = $1', [id], (err, result) => {
      if (err) {
        console.log(`Error deleting todo from database: ${err}`);
        return;
      }
      callback(err, result);
    });
  }
}