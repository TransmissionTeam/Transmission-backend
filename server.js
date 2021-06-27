const express = require('express'); // require the express package
const app = express(); // initialize your express app instance
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');
const mongoose = require('mongoose');
const {
  rentCar,
  addCar,
  deleteCar,
  updateCar,
} = require('./controller/car.controller');
const carsData = require('./assets/cars.json');

const PORT = process.env.PORT;

mongoose.connect('mongodb://localhost:27017/myCar', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// a server endpoint
app.get(
  '/', // our endpoint name
  function (req, res) {
    // callback function of what we should do with our request
    res.send('Hello World'); // our endpoint function response
  }
);

// localhost:8080/cars
app.get('/cars', (req, res) => {
  res.json(carsData);
});

// localhost:8080/cars => rent car
app.get('/car', rentCar);
app.post('/car', addCar);
app.delete('/car/:car_idx', deleteCar);
app.put('/car/:car_idx', updateCar);

app.listen(PORT, console.log(`Listening on ${PORT}`)); // kick start the express server to work
