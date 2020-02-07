const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rideOfferSchema = Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  startTime: { type: Date, required: true },
  expectedArrival: { type: Date, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  availableSeats: { type: Number, required: true },
  totalSeats: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  active: { type: Boolean, default: true },
  postTime: { type: Date },
});

const RideOffer = mongoose.model('RideOffer', rideOfferSchema);

module.exports = RideOffer;