const express = require('express');
const router = express.Router();
const {authenticate}=require('../controllers/userController')
const {createProduct,getAllProducts,getProductById,updateProduct,deleteProduct}= require('../controllers/productController')


router.get('/test',(req,res)=>{
    res.json("string")
})
router.post('/', createProduct);
router.get('/',getAllProducts);
router.get('/:id',getProductById);
router.put('/:id',updateProduct);
router.delete('/:id',deleteProduct);

module.exports = router;
