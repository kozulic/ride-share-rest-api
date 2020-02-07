const rideService = require('./ride-service');

const searchForRides = async (req, res) => {
  try {
    const result = await rideService.searchForRides(req.params.from, req.params.to, req.params.lowTime, req.params.highTime);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getUserRideOffers = async (req, res) => {
  try {
    const result = await rideService.getUserRideOffers(req.params.userId);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const result = await rideService.getById(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const create = async (req, res) => {
  try {
    req.body.user = req.userId;
    const result = await rideService.create(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const update = async (req, res) => {
  try {
    const result = await rideService.update(req.params.id, req.body);
    res.json(result);   
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const remove = async (req, res) => {
  try {
    await rideService.remove(req.params.id);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  searchForRides,
  getUserRideOffers,
  getById,
  create,
  update,
  remove
};