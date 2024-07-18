const express = require('express');
const {getUsers, createUser} = require('../controllers/userController');
const addToProduct = require('../controllers/productController');

const router = express.Router();

router.get('/users', getUsers);
router.post('/products', addToProduct);
router.post('/user', createUser);
function routes(){
    console.log("hi");
}

module.exports = router;