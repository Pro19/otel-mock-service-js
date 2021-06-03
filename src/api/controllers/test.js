const CHALK = require('chalk');

function getTest(req, res) {
    (async(request, response) => {
        console.log(`[${CHALK.blue('GET')}] Test call received`);
        response.status(200).json({status: 'okay'});
    }) (req, res);
}

function postTest(req, res) {
    (async(request, response) => {
        console.log(`[${CHALK.green('POST')}] Test call received`);
        response.status(201).json({status: 'okay'});
    }) (req, res);
}

function putTest(req, res) {
    (async(request, response) => {
        console.log(`[${CHALK.keyword('orange')('PUT')}] Test call received`);
        response.status(201).json({status: 'okay'});
    }) (req, res);
}

function patchTest(req, res) {
    (async(request, response) => {
        console.log(`[${CHALK.keyword('orange')('PATCH')}] Test call received`);
        response.status(201).json({status: 'okay'});
    }) (req, res);
}

function deleteTest(req, res) {
    (async(request, response) => {
        console.log(`[${CHALK.red('DELETE')}] Test call received`);
        response.status(201).json({status: 'okay'});
    }) (req, res);
}

module.exports = {
    getTest,
    postTest,
    putTest,
    patchTest,
    deleteTest
};