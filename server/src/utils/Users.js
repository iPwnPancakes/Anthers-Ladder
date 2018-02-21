const MongoClient = require('mongodb').MongoClient;
const bcrypt = require('bcrypt');

let db = undefined;

MongoClient.connect('mongodb://localhost:27017/', (err, client) => { 
    if(err) throw Error(err);
    db = client.db('anthersladder');
});

let User = (username, email, password) => {
    let Username = username;
    let Email = email;
    let Password = password;
    
    return {
        JSON: () => { return { username: Username, email: Email, password: Password, messages: [] } }
    }
}

function register(username, password, email, callback) {
    db.collection('users').findOne({ 'username': username })
        .then(found => {
            if(!found) {
                encryptPassword(password, (err, encrypted) => {
                    if(err) throw Error(err);
                    let user = User(username, email, encrypted);
                    db.collection('users').insert(user.JSON(), (err) => {
                        if(err) return callback(Promise.reject('User could not be created'));
                        return callback(null, Promise.resolve(username));
                    });
                });
            } else {
                return callback(Promise.reject('Username already exists!'));
            }
        });
}

function login(username, password, callback) {
    db.collection('users').findOne({ 'username': username })
        .then(foundUser => {
            if(foundUser) {
                return bcrypt.compare(password, foundUser.password);
            } else {
                return false;
            }
        })
        .then(passwordMatch => {
            if(passwordMatch) {
                callback(null, Promise.resolve(username));
            } else {
                callback(Promise.reject('Wrong username or password!'));
            }
        });
}

function encryptPassword(password, callback) {
    bcrypt.genSalt(15)
        .then(salt => {
            return bcrypt.hash(password, salt)
        })
        .then(encrypted => {
            callback(null, encrypted);
        })
        .catch(callback);
}

module.exports = { register, login }
