const wishlist = require ("../../models/Malith/wishlist.model");

const addWishlistItems = async(req, res) => {
    if (req.body) {
        const wishItem = new wishlist(req.body);
        wishItem.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}  


const getAllWishlistItems = async(req, res) => {
    await wishlist.find({})
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error.message });
        });

}


module.exports = {
    addWishlistItems,
    getAllWishlistItems
}