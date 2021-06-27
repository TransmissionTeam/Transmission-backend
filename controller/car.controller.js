'use strict'
const userModel = require('../models/user.model')

const rentCar = (req, res) => {
    const { email } = req.query;
    userModel.findOne({ email: email }, (error, user) => {
        if (error) {
            res.send(error)
        } else {
            res.json(user)
        }
    })
}


const addCar = (req , res) => {
    const {name , type , company , color ,model , imgurl} = req.body ;
    userModel.findOne({email : email} , (error ,user)=>{
        if (error){
            res.send(error)
        }else{
            user.cars.push({name : name , type:type , company:company , color:color ,model:model , imgurl:imgurl})
            user.save();
            res.json(user)
        }
    })

}


const deleteCar = (req , res) =>{
    const carIndex = req.params.car_idx ;
    const {email} = req.query ; 

userModel.findOne({email :email }, (error , user) => {
    if (error){
        res.send(error)
    }else {
        user.cars.splice(carIndex , 1 )
        user.save();
        res.send(user)
    }
})

}

module.exports = {
    rentCar,
    addCar,
    deleteCar , 
}
