const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({
  body: String,
  rating: Number,
  author: {
    type: Schema.Types.Object,
    ref: 'User'
  }
});

module.exports = mongoose.model('Review', reviewSchema);