const path = require('path');
const routes = require('./routes/api.js');
const express = require('express');
const mongo = require('mongodb').MongoClient;

// Set up instances
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// Set up variables
const PORT = process.env.PORT || 8080;
const DBPORT = process.env.DBPORT || 27017;
const localhost = process.env.IP || 'localhost';
const distPath = path.resolve(__dirname, '..', '..', 'browser', 'dist');

// App logic
server.listen(PORT, () => {
    console.log('Listening to port: ' + PORT);
});

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
