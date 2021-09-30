const giftItem = require('../models/giftItem');
const archivedItem = require('../models/archivedtem');
const Supplier = require('../models/supplier');

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

//itemReport
const itemReport = async(req, res) => {
    let st = 'approved';
    let sp = 'Giftery';
    let supi = [];
    const it = await giftItem.aggregate([{
        $lookup: {
                from: "suppliers",
                localField: "supplier",
                foreignField: "email",
                as: "supplier"
            }
    }])
        it.map((item) => {
                supi.push(item);
        });
    console.log(supi)
    res.status(200).send({ data: supi });
}

//get all suppliers 
const getAllSuppliers = async(req, res) => {
    await Supplier.find({}).populate('suppliers', 'firstName lastName address NIC pNumber email password ')
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error.message });
        });

}

//search suppliers
const searchSuppliers = async(req, res) => {
    if(req.params && req.params.id){
        await Supplier.find({"firstName":req.params.id})
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ error: error.message });
            });
    }

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

//get approved gift items from suppliers
const giftItemsfromsup = async(req, res) => {
    let st = 'approved';
    let sp = 'Giftery';
    await giftItem.find({$and:[{"supplier":{$ne:sp}},{"status":{$eq:st}}]})
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error.message });
        });

}

//get items and supplier details
const itemSupplierDetails = async(req, res) => {
    let st = 'approved';
    let sp = 'Giftery';
    let supi = [];
    const it = await giftItem.aggregate([{
        $lookup: {
                from: "suppliers",
                localField: "supplier",
                foreignField: "email",
                as: "supplier"
            }
    }])
        it.map((item) => {
            if(item.supplier.length > 0 && item.status == "approved"){
                supi.push(item);
            }

        });
    console.log(supi)
    res.status(200).send({ data: supi });
}

const getGiftitemsById = async(req, res) => {
    if(req.params && req.params.id){
        await giftItem.find({"productName":req.params.id})
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ error: error.message });
            });
    }

}

const getitemsById = async(req, res) => {
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



//Update Items 
const updateGiftItem = async(req, res) => {
    let Itemid = req.params.id;
    const { productName, brand, supplier, category, description, quantity, pricePItem, wholesalePrice, discountPItem, deliveryCpItem, imageURL, status } = req.body;
    const updateItem = {
        productName,
        brand,
        supplier,
        category,
        description,
        quantity,
        pricePItem,
        wholesalePrice,
        discountPItem,
        deliveryCpItem,
        imageURL,
        status
    }
    await giftItem.findByIdAndUpdate(Itemid, updateItem)
        .then(() => {
            res.status(200).send({ status: "Item updated" })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with updating data", error: err.message });
        })
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

// deleteArchiveItem
const deleteArchiveItem = async(req, res) => {
    let itemid = req.params.id;

    await archivedItem.findByIdAndDelete(itemid).then(() => {
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

//get archive items
const getArchived = async(req, res) => {
    await archivedItem.find({}).populate('archiveditems', 'productName brand supplier category description quantity pricePItem wholesalePrice discountPItem deliveryCpItem imageURL status')
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error.message });
        });

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

const RejectGiftItems= async(req, res) => {
    if (req.params && req.params.id) {
        let cid = req.params.id;
        await giftItem.findByIdAndUpdate(cid,{$set:{status:'rejected'}})
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
    RejectGiftItems,
    addArchiveItems,
    viewArchivedItems,
    getSupplierGiftItems,
    getArchived,
    updateGiftItem,
    deleteArchiveItem,
    giftItemsfromsup,
    itemSupplierDetails,
    getAllSuppliers,
    searchSuppliers,
    getitemsById
    


};