const mongoose  = require('mongoose');
const ClientSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email :{
        type: String,
        required: true
    },
    phone :{
        type: String,
        required: true
    },
    total_bill :{
        type: Number,
        required: true
    },
    agency :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Agency'
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Client',ClientSchema);