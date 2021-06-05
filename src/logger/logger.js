const CHALK = require('chalk');

class Logger{
    info(message) {
        return console.info(`${CHALK.yellow(">")} ${message}`);
    }

    error(message) {
        return console.error(`${CHALK.red(">")} ${message}`);
    }
    
    warn(message) {
        return console.warn(`${CHALK.redBright(">")} ${message}`);
    }

    api(methodType, message) {
        if("get"===methodType) {
            return console.info(`[${CHALK.blue('GET')}] ${message}`);
        }
        if("post"===methodType) {
            return console.info(`[${CHALK.green('POST')}] ${message}`);
        }
        if("patch"===methodType) {
            return console.info(`[${CHALK.keyword('orange')('PATCH')}] ${message}`);
        }
        if("put"===methodType) {
            return console.info(`[${CHALK.keyword('orange')('PUT')}] ${message}`);
        }
        if("delete"===methodType) {
            return console.info(`[${CHALK.red('DELETE')}] ${message}`);
        }
    }
}

module.exports = Logger;