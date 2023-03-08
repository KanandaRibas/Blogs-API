require('dotenv/config');
const jwt = require('jsonwebtoken');
const userServices = require('../services/user.service');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

module.exports = async (req, res) => {
const { email } = req.body;

const user = await userServices.getUserByEmail(email);

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);

res.status(200).json({ token });
};
