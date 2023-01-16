const { Schema, model } = require('mongoose');

const strainSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  thcContent: {
    type: Number,
    required: true
  },
  cbdContent: {
    type: Number,
    required: true
  },
  terpeneProfile: {
    type: String,
    required: true
  },
  effects: {
    type: [String],
    required: true
  },
  flavorNotes: {
    type: [String],
    required: true
  },
  availability: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('Strain', strainSchema);