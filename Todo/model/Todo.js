const moongose=require('mongoose');
const todoschema=new moongose.Schema({
title:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
},
status:{
type:String,
required:true,
default:'active',
},

createdAt:{
    type:Date,
    required:true,
    default:Date.now()
},

uptadeddAt:{
    type:Date,
    required:true,
    default:Date.now()
},
deletedAt:{
    type:Date,
    required:true,
    default:Date.now()
}







});
module.exports=moongose.model('Todo',todoschema);
