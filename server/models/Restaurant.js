var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var slug = require('slug');
var User = mongoose.model('User');

var RestaurantSchema = new mongoose.Schema({
  slug: {type: String, lowercase: true, unique: true},
  name: String,
  description: String,
  favoritesCount: {type: Number, default: 0},
  tagList: [{ type: String }],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {timestamps: true});

RestaurantSchema.plugin(uniqueValidator, {message: 'is already taken'});

RestaurantSchema.pre('validate', function(next){
  this.slugify();

  next();
});

RestaurantSchema.methods.slugify = function() {
  this.slug = slug(this.name);
};

RestaurantSchema.methods.updateFavoriteCount = function() {
  var restaurant = this;

  return User.count({favorites: {$in: [restaurant._id]}}).then(function(count){
    restaurant.favoritesCount = count;

    return restaurant.save();
  });
};

RestaurantSchema.methods.toJSONFor = function(user){
  return {
    slug: this.slug,
    name: this.title,
    description: this.description,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    tagList: this.tagList,
    favorited: user ? user.isFavorite(this._id) : false,
    favoritesCount: this.favoritesCount,
    owner: this.owner.toProfileJSONFor(user)
  };
};

mongoose.model('Restaurant', RestaurantSchema);