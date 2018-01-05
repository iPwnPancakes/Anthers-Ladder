let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');

let router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    res.send('got get!');
})

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
})

router.delete('/message/:id', (req, res) => {
    res.send('Deleted');
});

module.exports = router;