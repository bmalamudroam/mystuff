var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
var app = express();

app.use(express.static(__dirname + '/../public/dist'));
app.use(bodyParser.json());
app.use(cors());

app.listen(3000, function() {
  console.log('listening on port 3000!');
});