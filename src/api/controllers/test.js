const Logger = require('../../logger/logger');
const logger = new Logger();

const receiveMessage = "Test call received";
const returnJson = {
    status: 'okay'
}

function getTest(req, res) {
    (async(request, response) => {
        logger.api("get",receiveMessage);
        response.status(200).json(returnJson);
    }) (req, res);
}

function postTest(req, res) {
    (async(request, response) => {
        logger.api("post",receiveMessage);
        response.status(201).json(returnJson);
    }) (req, res);
}

function putTest(req, res) {
    (async(request, response) => {
        logger.api("put",receiveMessage);
        response.status(201).json(returnJson);
    }) (req, res);
}

function patchTest(req, res) {
    (async(request, response) => {
        logger.api("patch",receiveMessage);
        response.status(201).json(returnJson);
    }) (req, res);
}

function deleteTest(req, res) {
    (async(request, response) => {
        logger.api("delete",receiveMessage);
        response.status(201).json(returnJson);
    }) (req, res);
}

module.exports = {
    getTest,
    postTest,
    putTest,
    patchTest,
    deleteTest
};