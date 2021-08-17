const giftItem = require('../models/giftItem');

//product management
const addGiftItems = async(req, res) => {
    if (req.body) {
        const giftitem = new giftItem(req.body);
        giftitem.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}  



const getAllGiftItems = async(req, res) => {
    await giftItem.find({}).populate('giftitems', 'productName brand supplier category description quantity pricePItem wholesalePrice discountPItem deliveryCpItem imageURL status')
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error.message });
        });

}





const getGiftitemsById = async(req, res) => {
    if(req.params && req.params.id){
        await giftItem.findById(req.params.id).populate('giftitems', 'productName brand supplier category description quantity pricePItem wholesalePrice discountPItem deliveryCpItem imageURL status')
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ error: error.message });
            });
    }

}

//Get gift items to be approved
const giftItemsToApprove = async(req, res) => {
    let cid = req.params.id;
    await giftItem.find({"status":{$eq:cid}})
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error.message });
        });

}

const ApproveGiftItems= async(req, res) => {
    if (req.params && req.params.id) {
        let cid = req.params.id;
        await giftItem.findByIdAndUpdate(cid,{$set:{status:'approved'}})
        .then(() => {
            res.status(200).send({ status: "GiftItem approved" });
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with approval", error: err.message });
        })
    }
}

module.exports = {
    addGiftItems,
    getAllGiftItems,
    getGiftitemsById,
    giftItemsToApprove,
    ApproveGiftItems


};