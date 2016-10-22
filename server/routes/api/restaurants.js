var router = require('express').Router();
var passport = require('passport');
var mongoose = require('mongoose');
var Restaurant = mongoose.model('Restaurant');
var User = mongoose.model('User');
var auth = require('../auth');

//Preload restaurant objects on routes with ':restaurant' paramater
router.param('restaurant', function(req, res, next, slug) {
    Restaurant.findOne({ slug: slug })
    .populate('owner')
    .then(function(restaurant) {
        if(!restaurant) { return res.sendStatus(404); }

        req.restaurant = restaurant;

        return next();
    }).catch(next);
});

// query restaurants
router.get('/', function(req, res, next) {
    var query = {};
    var limit = 20;
    var offset = 0;

    if(typeof req.query.limit !== 'undefined') { 
        limit = req.query.limit;
    }

    if(typeof req.query.offset !== 'undefined') {
        offset = req.query.offset;
    }

    if(typeof req.query.tag !== 'undefined') {
        query.tagList = {"$in" : [req.query.tag]};
    }

    Promise.all([
        req.query.owner ? User.findOne({ username: req.query.owner }) : null,
        req.query.favorited ? User.findOne({ username: req.query.owner }): null
    ]).then(function(results) {
        var owner = results[0];
    var favoriter = results[1];

    if(owner){
      query.owner = owner._id;
    }

    if(favoriter){
      query._id = {$in: favoriter.favorites};
    } else if(req.query.favorited){
      query._id = {$in: []};
    }

    return Promise.all([
      Restaurant.find(query)
        .limit(limit)
        .skip(offset)
        .sort({createdAt: 'desc'})
        .populate('owner')
        .exec(),
      Restaurant.count(query).exec(),
      req.payload ? User.findById(req.payload.id) : null,
    ]).then(function(results){
      var restaurants = results[0];
      var restaurantsCount = results[1];
      var user = results[2];

      return res.json({
        restaurants: restaurants.map(function(restaurant){
          return restaurant.toJSONFor(user);
        }),
        restaurantsCount: restaurantsCount
      });
    });
  }).catch(next);
});

// create a restaurant
router.post('/', auth.required, function(req, res, next) {
  User.findById(req.payload.id).then(function(user){
    if (!user) { return res.sendStatus(401); }

    var restaurant = new Restaurant(req.body.restaurant);

    restaurant.owner = user;

    return restaurant.save().then(function(){
      console.log(restaurant.owner);
      return res.json({restaurant: restaurant.toJSONFor(user)});
    });
  }).catch(next);
});

// return a restaurant
router.get('/:restaurant', auth.optional, function(req, res, next) {
  Promise.all([
    req.payload ? User.findById(req.payload.id) : null,
    req.restaurant.populate('owner').execPopulate()
  ]).then(function(results){
    var user = results[0];

    return res.json({restaurant: req.restaurant.toJSONFor(user)});
  }).catch(next);
});

// update restaurant
router.put('/:restaurant', auth.required, function(req, res, next) {
  if(req.restaurant._id.toString() === req.payload.id.toString()){
    if(typeof req.body.restaurant.title !== 'undefined'){
      req.restaurant.title = req.body.restaurant.title;
    }

    if(typeof req.body.restaurant.description !== 'undefined'){
      req.restaurant.description = req.body.restaurant.description;
    }

    if(typeof req.body.restaurant.body !== 'undefined'){
      req.restaurant.body = req.body.restaurant.body;
    }

    req.restaurant.save().then(function(restaurant){
      return res.json({restaurant: restaurant.toJSONFor(user)});
    }).catch(next);
  } else {
    return res.send(403);
  }
});

// delete restaurant
router.delete('/:restaurant', auth.required, function(req, res, next) {
  User.findById(req.payload.id).then(function(){
    if(req.restaurant.owner.toString() === req.payload.id.toString()){
      return req.restaurant.remove().then(function(){
        return res.sendStatus(204);
      });
    } else {
      return res.sendStatus(403);
    }
  });
});

// Favorite a restaurant
router.post('/:restaurant/favorite', auth.required, function(req, res, next) {
  var restaurantId = req.restaurant._id;

  User.findById(req.payload.id).then(function(user){
    if (!user) { return res.sendStatus(401); }

    return user.favorite(restaurantId).then(function(){
      return req.restaurant.updateFavoriteCount().then(function(restaurant){
        return res.json({restaurant: restaurant.toJSONFor(user)});
      });
    });
  }).catch(next);
});

// Unfavorite a restaurant
router.delete('/:restaurant/favorite', auth.required, function(req, res, next) {
  var restaurantId = req.restaurant._id;

  User.findById(req.payload.id).then(function (user){
    if (!user) { return res.sendStatus(401); }

    return user.unfavorite(restaurantId).then(function(){
      return req.restaurant.updateFavoriteCount().then(function(restaurant){
        return res.json({restaurant: restaurant.toJSONFor(user)});
      });
    });
  }).catch(next);
});

module.exports = router;