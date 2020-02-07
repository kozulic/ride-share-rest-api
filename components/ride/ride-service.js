const Ride = require('./ride-model');

const searchForRides = async (from, to, lowTime, highTime) => {
  try {
    return await Ride.find({ from: from, to: to, active: true, startTime: { $gte: new Date(lowTime), $lte: new Date(highTime) },}, 
    'startTime exprectedArrival from to price active');
  } catch (err) {
    throw new Error(err.message);
  }
};

const getUserRideOffers = async (userId) => {
  try {
    return await Ride.find({ user: userId }, 'startTime exprectedArrival from to price active');
  } catch (err) {
    throw new Error(err.message);
  }
};

const getById = async (rideId) => {
  try {
    return await Ride.findById(rideId);
  } catch (err) {
    throw new Error(err.message);
  }
};

const create = async (body) => {
  try {
    return await Ride.create(body);
  } catch (err) {
    throw new Error(err.message);
  }
};

const update = async (rideId, body) => {
  try {
    return await Ride.findByIdAndUpdate(rideId, body);
  } catch (err) {
    throw new Error(err.message);
  }
};

const remove = async (rideId) => {
  try {
    await Ride.findByIdAndRemove(rideId);
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  searchForRides,
  getUserRideOffers,
  getById,
  create,
  update,
  remove
}