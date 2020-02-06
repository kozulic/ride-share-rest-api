const jwt = require('jsonwebtoken');

const config = require('../config');

const verifyToken = async (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    return res.status(401).send({ auth: false, message: 'No token found in header.' });
  }

  try {
    const result = await jwt.verify(token, config.secret);
    req.userId = result.id;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Authentication failed' });
    next(err);
  }
};

module.exports = verifyToken;