'use strict';

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const CHALK = require('chalk');

class Application {
    constructor() {
        this.expressApp = express();
        this.server = null;
        this.expressAppHandler = null;
        this.swaggerHandler = null;
    }

    initMiddlewares() {
        this.stopService();
        this.swaggerHandler = require('./middlewares/swagger-middleware');
        this.expressApp.use(bodyParser.json({type:'application/json'}));
        return this.swaggerHandler.initSwagger('http://localhost:1234', __dirname, this.expressApp, express);
    }

    shutdownService() {
        console.log(CHALK.red(`${CHALK.yellow(">")} Stopping server.`));
        process.exit();
    }

    stopService() {
        process.on('SIGTERM', this.shutdownService);
        process.on('SIGINT',this.shutdownService);
    }

    run(port) {
        this.expressApp.set('port', port);
        this.server = http.createServer(this.expressApp);
        console.log(`${CHALK.yellow(">")} Starting server on port ${CHALK.cyan(port)}`);
        this.expressAppHandler = this.server.listen(port);
        console.log(`${CHALK.yellow(">")} Server started.`);
        console.log(`${CHALK.yellow(">")} Access swagger from here: ${CHALK.green("http://localhost:1234")} OR ${CHALK.green("http://localhost:1234/api/mockservice")}`);
    }
}

module.exports = Application;