const mongoose = require('mongoose');

const giftItemSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    brand: { type: String, required: true },
    supplier: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    pricePItem: { type: Number, required: true },
    wholesalePrice: { type: Number, required: true },
    discountPItem: { type: Number, required: true },
    deliveryCpItem: { type: Number, required: true },
    imageURL: { type: String, required: true },
    status: { type: String, required: true }

    
});


const giftitem = mongoose.model('giftitems', giftItemSchema);
module.exports = giftitem;