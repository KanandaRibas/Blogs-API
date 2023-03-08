const userServices = require('../../services/user.service');

module.exports = async (req, res, next) => {
  const { email } = req.body;
  const regexValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexValidation.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  const user = await userServices.getUserByEmail(email);

  if (user) {
  return res.status(409).json({ message: 'User already registered' });
  }
  next();
};