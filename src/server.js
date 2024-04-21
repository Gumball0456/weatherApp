var express = require('./config/express');
var app = express();
var port = 3000;

app.listen(port);

module.exports = app;

console.log(`Server running on http//lolcahost:${port}/`);