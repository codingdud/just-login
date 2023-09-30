const express = require('express');
const router = express.Router();
const {register,login,authenticate,refreshToken}=require('../controllers/userController')

router.post('/register',register);
router.post('/login',login);
router.post('/refreshToken',refreshToken);
router.get('/authenticate',authenticate);

module.exports = router;
