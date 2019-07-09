var Product = require('../models/product');
const { body, validationResult, sanitizeBody } = require('express-validator');
var async = require('async');

exports.index = (req, res, next) => {
  Product.find((err, products) => {
    if (err) return next(err);
    res.render('products', {title: 'All Products', products: products});
  });
};