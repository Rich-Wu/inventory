var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema(
  {
    brand: {type: String, required: true},
    name: {type: String, required: true},
    vintage: {type: Number, min: 1900, max: (new Date).getFullYear()+1},
    country: String,
    summary: String,
    upc: {type: String, required: true},
    type: {type: String, enum: ['Wine', 'Spirit', 'Other']},
    price: {type: Number, required: true}
  }
);

// Virtual for book's URL
ProductSchema
.virtual('url')
.get(function () {
  return '/product/' + this._id;
});

//Export model
module.exports = mongoose.model('Product', ProductSchema);
