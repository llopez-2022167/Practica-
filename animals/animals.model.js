// models/Animal.js
const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        minlength: 3 
    },
    species: {
        type: String, 
        required: true,
        minlength: 3 
    },
    age: { 
        type: Number,
        required: true
    }
});
  
const Animal = mongoose.model('Animal', animalSchema);
  
module.exports = Animal;