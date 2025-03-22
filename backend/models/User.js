const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
  name: {
    type: String,
    required: true, 
    trim: true, 
  },
  email: {
    type: String,
    required: true, 
    unique: true, 
    trim: true,
    match: [/.+\@.+\..+/, "Please enter a valid email"], 
  },
  password: {
    type: String,
    required: true, 
  },
  createdAt: {
    type: Date,
    default: Date.now, 
  },
  token : {
    type : String,
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
