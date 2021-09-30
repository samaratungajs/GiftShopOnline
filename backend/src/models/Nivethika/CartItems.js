const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    username: {type: "string", required: true},
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'giftitems', required: true },
    productname:{type: "string", required: true},
    quantity: { type: Number, default: 1 },
    price: { type: Number, required: true },
    imageURL: { type: "string", required: true, trim: true },
    deliverycharge: { type: Number, required: true },
    discount:{ type: Number, required: true }
});




const cart = mongoose.model('cart', cartSchema);

module.exports= cart;