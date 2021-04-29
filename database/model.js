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
  }
}