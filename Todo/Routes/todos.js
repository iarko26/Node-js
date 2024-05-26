const express = require('express');
const router = express.Router();
//import the controller

const {createTodo}=require('../controller/crtodo');
const {getTodo,getSTodo}=require('../controller/gtodo');
const {updateTodo}=require('../controller/uptodo');
const {deleteTodo}=require('../controller/Deletetodo');
//define api routes

router.post('/crtodo',createTodo);
router.get('/gtodo',getTodo);
router.get('/gtodo/:id',getSTodo);
router.put('/uptodo/:id',updateTodo);
router.delete('/Deletetodo/:id',deleteTodo);

//export the router
module.exports=router;
