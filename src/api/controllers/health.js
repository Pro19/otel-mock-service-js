function getHealth(req, res) {
    (async(request, response) => {
        console.log(`[${CHALK.blue('GET')}] Healthy!`);
        response.status(200).json({status: 'OK'});
    }) (req, res);
}

module.exports = {
    getHealth
};
