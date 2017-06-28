var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;
var Day = require('../models').Day;


router.post('/:id/hotel/',function(req, res, next) {

});
router.post('/:id/restaurants/',function(req, res, next) {

});
router.post('/:id/activities/',function(req, res, next) {

});
//one specific day
router.get('/:id/',function(req, res, next) {

  Day.destroy({where:{
    id: req.params.id
  },
  returning: true
  })
    .then((day)=>{
      res.json(day);
    }).catch(next);

});
//delete day
router.delete('/:id/',function(req, res, next) {

  Day.findOne({where:{
    id: req.params.id
  }})
    .then((day)=>{
      res.json(day);
    }).catch(next);

});

router.get('/', function(req, res, next) {
  Day.findAll().then((days)=>{
    return res.json(days)
  }).catch(next)
})


module.exports = router;
