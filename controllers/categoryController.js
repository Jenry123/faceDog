const Category = require("../models/category.js");

const createCategory = async (req, res) => {
  try {
    const categorys = await Category.create(req.body);
    res.status(201).json(categorys);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getAllCategorys = async (req, res) => {
  try {
    const categorys= await Category.findAll();
    res.status(200).json(categorys);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const updateCategory = async (req, res) => {
    try {
      const {nameRaza} = req.body;
      const category= await Category.findByPk(req.params.id);
  
      if (category) {
        category.nameRaza=nameRaza
  
        await category.save();
        res.status(200).json(category);
      } else {
        res.status(404).json({ message: 'category not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  
const deleteCategory = async (req, res) => {
    try {
      const category = await Category.findByPk(req.params.id);
  
      if (category) {
        await category.destroy();
        res.status(200).json({ message: 'category deleted successfully' });
      } else {
        res.status(404).json({ message: 'category not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };




module.exports = {
  createCategory,
  getAllCategorys,
  updateCategory,
  deleteCategory
};
