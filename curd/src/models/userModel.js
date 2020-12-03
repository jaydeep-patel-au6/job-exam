const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

const UserSchema = mongoose.Schema({
    name : {
        type: String,
    },
    email : {
        type: String,
        // unique : true
    },
    phone_number : {
        type: Number
    },
    created_by : {
        type: ObjectId, ref:  "User",
    },
    password : {
        type: String
    }
    
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema)