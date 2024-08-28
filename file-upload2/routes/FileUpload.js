const express=require('express');
const router=express.Router();
const{localfile,imageuploader, vidoeuploader}=require('../controller/fileupload');
router.post('/localfile',localfile);
router.post('/imageuploader',imageuploader);
router.post('/vidoeuploader',vidoeuploader);


module.exports=router;