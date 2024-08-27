const express=require('express');
const router=express.Router();
const{localfile,imageuploader, vidoeuploader,imageSizer}=require('../controller/fileupload');
router.post('/localfile',localfile);
router.post('/imageuploader',imageuploader);
router.post('/vidoeuploader',vidoeuploader);
router.post('/imageSizer',imageSizer);

module.exports=router;