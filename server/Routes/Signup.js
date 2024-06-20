const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Import the User model
const router = express.Router();

// Registration Route
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if a user with the same email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Create a new user
    const newUser = new User({ email, password });

    // Hash the password
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, async (err, hash) => {
        if (err) throw err;

        // Set hashed password
        newUser.password = hash;

        // Save the user
        try {
          const savedUser = await newUser.save();
          res.status(201).json(savedUser);
        } catch (error) {
          console.error('Error saving user:', error);
          res.status(500).json({ message: 'Error saving user' });
        }
      });
    });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
