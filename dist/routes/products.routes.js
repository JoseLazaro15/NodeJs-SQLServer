"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _productsController = require("../controllers/products.Controller.js");
var router = (0, _express.Router)();
router.get('/products', _productsController.getProducts);
router.post('/products', _productsController.createNewProduct);
router.get('/products/count', _productsController.getTotalProducts);
router.get('/products/:id', _productsController.getProductById);
router["delete"]('/products/:id', _productsController.deleteProductById);
router.put('/products/:id', _productsController.updateProductById);
var _default = exports["default"] = router;