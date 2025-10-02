const mongoose = require("mongoose")

 const products =  new mongoose.Schema({
 
    productName: { type: String,},
    Price: {type: Number,}
 
})

module.exports = mongoose.model("product",products)