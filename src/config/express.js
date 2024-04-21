var express = require('express');

module.exports = function() {
    var app = express();

    app.use(express.static('./public'));
    app.set('views', './views');
    app.set('view engine', 'ejs');

    require('../server/routes/index.server.routes.js')(app);

    return app;
};