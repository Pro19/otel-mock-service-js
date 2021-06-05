const Logger = require('../../logger/logger');
const logger = new Logger();

function getHealth(req, res) {
    (async(request, response) => {
        logger.api("get","Healthy!");
        response.status(200).json({status: 'OK'});
    }) (req, res);
}

module.exports = {
    getHealth
};
