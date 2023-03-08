const { User } = require('../models');

const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const getUserLogin = async (id) => {
  const user = await User.findOne({
    attributes: { exclude: ['password'] },
    where: { id },
   });
  return user;
};

const getUserById = async (id) => {
  const user = await User.findOne({ 
    where: { id },
    attributes: { exclude: ['password'] },
   });
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

const findAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
 return users;
};

module.exports = { getUserByEmail, getUserById, getUserLogin, createUser, findAllUsers };