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
    res.send('whoopty');
  }
}