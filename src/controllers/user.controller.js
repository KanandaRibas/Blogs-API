require('dotenv/config');
const jwt = require('jsonwebtoken');
const userServices = require('../services/user.service');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

module.exports = async (req, res) => {
const { displayName, email, password, image } = req.body;

const { dataValues } = await userServices.createUser(displayName, email, password, image);

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const token = jwt.sign({ data: { userId: dataValues.id } }, secret, jwtConfig);

res.status(201).json({ token });
};