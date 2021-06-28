'use strict';

const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  name: { type: String },
  type: { type: String },
  company: { type: String },
  color: { type: String },
  model: { type: String },
  img_url: { type: String },
});

module.export = carSchema;
