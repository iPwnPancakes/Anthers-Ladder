const express = require('express');
const bodyParser = require('body-parser');
const Users = require('../utils/Users.js');
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
        Users.register(req.body.username, req.body.password, req.body.email, (err, success) => {
            if(err) {
                return err.catch(rejected => res.end(JSON.stringify({
                    status: 401,
                    statusText: rejected,
                    loggedIn: false
                })));
            } else {
                return success.then(username => res.end(JSON.stringify({
                    status: 200,
                    statusText: 'Ok',
                    loggedIn: username
                })));
            }
        });
    } else {
        res.end(JSON.stringify({
            status: 500,
            statusText: 'Error getting username, password, or email from request body!'
        }));
    }
});

router.post('/login', (req, res) => {
    Users.login(req.body.username, req.body.password, (err, promise) => {
        if(err) {
            err.catch(rejected => res.end(JSON.stringify({
                status: 401,
                statusText: rejected,
                loggedIn: false
            })));
        } else {
            promise.then(username => {
                res.end(JSON.stringify({
                    status: 200,
                    statusText: 'Ok',
                    loggedIn: username
                }));
            });
        }
    })
});

module.exports = router;