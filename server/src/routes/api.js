const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const router = express.Router();

// Setting up router middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Defining routes and their logic
router.get('/', (req, res) => {
    res.send('got get!');
});

router.post('/register', (req, res) => {
    if(req.body && req.body.username && req.body.password) {
        storeUser(req.body.username, req.body.password, (err, success) => {
            if(err) throw Error('Error storing user info in db!');
            res.end(JSON.stringify(success));
        });
    } else {
        res.end(JSON.stringify({
            status: 500,
            statusText: 'Error getting username or password from request body!'
        }));
    }
})

router.post('/login', (req, res) => {
    // Lookup by username
    // bcrypt.compare given password with encrypted password from db
});

router.put('/message/:id', (req, res) => {
    res.send('Updated!');
});

router.delete('/message/:id', (req, res) => {
    res.send('Deleted');
});

// Helper functions
function storeUser(username, password, callback) {
    
    bcrypt.genSalt(15)
        .then(salt => {
            return bcrypt.hash(password, salt)
        })
        .then(encrypted => {
            // Store encrypted into db
        })
        .then(console.log)
        .catch(callback);
}

module.exports = router;