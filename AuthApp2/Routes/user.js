const express=require('express');
const router=express.Router();
const {login,signup}=require('../Controller/Auth');
const{auth,isStudent,isAdmin}=require('../middleware/auth')
router.post('/login',login);
router.post('/signup',signup);
//protected routes

router.get('/Student',auth,isStudent,(req,res)=>{
    return res.status(200).json({
        success:true,
        message:"Welcome to Student Dashboard"
    })
})

router.get('/Admin',auth,isAdmin,(req,res)=>{
    return res.status(200).json({
        success:true,
        message:"Welcome to Admin Dashboard"
    })
})


module.exports=router;