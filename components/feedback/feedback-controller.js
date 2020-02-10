const feedbackService = require('./feedback-service');

const getForUser = async (req, res) => {
  try {
    const result = await feedbackService.getForUser(req.params.userId);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getForRide = async (req, res) => {
  try {
    const result = await feedbackService.getForRide(req.params.rideId);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const create = async (req, res) => {
  try {
    req.body.writer = req.userId;
    const result = await feedbackService.create(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const update = async (req, res) => {
  try {
    const result = await feedbackService.update(req.params.id, req.body);
    res.json(result);   
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const remove = async (req, res) => {
  try {
    await feedbackService.remove(req.params.id);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getForUser,
  getForRide,
  create,
  update,
  remove
};