// Set up dependencies
const path = require('path');
const routes = require('./routes/api.js');
const express = require('express');

// Set up instances
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const MongoClient = require('mongodb').MongoClient;

// Set up variables
const PORT = process.env.PORT || 8080;
const DBPORT = process.env.DBPORT || 27017;
const localhost = process.env.IP || 'localhost';
const distPath = path.resolve(__dirname, '..', '..', 'browser', 'dist');

// Set up connections
server.listen(PORT, () => {
    console.log('Listening to port: ' + PORT);
});

MongoClient.connect('mongodb://localhost:27017/', (err, database) => {
    if(err) throw Error('Error connecting to database!');

    const db = database.db('anthersladder');
    db.collection('users').count((err, count) => {
        if(err) throw err;
        console.log('Total rows: ' + count);
    });
});

// App logic
io.on('connection', (socket) => {
    socket.on('broadcasted message', (message) => {
        socket.broadcast.emit('broadcasted message', message);
    });
    socket.on('disconnect', () => {
        console.log('disconnect')
    });
});

app.use('/', express.static(distPath));
app.use('/api', routes);
