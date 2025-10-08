const mongoose = require("mongoose")

const products = new mongoose.Schema({
    employeeName: { type: String, },
    employeeAge: { type: Number, },
    employeeAddress: { type: String, },
    employeePhone: { type: String, },
})

module.exports = mongoose.model("product", products)