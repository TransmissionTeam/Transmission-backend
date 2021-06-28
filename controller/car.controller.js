'use strict';
const { userModel } = require('../models/user.model');

const rentCar = (req, res) => {
  console.log(req.query);
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
  console.log(req);

  // const { email } = req.query;
  const { email, name, type, company, color, model, img_url } = req.body;
  userModel.findOne({ email: email }, (error, user) => {
    if (error) {
      res.send(error);
    } else {
      console.log(user.cars);
      user.cars.push({
        name,
        type,
        company,
        color,
        model,
        img_url,
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
  const { email, name, type, company, color, model, img_url } = req.body;
  userModel.findOne({ email: email }, (error, userData) => {
    if (error) {
      res.send(error);
    } else {
      userData.cars.splice(carIndex, 1, {
        name,
        type,
        company,
        color,
        model,
        img_url,
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
