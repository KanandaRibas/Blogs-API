const { User } = require('../models');

const getByUserEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const createUser = async (displayName, email, password, image) => {
  try {
    const newUser = await User.create({ displayName, email, password, image });
    return newUser;
  } catch (err) {
    return { type: 'error', message: err.message };
  }
};

module.exports = { getByUserEmail, createUser };