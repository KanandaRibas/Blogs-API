const categoryServices = require('../services/category.service');

const createCategory = async (req, res) => {
const { name } = req.body;

if (!name) {
  return res.status(400).json({ message: '"name" is required' });
}

const category = await categoryServices.createCategory(name);
 return res.status(201).json(category);
};

const getCategories = async (_req, res) => {
const categories = await categoryServices.findAllCategories();

res.status(200).json(categories);
};

module.exports = { createCategory, getCategories };