const mongoose = require('mongoose');

const AgencySchema = new mongoose.Schema({
    name :{
        type:String,
        required: true
    },
    address1 :{
        type:String,
        required: true
    },
    address2: {
        type:String
    },
    state :{
        type:String,
        required: true
    },
    city :{
        type:String,
        required: true
    },
    phone:{
        type:String,
        required:true
    },
    clients : {
        type:Array,
        default:[]
    }

},{
    timestamps: true
})

module.exports = mongoose.model('Agency',AgencySchema);