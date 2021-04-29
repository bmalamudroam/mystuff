var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
var app = express();
const controller = require('./controller.js');

app.use(express.static(__dirname + '/../public/dist'));
app.use(bodyParser.json());
app.use(cors());

app.post('/api/todo', controller.addTodo);
app.get('/api/todos', controller.getTodos);
app.delete('/api/todo', controller.removeTodo);

app.listen(3000, function() {
  console.log('listening on port 3000!');
});