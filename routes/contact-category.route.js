const express = require('express');
const { createNewContactCategory, updateContactCategory, deleteContactCategory, getContactCategoryById, getContactCategoryList } = require('../controllers/contact-category.controller');
const router = express.Router();

router.post('/', createNewContactCategory)
      .put('/:id', updateContactCategory)
      .delete('/:id', deleteContactCategory)
      .get('/:id', getContactCategoryById)
      .get('/', getContactCategoryList);
     
      
module.exports = router;