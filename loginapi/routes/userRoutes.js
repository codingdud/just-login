const express = require('express');
const router = express.Router();
const {register,login,authenticate,refreshToken}=require('../controllers/userController')

router.post('/register',register);
router.post('/login',login);
router.get('/refreshToken',refreshToken);
router.get('/authenticate',authenticate);
router.get('/test',authenticate,(req,res)=>{
    res.json({"hello":"hi"})
})

module.exports = router;
