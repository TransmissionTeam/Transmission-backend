'use strict';

const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  name: { type: String },
  type: { type: String },
  company: { type: String },
  color: { type: String },
  model: { type: String },
  imgurl: { type: String },
});

module.export = carSchema;
