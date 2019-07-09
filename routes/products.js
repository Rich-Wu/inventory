var express = require('express');
var router = express.Router();

// Require controller modules
var product_controller = require('../controllers/productController');

/* GET products listing. */
router.get('/', product_controller.index);

module.exports = router;