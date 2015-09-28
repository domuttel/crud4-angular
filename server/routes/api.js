var express = require('express');
var router = express.Router();
var Tatum = require('../models/tatum.js');

//GET all tatums
router.get('/tatums', function(req, res, next){
  Tatum.findQ()
    .then(function(results){
      res.json(results);
    }).catch(function(results){
      res.json({'message': results});
    }).done();

});

//POST all tatums
router.post('/tatums', function(req, res, next){
  newTatum = new Tatum({
    movie:req.body.movie,
    year: req.body.year,
    chickflick: req.body.chickflick
  }).saveQ()
  .then(function(results){
    res.json(results);
  }).catch(function(results){
    res.json({'message': results});
  }).done();
});

//GET single tatum
router.get('/tatum/:id', function(req, res, next){
  Tatum.findByIdQ(req.params.id)
  .then(function(results){
    res.json(results);
  }).catch(function(results){
    res.json({'message': results});
  }).done();
});

//PUT single tatum
router.put('/tatum/:id', function(req, res, next){
  var update = {
    movie: req.body.movie,
    year: req.body.year,
    chickflick: req.body.chickflick
  };
  Tatum.findByIdAndUpdateQ(req.params.id, update)
  .then(function(results){
    res.json(results);
  }).catch(function(results){
    res.json({'message': results});
  }).done();
});

//DELETE single tatum
router.delete('/tatum/:id', function(req, res, next){
  Tatum.findByIdAndRemoveQ(req.params.id)
  .then(function(results){
    res.json(results);
  }).catch(function(results){
    res.json({'message': results});
  }).done();
});

module.exports = router;