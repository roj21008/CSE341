var express = require('express');
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());




app.use('/index', require('./routes/index'));

app.listen(8080);