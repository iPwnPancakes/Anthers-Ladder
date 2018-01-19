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
    if(req.body && req.body.username && req.body.password && req.body.email) {
        encryptPassword(req.body.password, (err, encrypted) => {
            if(err) throw Error('Error storing user info in db!');
            
            let response = {
                username: req.body.username,
                password: req.body.password,
                email: req.body.email,
                encrypted: encrypted
            }
            
            res.end(JSON.stringify(response));
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

router.delete('/message/:id', (req, res) => {
    res.send('Deleted');
});

// Helper functions
function encryptPassword(password, callback) {
    
    bcrypt.genSalt(15)
        .then(salt => {
            return bcrypt.hash(password, salt)
        })
        .then(encrypted => {
            callback(null, { password, encrypted });
        })
        .catch(callback);
}

module.exports = router;