const express = require("express");
const Router = express.Router();
const Person = require("../models/person");

//POST route to add person
Router.post("/", async (req, res) => {
  try {
    const data = req.body; //Assuming the request body contains the person data

    //Create a new Person document using the Mongoose model
    const newPerson = new Person(data);

    //Save the new person to the database
    const response = await newPerson.save();
    console.log("Data Saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Get method to get the person
Router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("Data Fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

Router.get("/:workType", async (req, res) => {
  const workType = req.params.workType;
  try {
    if (
      workType === "cheif" ||
      workType === "manager" ||
      workType === "waiter"
    ) {
      const response = await Person.find({ work: workType });
      console.log("Data Fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json("Invalid Work Type");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = Router;
