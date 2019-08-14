import express from "express";
var router = express.Router();
let cart = require('../controllers/cart.controller.ts');

router.get('/cart', cart.List);
router.post('/addToCart', cart.addToCart);

module.exports = router;