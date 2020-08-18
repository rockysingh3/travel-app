const mongoose = require('mongoose')
const { Schema } = mongoose


const requiredString = {
    type: String,
    required: true
}

const requiredNumber = {
        type: Number,
        requried: true,
}



var logEnrySchema = new Schema({
  title: requiredString,
  Descript: String,
  comments: String,
  image: String,
  body:   {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
  },
  latitude: {
      ...requiredNumber,
      min: -90,
      max: 90
  },
  longitude: { 
      ...requiredNumber,
      min: -180,
      max: 180
  },
  visitDate: {
      required: true,
      type: Date,
  },
}, {
    timestamps: true
});


// create a model of the schema 
const LogEntry = mongoose.model('LogEntry', logEnrySchema)

// export the model 
module.exports = LogEntry