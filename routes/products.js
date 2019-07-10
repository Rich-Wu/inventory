var express = require('express');
var router = express.Router();

// Require controller modules
var product_controller = require('../controllers/productController');

/* GET products listing. */
router.get('/', product_controller.index);

router.get('/wines', product_controller.wines);

router.get('/spirits', product_controller.spirits);

router.get('/other', product_controller.other);

router.get('/create', product_controller.create_get);

router.post('/create', product_controller.create_post);

module.exports = router;
