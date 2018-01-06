const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();
const io = require('socket.io');

// Setting up router middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// // Defining socket.io event handlers
// io.on('connection', (socket) => {
//     socket.emit('news', { hello: 'world' });
//     socket.on('message', (data) => {
//         console.log(data);
//     });
// });

// Defining routes and their logic
router.get('/', (req, res) => {
    res.send('got get!');
});

router.post('/message', (req, res) => {
    console.log(req.body)
    res.send({
        status: 201,
        statusText: 'Created',
        text: req.body.text
    });
});

router.put('/message/:id', (req, res) => {
    res.send('Updated!');
});

router.delete('/message/:id', (req, res) => {
    res.send('Deleted');
});

module.exports = router;