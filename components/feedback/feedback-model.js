const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const feedbackSchema = Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  grade: { type: Number, required: true },
  comment: { type: String },
  ride: { type: Schema.Types.ObjectId, ref: 'RideOffer' },
  writer: { type: Schema.Types.ObjectId, ref: 'User' },
  receiver: { type: Schema.Types.ObjectId, ref: 'User' },
  feedbackTime: { type: Date },
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;