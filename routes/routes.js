const express = require('express');
const getUsers = require('../controllers/userController');
const addToProduct = require('../controllers/productController');

const router = express.Router();

router.get('/users', getUsers);
router.post('/products', addToProduct)
function routes(){
    console.log("hi");
}

module.exports = router;