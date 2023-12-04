const express = require('express');
const { createNewContact, updateContact, deleteContact, getContactById, getContactList } = require('../controllers/contact.controller');
const router = express.Router();

router.post('/', createNewContact)
      .put('/:id', updateContact)
      .delete('/:id', deleteContact)
      .get('/:id', getContactById)
      .get('/', getContactList);
     
      
module.exports = router;