const express = require('express');
const { createUser, loginUser, forgotPassword, resetPassword } = require('../controllers/auth.controller');
const {checkUsernameOrEmail} = require('../middlewares/verify-signup');
const router = express.Router();

router.post('/signup', checkUsernameOrEmail, createUser)
      .post('/signin', loginUser)
      .post('/forgot-password', forgotPassword)
      .post('/reset-password', resetPassword);
      
module.exports = router;