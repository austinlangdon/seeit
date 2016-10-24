var mongoose = require('mongoose');
var router = require('express').Router();

router.get('/', function(req, res, next) {
    res.json({message: 'Hurray!'});
});

module.exports = router;