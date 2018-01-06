const path = require('path');
const express = require('express');
const routes = require('./routes/api.js');
const app = express();

const PORT = process.env.PORT || 8080;

app.use('/', express.static(path.resolve('dist')));
app.use('/api', routes);

app.listen(PORT, () => {
    console.log('Listening to port: ' + PORT);
});

module.exports = app;