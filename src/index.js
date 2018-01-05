let path = require('path');
let express = require('express');
let routes = require(path.resolve('src', 'routes', 'api.js'));

const app = express();

const PORT = process.env.PORT || 8080;

app.use('/', express.static(path.resolve('public')));
app.use('/api', routes);

app.listen(PORT, () => {
    console.log('Listening to port: ' + PORT);
});