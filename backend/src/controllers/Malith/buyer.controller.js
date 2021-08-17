const giftItem = require('../../models/giftItem');

//Malith   Get all gift items by category
const getAllGiftItems = async(req,res)=>{
    const category = req.query.cat;
    console.log(category)
    try{
        let items;
        if(category){
          items = await giftItem.find({category});

        }else{
            items = await giftItem.find(); 
        }
        
        res.status(200).json(items);
    }catch(err){
        res.status(500).json(err);

    }
}
//Malith

module.exports={
    getAllGiftItems
};