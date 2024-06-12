const express = require("express")
const mongoose= require('mongoose')
const cors = require("cors")
const Customer= require('./models/Customer');
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/Bank-Management", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.get("/api/Customer", async (req, res) => {
  try {
    const Customer = await Customer.find();
    res.json(Customer);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});
app.post("/posts", async (req, res) => {
  try {
      const { name,email,contactNumber,dateOfBirth} = req.body;
      // Create a new post with imageUrl handled as optional
      const newPost = new PostModel({
          name,
          email,
          contactNumber,
          dateOfBirth
      });
      // Save the post to the database
      const savedPost = await newPost.save();
      res.status(201).json(savedPost);
  } catch (error) {
      console.error("Error creating post:", error);
      res.status(500).json({ message: "Error creating post" });
  }
});
// start the Express server
app.listen(5050,()=>{
  console.log("server is running")
})