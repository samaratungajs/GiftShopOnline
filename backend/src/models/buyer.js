const mongoose = require('mongoose');

const BuyerSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    pNumber: { type: Number, required: true },
    email: { type: String, required: true, unique: true},
    password: {type: String, required: true},
    
});


const Buyer = mongoose.model('buyer', BuyerSchema);
module.exports = Buyer;