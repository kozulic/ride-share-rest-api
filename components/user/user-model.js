const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  contactNumber: { type: String, required: true },
  vehicles: [{ manufacturer: String, model: String, color: String, year: Number }],
  rideOffers: [{ type: Schema.Types.ObjectId, ref: 'RideOffer' }],
  feedbacks: [{ type: Schema.Types.ObjectId, ref: 'Feedback' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;