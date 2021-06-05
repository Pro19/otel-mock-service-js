'use strict';

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const CHALK = require('chalk');
const Logger = require('./logger/logger');
const logger = new Logger();

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
        logger.warn(`Received terminate signal.`)
        logger.warn(`Application will gracefully shutdown.`);
        process.exit();
    }

    stopService() {
        process.on('SIGTERM', this.shutdownService);
        process.on('SIGINT',this.shutdownService);
    }

    run(port) {
        this.expressApp.set('port', port);
        this.server = http.createServer(this.expressApp);
        logger.info(`Starting server on port ${CHALK.cyan(port)}.`);
        this.expressAppHandler = this.server.listen(port);
        logger.info(`Server started.`);
        logger.info(`Access swagger from here: ${CHALK.green("http://localhost:1234")} OR ${CHALK.green("http://localhost:1234/api/mockservice")}`)
    }
}

module.exports = Application;