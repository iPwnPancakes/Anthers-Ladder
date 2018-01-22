// Set up dependencies
const path = require('path');
const routes = require('./routes/api.js');
const express = require('express');

// Set up instances
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// Set up variables
const PORT = process.env.PORT || 8080;
const distPath = path.resolve(__dirname, '..', '..', 'browser', 'dist');

// Set up connections
server.listen(PORT, () => {
    console.log('Listening to port: ' + PORT);
});

const mongo = require('./utils/mongoInstance.js').makeConnection((err) => { 
    if(err) throw Error(err) 
    // Put initialization stuff here
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
