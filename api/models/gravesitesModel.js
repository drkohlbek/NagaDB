const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const gravesiteSchema = new Schema({
  name: {
    type: String,
    required: true
  }, 
  location: {
    address: {
      type: String
    },
    coord: {
      type: Array
    }
  },
  map: {
    type: String
  },
  phone: {
    type: String 
  },
  website: {
    type: String
  }
}, { timestamps: true })

module.exports = mongoose.model('gravesite', gravesiteSchema)