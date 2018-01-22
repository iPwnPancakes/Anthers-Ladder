const MongoClient = require('mongodb').MongoClient;
const DBPORT = process.env.DBPORT || 27017;

let db = undefined;

function makeConnection(callback) {
    MongoClient.connect('mongodb://localhost:27017/', (err, database) => {
        db = database.db('anthersladder');
        return callback(err);
    });
}

function getConnection() { return db }

function closeConnection() { db.close() }

function test() { console.log(db) }

module.exports = { makeConnection, getConnection,closeConnection, test }