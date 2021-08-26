const mongoose = require('mongoose');

const SupplierSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    NIC: { type: String, required: true },
    pNumber: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: {type: String, required: true},
    
});


const Supplier = mongoose.model('supplier', SupplierSchema);
module.exports = Supplier;