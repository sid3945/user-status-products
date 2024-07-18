const mongoose = require('mongoose');
require('dotenv').config();

async function connectMongo(){
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Mongo connection successful!");
    } catch (error){
        console.log(`Mongo connection failed ${error}`);
    }
}

module.exports = connectMongo;