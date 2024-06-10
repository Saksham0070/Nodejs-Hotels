const express = require("express")
const router = express.Router();
const MenuItems = require("../models/MenuItems");

//POST Method for MenuItmes
router.post('/',async (req,res)=>{
    try{
        const data = req.body;

        //New document making to save
        const menuData = new MenuItems(data);
        //Data Saving Procedure
        const response = await menuData.save();
        console.log("Data Saved")
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
})
//GET Method for MenuItems
router.get('/',async (req,res)=>{

    try{
        const data = await MenuItems.find();
        console.log("Data Fetched")
        res.status(200).json(data);
    }catch(err){
        console.log(err)
        res.status(500).json({error:'Internal Server Error'})
    }
})

//Parametrised call of Menu to fetched information
router.get('/:tasteType',async (req,res)=>{
  const tasteType = req.params.tasteType; //Extract the taste type from the URL

  try{
    if(tasteType==='sweet' || tasteType==='sour'|| tasteType==='spicy'){
      const response = await MenuItems.find({taste:tasteType});
      console.log("Response Fetched")
      res.status(200).json(response);
  }else{
    res.status(404).json({error:'Invalid Work Type'});
  }
}catch(err){
  console.log(err);
  res.status(500).json({error:'Internal Server Error'});
}
})

router.put('/:id',async(req,res)=>{
    try{
        const menuId = req.params.id; //Extract the id from the URL parameter
        const updatedMenuData = req.body; //Updated data for the person

        const response = await MenuItems.findByIdAndUpdate(menuId,updatedMenuData,{
            new:true, //Return the updated document
            runValidators:true, //Run Mongoose Validation
        })
        if(!response){
            return res.status(404).json({error:'Menu not found'});
        }
        console.log('Data Updated Succesfully')
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Invalid Server Error'})

    }
})
router.delete('/:id',async(req,res)=>{
    try{
        const menuId = req.params.id;
        const UpdatedmenuData = req.body;
        
        const response = await MenuItems.findByIdAndDelete(menuId);
        if(!response){
            return res.status(404).json({error:'Menu Not Found'});
        }
        console.log('Data Deleted Successfully')
        res.status(200).json(response);
    }catch(err){
        console.log(err)
        res.status(500).json({error:'Invalid Server Error'})
    }
})

module.exports = router;