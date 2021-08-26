const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    pricePItem: { type: Number, required: true },
    wholesalePrice: { type: Number, required: true },
    imageURL: { type: String, required: true },
    currentuser: { type: String, required: true },
    productId: { type: String, required: true },
    supplier: { type: String, required: true }
}, 
{
    timestamps:true
}

);


const wishlist = mongoose.model('wishlist', wishlistSchema);
module.exports = wishlist;