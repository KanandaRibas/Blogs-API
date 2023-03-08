require('dotenv/config');
const jwt = require('jsonwebtoken');
const userServices = require('../services/user.service');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const createUser = async (req, res) => {
const { displayName, email, password, image } = req.body;

const { dataValues } = await userServices.createUser(displayName, email, password, image);

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const token = jwt.sign({ data: { userId: dataValues.id } }, secret, jwtConfig);

res.status(201).json({ token });
};

const getUsers = async (_req, res) => {
const users = await userServices.findAllUsers();

res.status(200).json(users);
};

const getByUserId = async (req, res) => {
  const { id } = req.params;
  const getUser = await userServices.getUserById(id);
  
  if (!getUser) {
    console.log(getUser);
    return res.status(404).json({ message: 'User does not exist' });
  }

  return res.status(200).json(getUser);
  };

module.exports = { createUser, getUsers, getByUserId };