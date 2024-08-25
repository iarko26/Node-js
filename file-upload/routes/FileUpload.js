const express=require('express');
const router=express.Router();
const{localfile}=require('../controller/fileupload');
router.post('/localfile',localfile);
module.exports=router;