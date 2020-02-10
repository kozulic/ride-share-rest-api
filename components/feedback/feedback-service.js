const Feedback = require('./feedback-model');

const getForUser = async (userId) => {
  try {
    return await Feedback.find({ receiver: userId })
      .populate('writer', 'firstName lastName');
  } catch (err) {
    throw new Error(err.message);
  }
};

const getForRide = async (rideId) => {
  try {
    return await Feedback.find({ ride: rideId })
      .populate('writer', 'firstName lastName');
  } catch (err) {
    throw new Error(err.message);
  }
};

const create = async (body) => {
  try {
    return await Feedback.create(body);
  } catch (err) {
    throw new Error(err.message);
  }
};

const update = async (feedbackId, body) => {
  try {
    await Feedback.findByIdAndUpdate(feedbackId, body);
    return await Feedback.findById(feedbackId);
  } catch (err) {
    throw new Error(err.message);
  }
};

const remove = async (feedbackId) => {
  try {
    await Feedback.findByIdAndRemove(feedbackId);
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  getForUser,
  getForRide,
  create,
  update,
  remove
}