//GRAB THE DEPENDENCIES
const express = require("express");
const bodyParser = require('body-parser');
const app = express();

//CONFIGURE APP
app.use(express.static(__dirname + '/public/dist/public'));
app.use(bodyParser.json());

require('./server/routes')(app);

app.listen(8000, ()=> console.log("listening on port 8000"))