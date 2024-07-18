const Product = require('../models/product');

function addToProduct(req, res){
    try{
        console.log(req.body);
    } catch(error){
        console.error("Failure in adding product to the stock ", error);
        res.status(500).json({error: "Internal Server Failure"});
    }
}

module.exports = addToProduct;