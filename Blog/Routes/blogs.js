const express = require("express");
const router=express.Router();
const { createLike,deletelike } = require('../Controller/likeblog');

const {createComment}=require('../Controller/commentblog');
const {createPost}=require('../Controller/postblog');
const {getAllpost}=require('../Controller/postblog');
router.post('/likes/like',createLike);
router.post('/likes/unlike',deletelike);
router.post('/comments/create',createComment);
router.post('/posts/create',createPost);
router.get('/posts',getAllpost);


module.exports=router;
