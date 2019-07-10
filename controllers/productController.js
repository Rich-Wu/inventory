var Product = require('../models/product');
const { body, validationResult, sanitizeBody } = require('express-validator');
var async = require('async');

exports.index = (req, res, next) => {
  Product.find((err, products) => {
    if (err) return next(err);
    res.render('products', {title: 'All Products', products: products});
  });
};

exports.wines = (req, res, next) => {
  Product.find({type: 'Wine'}, (err, wines) => {
    if (err) return next(err);
    res.render('products', {title: 'Wines', products: wines});
  });
};

exports.spirits = (req, res, next) => {
  Product.find({type: 'Spirit'}, (err, spirits) => {
    if (err) return next(err);
    res.render('products', {title: 'Spirits', products: spirits});
  });
};

exports.other = (req, res, next) => {
  Product.find({type: 'Other'}, (err, other) => {
    if (err) return next(err);
    res.render('products', {title: 'Other Products', products: other});
  });
};

exports.create_get = (req, res, next) => {
  res.render('product_form', {title: "Create a new Product"});
}

exports.create_post = [
  // Validation Middleware here
  // next(),
  (req, res, next) => {
    var product = new Product({
      brand: req.body.brand,
      name: req.body.name,
      vintage: req.body.vintage,
      country: req.body.country,
      summary: req.body.summary,
      upc: req.body.upc,
      type: req.body.type,
      price: req.body.price
    });
    product.save((err) => {
      if (err) return next(err);
      res.redirect('/products');
    })
  }
];
