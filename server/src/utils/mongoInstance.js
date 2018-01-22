const MongoClient = require('mongodb').MongoClient;
const DBPORT = process.env.DBPORT || 27017;

let db = undefined;

const makeConnection = (callback) => {
    MongoClient.connect('mongodb://localhost:27017/', (err, database) => {
        db = database.db('anthersladder');
        return callback(err);
    });
}

const getConnection = () => db;

const closeConnection = () => db.close();

const test = () => console.log(db);

module.exports = { makeConnection, getConnection,closeConnection, test }