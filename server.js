const express = require("express");
const app = express();
const port = 3000;
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json()); //req.body

// const Person = require("./models/person");
// const MenuItems = require("./models/MenuItems");
const personRoutes = require("./routes/personRoutes");
const menuItemRoutes = require('./routes/menuItemRoutes');


app.get("/", (req, res) => {
  var task = {
    name: "Saksham Sagar",
    Roll: "CSE/21072/732",
    Branch: "CSE",
    Batch: "2025",
  };
  res.send(task);
});

app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);

app.listen(port, () => {
  console.log(`Server is listening at PORT = ${port}`);
});
// //POST route to add person
// app.post("/person", async (req, res) => {
//   try {
//     const data = req.body; //Assuming the request body contains the person data

//     //Create a new Person document using the Mongoose model
//     const newPerson = new Person(data);

//     //Save the new person to the database
//     const response = await newPerson.save();
//     console.log("Data Saved");
//     res.status(200).json(response);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// //Get method to get the person
// app.get('/person',async(req,res)=>{
//     try{
//         const data = await Person.find();
//         console.log("Data Fetched");
//         res.status(200).json(data);
//     }catch(err){
//         console.log(err)
//         res.status(500).json({error:'Internal Server Error'})
//     }
// })


// //POST Method for MenuItmes
// app.post('/menu',async (req,res)=>{
//     try{
//         const data = req.body;

//         //New document making to save
//         const menuData = new MenuItems(data);
//         //Data Saving Procedure
//         const response = await menuData.save();
//         console.log("Data Saved")
//         res.status(200).json(response);
//     }catch(err){
//         console.log(err);
//         res.status(500).json({error: 'Internal Server Error'})
//     }
// })
// //GET Method for MenuItems
// app.get('/menu',async (req,res)=>{

//     try{
//         const data = await MenuItems.find();
//         console.log("Data Fetched")
//         res.status(200).json(data);
//     }catch(err){
//         console.log(err)
//         res.status(500).json({error:'Internal Server Error'})
//     }
// })

// //Parametrised call of Menu to fetched information
// app.get('/menu/:tasteType',async (req,res)=>{
//   const tasteType = req.params.tasteType; //Extract the work type from the URL

//   try{
//     if(tasteType==='sweet' || tasteType==='sour'|| tasteType==='spicy'){
//       const response = await MenuItems.find({taste:tasteType});
//       console.log("Response Fetched")
//       res.status(200).json(response);
//   }else{
//     res.status(404).json({error:'Invalid Work Type'});
//   }
// }catch(err){
//   console.log(err);
//   res.status(500).json({error:'Internal Server Error'});
// }
// })









//POST route to add person  (OLD STYLE CANNOT BE USED BECAUSE OF READABILITY ISSUE AND COMPLEX
// NATURE THESE STYLES NOW EXPIRES)
// app.post('/person',(req,res)=>{
//     const data = req.body; //Assuming the request body contains the person data

//     //Create a new Person document using the Mongoose model
//     const newPerson = new Person(data);

//     //Save the new person to the database
//     newPerson.save((error,savedPerson)=>{
//         if(error){
//             console.log('Error saving person:',error);
//             res.status(500).json({error:'Internal server error'})
//         }else{
//             console.log('Data saved succesfully');
//             res.status(200).json(savedPerson);
//         }
//     })
// })


