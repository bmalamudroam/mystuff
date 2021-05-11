//import models
const model = require('../database/model.js');
//export function
module.exports = {
  addTodo: (req, res) => {
    let { task } = req.body;
    model.addTodo(task, (err, result) => {
      res.send(result.rows[0].task);
    })
  },

  getTodos: (req, res) => {
    model.getTodos((err, result) => {
      res.send(result.rows);
    })
  },

  removeTodo: (req, res) => {
    let { id } = req.params;
    model.removeTodo(id, (err, result) => {
      res.send(result);
    })
  }
}