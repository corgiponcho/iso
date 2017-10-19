var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.Post.all().then(post => {
    res.json({
    	message: 'data has been successfully saved',
    	data: post
    });
  });
});

router.post('/create', function(req, res) {
  models.Post.create({
    title: req.body.title,
    status: req.body.status,
    lat: req.body.lat,
    lon: req.body.lon,
    UserId: req.body.UserId,
    creator_id: req.body.creator_id
  }).then(function() {
    res.json({
    	message: 'data has been successfully saved',
    	data: req.body
    });
  });
});

module.exports = router;