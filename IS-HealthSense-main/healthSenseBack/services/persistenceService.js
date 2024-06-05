const { MongoClient } = require("mongodb");

const CONNECTION_STRING = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@healthsense.t8ktyl2.mongodb.net/?retryWrites=true&w=majority&appName=HealthSense`;

let currentDB = null;

async function connectDB() {
    try {
        const client = new MongoClient(CONNECTION_STRING);

        await client.connect();
        console.log("Successfully connected to Atlas");

        const db = client.db('HealthSense');
        currentDB = db;
    } catch (err) {
        console.log(err.stack);
        throw err;
    }
}

// Database is a singleton, so we need a way to retrieve it
function getDatabase() {
    if(!currentDB) {
        throw new Error('Database not initialized!');
    }

    return currentDB;
}

module.exports = {
    connectDB,
    getDatabase
};
