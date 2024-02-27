const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const vetSchema = new Schema({
  firstName: {
    type: String,
    default: ""
  },
  middleName: {
    type: String,
    default: "",
  },
  lastName: {
    type: String,
    default: "",
  },
  rank: {
    type: String,
    default: "N/A",
  },
  branch: {
    type: String,
    default: "N/A",
  },
  warPeriod: {
    type: String,
    default: "N/A",
  },
  DOB: {
    type: String,
    default: "N/A",
  },
  DOD: {
    type: String,
    default: "N/A",
  },
  cemetery: {
    name: {
      type: String,
    },
    id: {
      type: Schema.Types.ObjectId, 
    }
  },
  cemeteryId: {
    type: Schema.Types.ObjectId,
    default: "N/A"
  },
  location: {
    type: String,
    default: "N/A",
  },
}, { timestamps: true });

module.exports = mongoose.model('veteran', vetSchema);

