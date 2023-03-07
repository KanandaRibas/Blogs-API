require('dotenv/config');
const jwt = require('jsonwebtoken');
const userServices = require('../services/user.service');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

module.exports = async (req, res) => {
const { email, password } = req.body;

if (!(email && password)) {
  return res.status(400).json({ message: 'Some required fields are missing' });
}

const user = await userServices.getByUserEmail(email);

if (!user || user.password !== password) {
  return res.status(400).json({ message: 'Invalid fields' }); 
}
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);

res.status(200).json({ token });
};