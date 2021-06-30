'use strict';
const { userModel } = require('../models/user.model');

const rentCar = (req, res) => {
  // console.log(req.query);
  const { email } = req.query;
  userModel.findOne({ email: email }, (error, user) => {
    if (error) {
      res.send(error);
    } else {
      res.json(user);
    }
  });
};

const addCar = (req, res) => {
  // console.log(req);

  // const { email } = req.query;
  const { email, idcar, name, type, company, color, img_url, discription, rentalDate, returnDate } = req.body;
  userModel.findOne({ email: email }, (error, user) => {
    if (error) {
      res.send(error);
    } else {
      // console.log(user.cars);
      user.cars.push({
        idcar,
        name,
        type,
        company,
        color,
        img_url,
        discription,
        rentalDate,
        returnDate
      });
      user.save();
      res.send(user);
    }
  });
};

const deleteCar = (req, res) => {
  const carIndex = req.params.car_idx;
  const { email } = req.query;
  userModel.findOne({ email: email }, (error, user) => {
    if (error) {
      res.send(error);
    } else {
      user.cars.splice(carIndex, 1);
      user.save();
      res.send(user);
    }
  });
};

const updateCar = (req, res) => {
  const carIndex = req.params.car_idx;
  const { email, idcar, name, type, company, color, img_url, discription, rentalDate, returnDate } = req.body;
  userModel.findOne({ email: email }, (error, userData) => {
    if (error) {
      res.send(error);
    } else {
      userData.cars.splice(carIndex, 1, {
        idcar,
        name,
        type,
        company,
        color,
        img_url,
        discription,
        rentalDate,
        returnDate
      });
      userData.save();
      res.send(userData);
    }
  });
};

module.exports = {
  rentCar,
  addCar,
  deleteCar,
  updateCar,
};
