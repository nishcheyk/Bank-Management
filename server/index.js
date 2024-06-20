const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Customer = require("./models/Data");
const loginRoutes = require("./Routes/loginRoute");
const signupRoutes = require("./Routes/Signup");
const app = express();
const bcrypt = require("bcrypt");
const User = require("./models/User");
const PORT = 5050;

app.use(express.json());
app.use(cors());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

mongoose.connect("mongodb://localhost:27017/Bank-Management", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Customer API Route
app.post("/api/Customer", async (req, res) => {
  try {
    const { name, email, address, contactNumber, dateOfBirth } = req.body;

    // Create a new customer
    const newCustomer = new Customer({
      name,
      email,
      address,
      contactNumber,
      dateOfBirth,
    });

    const savedCustomer = await newCustomer.save();
    res.status(201).json(savedCustomer);
  } catch (error) {
    console.error("Error creating customer:", error);
    res.status(500).json({ message: "Error creating customer" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare passwords
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err || !isMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // Password matches, return success message
      res.status(200).json({ message: "Login successful" });
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Use registration routes from registrationRoutes.js under /auth/register
app.use("/auth/register", signupRoutes);
// Use login routes from loginRoutes.js under /auth/login
app.use("/auth/login", loginRoutes);

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
