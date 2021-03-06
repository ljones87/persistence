var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;
var daysRouter = require('./days');

router.use('/api/days', daysRouter);

router.get('/api/hotels', function(req, res, next){

  Hotel.findAll().then((hotels)=>{
    return res.json(hotels)
  }).catch(next)

})

router.get('/api/restaurants', function(req, res, next){

  Restaurant.findAll().then((restaurants)=>{
    return res.json(restaurants)
  }).catch(next)

});

router.get('/api/activities', function(req, res, next){

  Activity.findAll().then((activities)=>{
    return res.json(activities)
  }).catch(next)

});

router.get('/', function(req, res, next) {
    res.render('index');
});




module.exports = router;
