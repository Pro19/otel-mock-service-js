const Logger = require('../../logger/logger');
const logger = new Logger();

const hitMeMessage = "Got hit!";
const returnJson = {
    status: 'got hit'
}

function getHitMe(req, res) {
    (async(request, response) => {
        logger.api("get",hitMeMessage);
        response.status(200).json(returnJson);
    }) (req, res);
}

function postHitMe(req, res) {
    (async(request, response) => {
        logger.api("post",hitMeMessage);
        response.status(201).json(returnJson);
    }) (req, res);
}

function putHitMe(req, res) {
    (async(request, response) => {
        logger.api("put",hitMeMessage);
        response.status(201).json(returnJson);
    }) (req, res);
}

function patchHitMe(req, res) {
    (async(request, response) => {
        logger.api("patch",hitMeMessage);
        response.status(201).json(returnJson);
    }) (req, res);
}

function deleteHitMe(req, res) {
    (async(request, response) => {
        logger.api("delete",hitMeMessage);
        response.status(201).json(returnJson);
    }) (req, res);
}

module.exports = {
    getHitMe,
    postHitMe,
    putHitMe,
    patchHitMe,
    deleteHitMe
};