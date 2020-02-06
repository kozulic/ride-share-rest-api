const userService = require('./user-service');

const login = async (req, res) => {
  try {
    const result = await userService.auth(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const register = async (req, res) => {
  try {
    const result = await userService.create(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const info = async (req, res) => {
  try {
    const result = await userService.info(req.userId);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getVehicles = async (req, res) => {
  try {
    const result = await userService.getVehicles(req.userId);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  login,
  register,
  info,
  getVehicles
};