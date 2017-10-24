const models  = require("../models");
const express = require('express');
const router = express.Router();

router.get( "/", function(req, res) {
  console.log("GET", req);
  models.Post.all().then(post => {
    res.json({
      message: "data has been successfully saved",
      data: post
    });
  });
});

router.post("/", function(req, res) {
  models.Post.create({
    title: req.body.title,
    status: req.body.status,
    lat: req.body.lat,
    lon: req.body.lon,
    userId: req.body.userId,
  }).then(function() {
    res.json({
      message: "data has been successfully saved",
      data: req.body
    });
  });
});

router.put("/:id", function(req, res) {
  res.json({
  });
});

module.exports = router;
