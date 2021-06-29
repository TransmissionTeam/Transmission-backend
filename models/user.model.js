'use strict';
const mongoose = require('mongoose');
const carSchema = require('./cars.model');

const EMAIL = process.env.EMAIL;

const userSchema = new mongoose.Schema({
  email: { type: String },
  cars: [carSchema],
});

const userModel = mongoose.model('user', userSchema);

const seedUserData = () => {
  const newUser = new userModel({
    email: EMAIL,
    cars: [
      {
        idcar: '98',
        name: 'fusion2020',
        type: 'Haybrid',
        company: 'Ford',
        color: 'Blue',
        img_url: 'https://cars.usnews.com/static/images/Auto/izmo/i154319660/2020_ford_fusion_angularfront.jpg',
        discription: 'test'  ,
        rentalDate:  '2021-6-19' ,
        returnDate: '2021-6-30' ,
      },
      {
        idcar: '99',
        name: 'fusion2021',
        type: 'Haybrid',
        company: 'Ford',
        color: 'Darkgreen',
        img_url: 'https://www.leasecosts.ca/sites/default/files/styles/car_thumb_big/public/2016-11/11206_st1280_116_0.jpg?itok=5pdnLG94',
        discription: 'test' ,
        rentalDate:  '2021-6-19' ,
        returnDate: '2021-6-30' ,
      },
    ],
  });
  newUser.save();
};

// seedUserData();

module.exports = {
  userModel,
  seedUserData,
};
