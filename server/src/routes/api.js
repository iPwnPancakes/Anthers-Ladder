const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();

// Setting up router middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Defining routes and their logic
router.get('/', (req, res) => {
    res.send('got get!');
});

router.post('/message', (req, res) => {
    let response = JSON.stringify({
        status: 201,
        statusText: 'Created',
        message: req.body.message
    });
    res.send(response);
});

router.put('/message/:id', (req, res) => {
    res.send('Updated!');
});

router.delete('/message/:id', (req, res) => {
    res.send('Deleted');
});

module.exports = router;