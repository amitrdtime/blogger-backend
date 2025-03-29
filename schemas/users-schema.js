const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    fname:String,
    lname:String,
    email: String,
    password: String,
    status: Boolean,
    created: {
        type: Date,
        default: Date.now
    },
  });
  
  module.exports = mongoose.model('Users', userSchema);
