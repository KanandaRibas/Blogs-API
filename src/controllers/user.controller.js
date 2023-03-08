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

module.exports = { createUser, getUsers };