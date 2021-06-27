'use strict';
const mongoose = require('mongoose');
const carSchema = require('./cars.model');

const userSchema = new mongoose.Schema({
  email: { type: String },
  cars: [carSchema],
});

const userModel = mongoose.model('user', userSchema);

const seedUserData = () => {
  const newUser = new userModel({
    email: process.env.EMAIL,
    cars: [],
  });
  newUser.save();
};

seedUserData();

module.exports = {
  userModel,
  seedUserData,
};
