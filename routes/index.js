const express = require('express');
const router  = express.Router();
const {ensureAuthenticated} = require('../depends_config/auth') 

router.get('/', (req,res)=>{
    res.render('welcome');
})
router.get('/auth', (req,res)=>{

})
router.get('/chat',ensureAuthenticated,(req,res)=>{
    res.render('dashboard',{
    });
})
module.exports = router; 
