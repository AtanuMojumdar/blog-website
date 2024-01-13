const mongoose = require('mongoose');
require('dotenv').config();


async function connectDB(){
    try{
        const connection = await mongoose.connect(`mongodb+srv://atanu192003mojumdar:${process.env.PASSWORD}@cluster0.aktlf1r.mongodb.net/?retryWrites=true&w=majority`);
        console.log('DB connected!');
    }
    catch(err){
        console.log("DB connection error!")
        console.log(err);
    }
}

module.exports = connectDB;