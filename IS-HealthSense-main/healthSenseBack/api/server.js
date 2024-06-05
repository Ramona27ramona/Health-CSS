const express = require('express');

function startServer() {
    const app = express();
    const port = 8000;
    
    app.use(require('body-parser').json());
    app.use(require('cors')());

    // Require all the routes
    const pacientiRoutes = require('./pacienti');
    const usersRoutes = require('./users');
    const consultatiiRoutes = require('./consultatii');

    // Tell Express to use the routes
    app.use('/', pacientiRoutes);
    app.use('/', usersRoutes);
    app.use('/', consultatiiRoutes);

    // Start the web server
    app.listen(port, () => {
        console.log(`HeathSense back-end listening on port ${port}`)
    });
}

module.exports = {
    startServer,
};
