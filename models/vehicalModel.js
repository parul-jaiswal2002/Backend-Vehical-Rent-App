const mongoose = require('mongoose')

const Schema = mongoose.Schema

const vehicalSchema = new Schema({
    Firstname : {
        type : String,
        required : true
    },
    Lastname : {
        type : String,
        required : true
    },
    NumberOfWheels : {
        type : Number,
        required : true
    },
    TypeOfVehical : {
        type : String,
        required : true
    },
    Model : {
        type : String,
        required : true
    },
    Startdate : {
        type : Date,
        required : true
    },
    enddate : {
        type : Date,
        required : true
    }

})

module.exports = mongoose.model("Vehical", vehicalSchema)