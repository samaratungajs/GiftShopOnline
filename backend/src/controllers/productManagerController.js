const giftItem = require('../models/giftItem');
const archivedItem = require('../models/archivedtem');

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

//supplier items
const getSupplierGiftItems = async(req, res) => {
    await giftItem.find({}).sort({_id:-1}).limit(7).populate('giftitems', 'productName brand supplier category description quantity pricePItem wholesalePrice discountPItem deliveryCpItem imageURL status')
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
    let st = 'unapproved';
    await giftItem.find({"status":{$eq:st}})
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error.message });
        });

}

//remove giftitems
const deleteGiftItems = async(req, res) => {
    let itemid = req.params.id;

    await giftItem.findByIdAndDelete(itemid).then(() => {
        res.status(200).send({ status: "Item deleted" });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with delete Item", error: err.message });
    })

}

//add item to archive
const addArchiveItems = async(req, res) => {
    if (req.body) {
        const archiveditem = new archivedItem(req.body);
        archiveditem.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const viewArchivedItems = async(req, res) => {
    await archivedItem.find({}).populate('archiveditems', 'productName brand supplier category description quantity pricePItem wholesalePrice discountPItem deliveryCpItem imageURL status')
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
    ApproveGiftItems,
    deleteGiftItems,
    addArchiveItems,
    viewArchivedItems,
    getSupplierGiftItems


};