const Product = require('../models/product');
require('dotenv').config();

async function addToProduct(req, res){
    try{
        const name = req.body.name;
        const description = req.body.description;
        const category = req.body.category;
        const price = req.body.price;
        const available = req.body.available;
        const approval_code = req.body.approval_code;

        if(price >= process.env.PRODUCT_PRICE_THRESHOLD && !approval_code){
            res.status(403).json({body: {message: "Approval Code needed!"}})
        }else{
            const product = new Product({name, description, category, price, available, approval_code});
            let productUpdateResponse = await product.save();
            res.status(201).json({body: {productUpdateResponse}})
        }

    } catch(error){
        console.error("Failure in adding product to the stock ", error);
        res.status(500).json({error: "Internal Server Failure"});
    }
}

module.exports = addToProduct;