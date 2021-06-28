const express = require('express'); // require the express package
const app = express(); // initialize your express app instance
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT;
const {
  rentCar,
  addCar,
  deleteCar,
  updateCar,
} = require('./controller/car.controller');

// const {seedUserData} = require('./models/user.model');

const cors = require('cors');

// const axios = require('axios');

const carsData = require('./assets/cars.json');

app.use(cors());

app.use(express.json()); 

mongoose.connect('mongodb://localhost:27017/myCar', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// a server endpoint
app.get(
  '/', // our endpoint name
  function (req, res) {
    // callback function of what we should do with our request
    res.send('Your API is working'); // our endpoint function response
  }
);

// seedUserData();

// localhost:8080/cars
app.get('/cars', (req, res) => {
  res.json(carsData);
});

// localhost:8080/cars => rent car
app.get('/car', rentCar);
app.post('/car', addCar);
app.put('/car/:car_idx', updateCar);
app.delete('/car/:car_idx', deleteCar);


app.listen(PORT, console.log(`Listening on ${PORT}`)); // kick start the express server to work
