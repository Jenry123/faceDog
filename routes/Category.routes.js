const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController.js');

router.post('/categorys', categoryController.createCategory);

router.get('/categorys',categoryController.getAllCategorys);

router.put('/:id',categoryController.updateCategory);

router.delete('/:id',categoryController.deleteCategory)

module.exports = router;
