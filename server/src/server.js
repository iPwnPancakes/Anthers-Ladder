const path = require('path');
const routes = require('./routes/api.js');
const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const distPath = path.resolve(__dirname, '..', '..', 'browser', 'dist');

server.listen(process.env.PORT || 8080, () => {
    console.log('Listening to port: ' + process.env.PORT || 8080);
});

io.on('connection', (socket) => {
    
    socket.on('broadcasted message', (message) => {
        socket.broadcast.emit('broadcasted message', message);
    });

    socket.on('disconnect', () => {
        io.emit('user disconnected');
        console.log('disconnect')
    });

});

app.use('/', express.static(distPath));
app.use('/api', routes);
