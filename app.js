const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const routes = require('./routes/index')

let app = express();

app.use(compression());
app.use(helmet());

app.use(express.json());
app.use('/', routes);

app.listen(3000, function() {
    console.log('Express server listening on port ' + 3000);
})