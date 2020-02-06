const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('./user-model');
const config =  require('../../config');

const create = async (body) => {
  try {
    const user = await User.findOne({ email: body.email });
    
    if (user) {
      throw new Error('User with this email already exists.');
    }

    body.password = bcrypt.hashSync(body.password, 10);

    // Delete password field from object
    let registeredUser = await User.create(body);
    registeredUser = registeredUser.toObject();
    delete registeredUser.password;

    const token = jwt.sign({ id: registeredUser._id }, config.secret, { expiresIn: '24h' });

    return {
      user: registeredUser,
      token
    };
  } catch (err) {
    throw new Error(err.message);
  }
};

const auth = async (body) => {
  try {
    let user = await User.findOne({ email: body.email });

    if (!user) {
      throw new Error('No user with given email');
    }

    const validPassword = bcrypt.compareSync(body.password, user.password);

    // Delete password field from object
    user = user.toObject();
    delete user.password;

    if (!validPassword) {
      throw new Error('Wrong password');
    }

    const token = jwt.sign({ id: user._id }, config.secret, { expiresIn: '24h' });

    return {
      user,
      token
    };

  } catch (err) {
    throw new Error(err.message);
  }
};

const info = async (userId) => {
  try {
    const user = await User.findById(userId, 'firstName lastName username email contactNumber');

    if (!user) {
      throw new Error('No user with given id');
    }

    return user;

  } catch (err) {
    throw new Error(err.message);
  }
};

const getVehicles = async (userId) => {
  try {
    const user = await User.findById(userId, 'vehicles');

    if (!user) {
      throw new Error('No user with given id');
    }

    return user;

  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  create,
  auth,
  info,
  getVehicles
}