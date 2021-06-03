const CHALK = require('chalk');

function getHitMe(req, res) {
    (async(request, response) => {
        console.log(`[${CHALK.blue('GET')}] Got hit!`);
        response.status(200).json({status: 'got hit'});
    }) (req, res);
}

function postHitMe(req, res) {
    (async(request, response) => {
        console.log(`[${CHALK.green('POST')}] Got hit!`);
        response.status(201).json({status: 'got hit'});
    }) (req, res);
}

function putHitMe(req, res) {
    (async(request, response) => {
        console.log(`[${CHALK.keyword('orange')('PUT')}] Got hit!`);
        response.status(201).json({status: 'got hit'});
    }) (req, res);
}

function patchHitMe(req, res) {
    (async(request, response) => {
        console.log(`[${CHALK.keyword('orange')('PATCH')}] Got hit!`);
        response.status(201).json({status: 'got hit'});
    }) (req, res);
}

function deleteHitMe(req, res) {
    (async(request, response) => {
        console.log(`[${CHALK.red('DELETE')}] Got hit!`);
        response.status(201).json({status: 'got hit'});
    }) (req, res);
}

module.exports = {
    getHitMe,
    postHitMe,
    putHitMe,
    patchHitMe,
    deleteHitMe
};