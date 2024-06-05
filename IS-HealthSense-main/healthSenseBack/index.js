require('dotenv').config();

const { connectDB } = require('./services/persistenceService');
const { startServer } = require('./api/server');

async function start() {
    await connectDB();
    await startServer();
}

start();
