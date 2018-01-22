// Set up dependencies
const path = require('path');
const routes = require('./routes/api.js');
const express = require('express');

// Set up instances
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const MongoClient = require('mongodb').MongoClient;

// Set up environment variables
const PORT = process.env.PORT || 8080;
const DBPORT = process.env.DBPORT || 27017;
const localhost = process.env.IP || 'localhost';
const distPath = path.resolve(__dirname, '..', '..', 'browser', 'dist');

// Set up local variables
let db = undefined;

// Set up connections
server.listen(PORT, () => {
    console.log('Listening to port: ' + PORT);
});

MongoClient.connect('mongodb://localhost:27017/', (err, database) => {
    if(err) throw Error('Error connecting to database!');
    db = database.db('anthersladder');
});

// App logic
io.on('connection', (socket) => {
    socket.on('broadcasted message', (message) => {
        socket.broadcast.emit('broadcasted message', message);
    });
});

app.use('/', express.static(distPath));
app.use('/api', routes);
