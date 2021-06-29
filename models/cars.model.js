'use strict';

const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  idcar: { type: String },
  name: { type: String },
  type: { type: String },
  company: { type: String },
  color: { type: String },
  img_url: { type: String },
  discription: { type: String },
  rentalDate: { type: String },
  returnDate: { type: String },
});

module.export = carSchema;
