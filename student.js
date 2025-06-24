const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  roll: Number,
  name: String,
  degree: String,
  city: String
});

module.exports = mongoose.model('Student', studentSchema);



