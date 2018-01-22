const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const MongoClient = require('mongodb').MongoClient;

const router = express.Router();
let db = undefined;

// Setting up router middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect('mongodb://localhost:27017/', (err, client) => { db = client.db('anthersladder') });

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
            
            db.collection('users').insert({
                username: req.body.username,
                password: req.body.password,
                email: req.body.email,
                encrypted: encrypted
            }, (err, result) => {
                if(err) throw Error(err);
                console.log('User ' + req.body.username + ' registered!');
            });
        });
    } else {
        res.end(JSON.stringify({
            status: 500,
            statusText: 'Error getting username, password, or email from request body!'
        }));
    }
})

router.post('/login', (req, res) => {
    db.collection('users').findOne({
        'username': req.body.username
    }).then((found) => {
        if(found) {
            bcrypt.compare(req.body.password, found.password)
            .then((result) => {
                if(result === true) {
                    res.send(JSON.stringify({ 
                        status: 200, 
                        statusText: 'Found',
                        username: req.body.username
                    }));
                }
            })
        } else {
            res.send(JSON.stringify({
                status: 403,
                statusText: 'Username/Password Not Found'
            }));
        }
    })
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