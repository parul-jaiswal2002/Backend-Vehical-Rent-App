const mongoose = require('mongoose')
const Vehical = require('../models/vehicalModel')

const getAllVehical = async (req, res) => {
    const vehicals = await Vehical.find({}).sort({createdAt : -1})
    res.status(200).json(vehicals)
}

const createVehical = async (req, res) => {
    const {Firstname, Lastname, NumberOfWheels, TypeOfVehical, Model, Startdate, enddate} = req.body
    if(!Firstname || !Lastname || !NumberOfWheels || !TypeOfVehical || !Model || !Startdate || !enddate){
        return res.status(401).json({'Error' : 'All Feilds are mandatory'})
    }
    const CheckRepeat = await Vehical.find({TypeOfVehical})
    if(CheckRepeat.length>0){
        console.log(CheckRepeat)
       return res.status(401).json({'Error' : "Already booked"})
    }
    const vehical = await Vehical.create({Firstname, Lastname, NumberOfWheels, TypeOfVehical, Model, Startdate, enddate})
    if(!vehical){
        return res.status(401).json({'Error' : 'Something went wrong'})
    }
    res.status(200).json({'message' : 'Booked'})
}

module.exports = {createVehical, getAllVehical}