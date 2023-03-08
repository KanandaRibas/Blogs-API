const { Category } = require('../models');

const createCategory = async (name) => {
  try {
    const newCategory = await Category.create({ name });
    return newCategory;
  } catch (err) {
    return { type: 'error', message: err.message };
  }
};

const findAllCategories = async () => {
  const categories = await Category.findAll();
 return categories;
};

module.exports = { createCategory, findAllCategories };