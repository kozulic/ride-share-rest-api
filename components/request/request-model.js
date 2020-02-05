const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const requestSchema = Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  rideOffer: { type: Schema.Types.ObjectId, ref: 'RideOffer' },
  passenger: { type: Schema.Types.ObjectId, ref: 'User' },
  driver: { type: Schema.Types.ObjectId, ref: 'User' },
  comment: { type: String },
  status: { type: String },
  requestTime: { type: Date },
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;